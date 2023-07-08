if (navigator.serviceWorker) {
    navigator.serviceWorker.register('https://mathcrojas.github.io/Aplicaciones-Web-Progresivas/cache-with-network/sw.js');
} else {
    console.log('No se permite SW');
}
