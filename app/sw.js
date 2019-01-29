// https://developers.google.com/web/fundamentals/primers/service-workers/#register_a_service_worker
caches.delete('www-cphn-eco-br-cache-v1');
var CACHE_NAME = 'www-cphn-eco-br-cache-v2';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo-white.png',
  '/images/logo-green.png'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// If we were being really clever, we would not only request the resource from the network;
// we would also save it into the cache so that later requests
// for that resource could be retrieved offline too
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (resp) {
      return resp || fetch(event.request).then(function (response) {
        return caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
