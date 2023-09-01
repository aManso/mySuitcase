
const VERSION = 'v2';

function log(message) {
    console.log(VERSION, message);
}

log('Installing Service Worker')


// we can add event listeners like the installation event
self.addEventListener('install', installServiceWorker())

async function installServiceWorker() {
    log("Service worker installlation started");

    // ****************** THIS IS VALID FOR DEVELOPMENT ENV TO CACHE SOME STATIC FILES,
    // FOR PROD WE BETTER USE THE ngsw-config.json file that is registered from app.module.ts ************
    // we create the request of the offline html to be used in the future
    const request = new Request('offline.html');
    // we request the file and store the response
    const response = await fetch(request);
    log("response of the fetching the offline file: ", response);
    // if there is an error at fecthing, we cancel the installation of the service worker by throwing an error
    if (response.status !== 200) {
        throw new Error('Could not load the offline page');
    }
    // we get access to the cache storage
    const cache = await caches.open(getCacheName());
    // we load some static resources used in the initial screen
    // Its possible to also cache some http request that brings data from the ddbb but not recommended, only for static data like html, css and js
    await cache.addAll([
        '/',
        '/favicon.ico',
        '/manifest.webmanifest',
        '/pwa-installer.js',
        '/assets/img/notifications/notifications.jpg',
        '/assets/img/home/undraw_world.svg',
        '/assets/img/home/undraw_airport.svg',
        '/assets/img/logo/logo.png',
    ]);
    // we set the offline file in the cache
    cache.put(request, response);
    log('Cached offline.html');

    // ************************************************************************
}

function getCacheName() {
    return "app-cache-"+VERSION;
}

// The installation is always done in the background, but the activation is actually what changes the used to the new version 
self.addEventListener('activate', (e) => {
    log('version is activated')
    // we removed any other older cache versions
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if(key !== getCacheName()) {
                return caches.delete(key);
            }
        }));
    }));
    // this is used to not wait for the activation of the new version until forcing it or closing all the tabs,
    // but inmidiatly or eagerly activate the new version as soon as this has been installed (and closing the current tab)
    // This behaviour is not recommended because of the possibility of imcomaptibilities between versions
    // clients.claim();
});

// This event is triggered whenever a http request is done, to request static or dynamic resources
// This is needed for the pwa mechanisim to work the installation button
self.addEventListener('fetch', (event) => {
    console.log("fetch");
    event.respondWith(cacheThenNetwork(event));
});

async function cacheThenNetwork(event) {
    const cache = await caches.open(getCacheName());
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
        log('From Cache: ' + event.request.url);
        return cachedResponse;
    }
    return showOfflineIfError(event);
}

async function showOfflineIfError(event) {
    console.log("calling network: ", event.request.url);
    let response;
    try {
        response = await fetch(event.request);
    } catch(err) {
        // TODO it does nto work
        console.log("Network request failed: ", err);
        const cache = await caches.open('app-cache');
        response = cache.match("offline.html");
    }
    return response;
}