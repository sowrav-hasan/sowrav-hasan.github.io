// Service Worker for offline functionality and caching
const CACHE_NAME = "sowrav-portfolio-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/projects.html",
  "/css/bootstrap.min.css",
  "/css/style.css",
  "/css/responsive.css",
  "/js/main.js",
  "/js/bootstrap.bundle.min.js",
  "/js/gsap.min.js",
  "/images/logo.svg",
  "/images/favicon.ico",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
