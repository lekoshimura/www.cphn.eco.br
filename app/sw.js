// https://developers.google.com/web/fundamentals/primers/service-workers/#register_a_service_worker
var CACHE_NAME = '2019-02-02-01';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/scripts/index.js',
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
        if (event.request.url.indexOf(event.request.referrer) < 0) {
          return response
        } else {
          return caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, response.clone());
            return response;
          });
        }
      });
    })
  );
});

// Delete outdated caches
// We can get rid of unused caches in the service worker "activate" event.
self.addEventListener('activate', event => {
  console.log('Activating new service worker...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
