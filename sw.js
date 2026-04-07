// Flux — Service Worker (sw.js)
//
// DE: Diese Datei muss separat zur index.html existieren, da Browser
//     Service Worker nur aus eigenständigen JS-Dateien registrieren können.
//     Strategie: Network-first mit gezieltem Caching für die App-Shell.
//     Alte Cache-Versionen werden beim Aktivieren aufgeräumt.
//
// EN: This file must exist separately from index.html because browsers
//     can only register Service Workers from standalone JS files.
//     Strategy: network-first with targeted app-shell caching.
//     Old cache versions are cleaned up during activation.

const CACHE = 'flux-v20';
const SYNC_TAG = 'flux-sync-app-shell';
const PERIODIC_SYNC_TAG = 'flux-periodic-sync-app-shell';
const APP_SHELL = [
  './',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg',
  './index.html',
  './js/app.js',
  './js/boards.js',
  './js/calendar.js',
  './js/help.js',
  './js/i18n.js',
  './js/notes.js',
  './js/storage.js',
  './js/vendor/pwa-install.js',
  './manifest.json',
  './og-image.png',
  './sw.js',
  './styles.css'
];

async function refreshAppShellCache() {
  const cache = await caches.open(CACHE);
  await Promise.all(APP_SHELL.map(async function(asset) {
    try {
      const response = await fetch(new Request(asset, { cache: 'reload' }));
      if (response && response.ok) await cache.put(asset, response.clone());
    } catch (e) {}
  }));
}

async function postMessageToClients(message) {
  const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  windows.forEach(function(client) {
    try { client.postMessage(message); } catch (e) {}
  });
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', function(e) {
  const data = e.data || {};
  if (data && data.type === 'SKIP_WAITING') {
    e.waitUntil(self.skipWaiting());
    return;
  }
  if (data && data.type === 'REFRESH_APP_SHELL') {
    e.waitUntil(
      refreshAppShellCache().then(function() {
        return postMessageToClients({ type: 'APP_SHELL_REFRESHED' });
      })
    );
  }
});

self.addEventListener('sync', function(e) {
  if (e.tag !== SYNC_TAG) return;
  e.waitUntil(
    refreshAppShellCache().then(function() {
      return postMessageToClients({ type: 'APP_SHELL_SYNCED' });
    })
  );
});

self.addEventListener('periodicsync', function(e) {
  if (e.tag !== PERIODIC_SYNC_TAG) return;
  e.waitUntil(
    refreshAppShellCache().then(function() {
      return postMessageToClients({ type: 'APP_SHELL_PERIODIC_SYNCED' });
    })
  );
});

self.addEventListener('push', function(e) {
  let payload = {};
  try {
    payload = e.data ? e.data.json() : {};
  } catch (err) {
    payload = { body: e.data ? e.data.text() : '' };
  }
  const title = payload.title || 'Flux';
  const options = {
    body: payload.body || 'New activity is available in Flux.',
    icon: payload.icon || './icons/icon-192.png',
    badge: payload.badge || './icons/icon-192.png',
    tag: payload.tag || 'flux-push',
    data: {
      url: payload.url || './'
    }
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(e) {
  const targetUrl = (e.notification && e.notification.data && e.notification.data.url) || './';
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (const client of clientList) {
        if ('focus' in client) {
          client.postMessage({ type: 'FOCUS_FROM_NOTIFICATION', url: targetUrl });
          return client.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
      return undefined;
    })
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.ok) caches.open(CACHE).then(c => c.put('./index.html', res.clone()));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  const isAppShell = APP_SHELL.includes(url.pathname) || APP_SHELL.includes('./' + url.pathname.replace(/^\//, ''));
  const isStaticAsset = ['script', 'style', 'image', 'font', 'manifest'].includes(e.request.destination);
  if (!isAppShell && !isStaticAsset) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.ok) {
          const resClone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, resClone)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
