import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { FooterModule } from './footer/footer.module';
import { NavBarModule } from './navbar/navbar.module';
import { PwaInstallerComponent } from './pwa-installer/pwa-installer.component';
import { WebNotificationSuscriberComponent } from './web-notification-suscriber/web-notification-suscriber.component';
import { ExtraFieldsInfoBottomSheetComponent } from './extra-fields-info-bottom-sheet/extra-fields-info-bottom-sheet.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    InfoDialogComponent,
    PwaInstallerComponent,
    WebNotificationSuscriberComponent,
    ExtraFieldsInfoBottomSheetComponent,
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
    ExtraFieldsInfoBottomSheetComponent,
    InfoDialogComponent,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
