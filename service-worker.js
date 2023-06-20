// service-worker.js

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('fika-cache').then((cache) => {
      return cache.addAll([
        '/',
        'index.html',
        'imagen1.jpeg',
        'imagen2.jpeg',
        'imagen3.jpeg',
        'imagen4.jpeg',
        'imagen5.jpeg',
        'imagen6.jpeg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
