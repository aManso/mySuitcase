
const VERSION = 'v50';

function log(message) {
    console.log(VERSION, message);
}

log('Installing Service Worker')


// we can add event listeners like the installation event
self.addEventListener('install', ()=> {
    log('version is installed')
})

// The installation is trigger once, while the activation is trigger multiple times    
self.addEventListener('activate', (e) => {
    log('version is activated')
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if(key !== cacheName) {
                return caches.delete(key);
            }
        }));
    }));
});

self.addEventListener('fetch',() => console.log("fetch"));
