import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterModule } from './footer/footer.module';
import { NavBarModule } from './navbar/navbar.module';
import { PwaInstallerComponent } from './pwa-installer/pwa-installer.component';
import { WebNotificationSuscriberComponent } from './web-notification-suscriber/web-notification-suscriber.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    PwaInstallerComponent,
    WebNotificationSuscriberComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // Angular material
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavBarModule,
    FooterModule,
    PwaInstallerComponent,
    WebNotificationSuscriberComponent,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
