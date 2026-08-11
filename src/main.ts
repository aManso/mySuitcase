/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, Meta } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { MYSUITCASE_CONFIG, MYSUITCASE_CONFIG_TOKEN } from './app/app.config';
import { TokenInterceptorService } from './app/core/interceptor/token-interceptor.service';
import { configLocaleFactory, ConfigService } from './app/core/services/config.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatDialogModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        registrationStrategy: 'registerWhenStable:30000',
      }),
      AppRoutingModule,
    ),
    ConfigService,
    Meta,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: MYSUITCASE_CONFIG_TOKEN, useValue: MYSUITCASE_CONFIG },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useFactory: configLocaleFactory },
  ],
})
  .then(()=> {
    // The registration could be done by adding a script tag in the index to a specific file with this logic as sw-register.js
    // however this way is better because it waits until the app is stable and that way the user experience turns better.
    // we check if there is browser support for service workers
    if ('serviceWorker' in navigator) {
      const language = getLocale();
      const filePath = language + '/sw.js';
      navigator.serviceWorker.register(filePath, {
          scope: language + '/'
      }).then((registration)=> {
          console.log('registration of service worker success');
      })
    }
  })
  .catch(err => console.error(err));

  function getLocale() {
    return window.location.pathname.substring(window.location.pathname.indexOf('/'), window.location.pathname.lastIndexOf('/'));
  }
