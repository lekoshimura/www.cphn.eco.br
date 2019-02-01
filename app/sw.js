// https://developers.google.com/web/fundamentals/primers/service-workers/#register_a_service_worker
caches.delete('www-cphn-eco-br-cache-v1');
caches.delete('www-cphn-eco-br-cache-v2');
var CACHE_NAME = 'www-cphn-eco-br-cache-v3';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/scripts/index.js',
  '/images/logo-white.png',
  '/images/logo-green.png',
  'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.5/lazysizes-umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'
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
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
  );
});