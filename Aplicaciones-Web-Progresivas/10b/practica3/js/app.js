if (navigator.serviceWorker) {
    navigator.serviceWorker.register('https://matcrojas.github.io/Aplicaciones-Web-Progresivas/10b/practica3/sw.js');
} else {
    console.log('No se permite SW :(');
}