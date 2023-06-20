// service-worker.js

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('fika-cache').then((cache) => {
      return cache.addAll([
        '/fika/',
        '/fika/index.html',
        '/fika/imagen1.jpeg',
        '/fika/imagen2.jpeg',
        '/fika/imagen3.jpeg',
        '/fika/imagen4.jpeg',
        '/fika/imagen5.jpeg',
        '/fika/imagen6.jpeg'
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
