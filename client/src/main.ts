import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(()=> {
    // The registration could be done by adding a script tag in the index to a specific file with this logic as sw-register.js
    // however this way is better because it waits until the app is stable and that way the user experience turns better.
    // we check if there is browser support for service workers
    if ('serviceWorker' in navigator) {

      navigator.serviceWorker.register('/sw.js', {
          scope: '/'
      }).then((registration)=> {
          console.log('registration of service worker success');
      })
    }
  })
  .catch(err => console.error(err));
