// For convention, its commonly used to have a centralized sw file that register all the other sws

// we check if there is browser support for service workers
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    }).then((registration)=> {
        console.log('registration of service worker success');
    })
}