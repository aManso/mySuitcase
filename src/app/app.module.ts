import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/shared/shared.module';
import { NotFoundModule } from './not-found/not-found.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MYSUITCASE_CONFIG, MYSUITCASE_CONFIG_TOKEN } from './app.config';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TokenInterceptorService } from './core/interceptor/token-interceptor.service';
import { ConfigService } from './core/services/config.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NotFoundModule,
    SharedModule,
    // Material
    MatButtonModule,
    MatDialogModule,
    // we register the service worker module and the file that is generated in the dist folder for prod build to cache all the static main files
    // important!! In order to capture the REST calls, only non-mutating requests (GET and HEAD) are cached.
    // Code created by @angular/pwa 
    ServiceWorkerModule.register('ngsw-worker.js', {
      // we enable it just for prod because the ngsw-worker.js file is a generated file from the .json configuration not available in other than prod
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // Tip: The routing module must be the last to import. Why? It is possible that a series of modules will not be loaded when routing.
    AppRoutingModule,
  ],
  providers: [
    ConfigService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true} },
    { provide: MYSUITCASE_CONFIG_TOKEN, useValue: MYSUITCASE_CONFIG },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
