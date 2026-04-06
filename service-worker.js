// Flux — Service Worker
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

const CACHE = 'flux-v18';
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
  './service-worker.js',
  './styles.css'
];

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
        if (res && res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
