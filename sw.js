// Nome do cache (mude o número 'v1' se fizer grandes atualizações no futuro)
const CACHE_NAME = 'mestres-do-saber-v2';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    './database.js'
];

// Instalação do Service Worker e cache dos arquivos iniciais
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching all: app shell and content');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Estratégia de Cache: Cache Primeiro, depois Rede
// Se o arquivo já estiver salvo no celular, usa ele (mais rápido/offline).
// Se não estiver, tenta buscar na internet.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Limpeza de caches antigos (útil para futuras atualizações)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});