import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/shared/shared.module';
import { NotFoundModule } from './not-found/not-found.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { AuthorizationGuard } from './core/guards/authorization.guard';
import { TokenInterceptorService } from './core/interceptor/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { TimeoutDialogComponent } from './timeout-dialog/timeout-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TimeoutDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NotFoundModule,
    SharedModule,
    HttpClientModule,
    // Material
    MatButtonModule,
    MatDialogModule,
    // Tip: The routing module must be the last to import. Why? It is possible that a series of modules will not be loaded when routing.
    AppRoutingModule,
  ],
  providers: [
    AuthenticationGuard,
    AuthorizationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  entryComponents: [
    TimeoutDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
