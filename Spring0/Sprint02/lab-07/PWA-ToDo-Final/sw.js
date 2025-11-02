const CACHE_NAME = 'todo-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js',
  '/offline.html',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match('/offline.html'))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request)
          .then(response => {
            if (response.ok) {
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
            }
            return response;
          }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
  }
});
