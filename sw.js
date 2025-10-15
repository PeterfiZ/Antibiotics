const CACHE_NAME = 'ab-oktato-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'antibiotics_hu.js',
  'antibiotics_en.js',
  'antibiotics_de.js',
  'diseases_hu.js',
  'diseases_en.js',
  'diseases_de.js',
  'pathogens_hu.js',
  'pathogens_en.js',
  'pathogens_de.js',
  'test_hu.js',
  'test_en.js',
  'test_de.js',
  'https://cdn.tailwindcss.com/'
];

// Telepítés esemény: gyorsítótárazza az alapvető fájlokat
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Aktiválás esemény: törli a régi gyorsítótárakat
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
});

// Fetch esemény: válaszol a gyorsítótárból, ha elérhető
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});