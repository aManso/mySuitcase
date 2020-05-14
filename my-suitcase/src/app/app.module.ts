import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/shared/shared.module';
import { NotFoundModule } from './core/shared/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotFoundModule,
    SharedModule,
    // Tip: The routing module must be the last to import. Why? It is possible that a series of modules will not be loaded when routing.
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
