self.addEventListener('install', (event) => {
    console.log("Instalado");

    const respCache = caches.open('cache-v1').then((cache) => {
        return cache.addAll([
            'https://mathcrojas.github.io/Aplicaciones-Web-Progresivas/only-cache/',
            'https://mathcrojas.github.io/Aplicaciones-Web-Progresivas/only-cache/index.html',
            'https://mathcrojas.github.io/Aplicaciones-Web-Progresivas/only-cache/css/style.css',
            'https://mathcrojas.github.io/Aplicaciones-Web-Progresivas/only-cache/js/app.js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js'
        ]);

    });

    const respCache2 = caches.open('cache-v2').then((cache) => {
        return cache.add('https://reqres.in/api/users?page=2');

    });

    event.waitUntil(respCache);
    event.waitUntil(respCache2);

})

//only cache
self.addEventListener('fetch', (event) => {

    if(!event.request.url.includes('https://reqres.in/api/users')){
        const respCache = caches.match(event.request);

        event.respondWith(respCache);
    }

});

