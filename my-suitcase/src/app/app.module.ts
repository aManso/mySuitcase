import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/shared/shared.module';
import { NotFoundModule } from './not-found/not-found.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { AuthorizationGuard } from './core/guards/authorization.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotFoundModule,
    SharedModule,
    HttpClientModule,
    // Tip: The routing module must be the last to import. Why? It is possible that a series of modules will not be loaded when routing.
    AppRoutingModule,
  ],
  providers: [
    AuthenticationGuard,
    AuthorizationGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
