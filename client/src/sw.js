
const VERSION = 'v13';

function log(message) {
    console.log(VERSION, message);
}

log('Installing Service Worker')


// we can add event listeners like the installation event
self.addEventListener('install', ()=> {
    log('version is installed')
})

// The installation is trigger once, while the activation is trigger multiple times
self.addEventListener('activate', ()=> {
    log('version is activated')
})