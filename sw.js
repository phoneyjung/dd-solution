// D.D. Solution Service Worker
const CACHE_NAME = 'dd-solution-v1';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS).catch(() => {}))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
    ))
  );
});

self.addEventListener('fetch', (e) => {
  // Network-first for Firebase, cache-first for app assets
  if (e.request.url.includes('firestore') || e.request.url.includes('firebaseio')) {
    return; // let it pass through
  }
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
