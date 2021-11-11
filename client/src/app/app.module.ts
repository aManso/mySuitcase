import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/shared/shared.module';
import { NotFoundModule } from './not-found/not-found.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PathResolver } from './core/resolvers/path-resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NotFoundModule,
    SharedModule,
    // Material
    MatButtonModule,
    MatDialogModule,
    // Tip: The routing module must be the last to import. Why? It is possible that a series of modules will not be loaded when routing.
    AppRoutingModule,
  ],
  providers: [
    PathResolver,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
