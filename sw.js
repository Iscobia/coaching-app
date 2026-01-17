const CACHE_NAME = 'coaching-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  // si tu ajoutes un fichier CSS ou images, tu peux les mettre ici
];

// Installer le service worker et mettre les fichiers en cache
self.addEventListener('install', event => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Mise en cache des fichiers');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activer le service worker
self.addEventListener('activate', event => {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Intercepter les requêtes et servir depuis le cache si disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
