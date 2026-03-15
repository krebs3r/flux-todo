// Flux — Service Worker
//
// DE: Diese Datei muss separat zur index.html existieren, da Browser
//     Service Worker nur aus eigenständigen JS-Dateien registrieren können.
//     Strategie: Network-first — online wird immer die aktuelle Version geladen,
//     der Cache dient nur als Fallback für den Offline-Betrieb.
//     Kein manuelles Versions-Update nötig.
//
// EN: This file must exist separately from index.html because browsers
//     can only register Service Workers from standalone JS files.
//     Strategy: Network-first — always serves fresh content when online,
//     the cache is only used as a fallback for offline mode.
//     No manual version update required.

const CACHE = 'flux';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['./', './index.html'])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// Network first, cache fallback — always serves fresh content when online
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
