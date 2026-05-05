// D.D. Solution Service Worker v10 (Fix: KPI counts include closed docs)
const CACHE_VERSION = 'v10-' + new Date().toISOString().split('T')[0];
const CACHE_NAME = 'dd-solution-' + CACHE_VERSION;
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.png',
];

// Install: cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => 
      cache.addAll(ASSETS).catch(() => {})
    )
  );
  self.skipWaiting();
});

// Activate: clear ALL old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE_NAME).map((k) => {
        console.log('[SW] Deleting old cache:', k);
        return caches.delete(k);
      })
    )).then(() => self.clients.claim())
  );
});

// Fetch strategy: Network-first สำหรับ HTML/JS, Cache-first สำหรับรูป
self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  
  // ปล่อยให้ Firebase / Google APIs / ImgBB ผ่านไปตรงๆ
  if (url.includes('firestore') || 
      url.includes('firebaseio') ||
      url.includes('googleapis.com') ||
      url.includes('gstatic.com') ||
      url.includes('imgbb.com') ||
      url.includes('ibb.co')) {
    return;
  }
  
  // Network-first สำหรับ HTML, JS, JSON (ดึงเวอร์ชั่นใหม่ก่อน)
  const isCodeFile = url.endsWith('.html') || 
                      url.endsWith('.js') || 
                      url.endsWith('.json') ||
                      url.endsWith('/');
  
  if (isCodeFile) {
    e.respondWith(
      fetch(e.request).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match(e.request).then(c => c || caches.match('./index.html')))
    );
    return;
  }
  
  // Cache-first สำหรับรูป/อื่นๆ
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

// รับข้อความจากแอปเพื่อ force update
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
