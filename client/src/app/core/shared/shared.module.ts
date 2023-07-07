import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { FooterModule } from './footer/footer.module';
import { NavBarModule } from './navbar/navbar.module';
import { PwaInstallerComponent } from './pwa-installer/pwa-installer.component';
import { WebNotificationSubscriberComponent } from './web-notification-subscriber/web-notification-subscriber.component';
import { ExtraFieldsInfoBottomSheetComponent } from './extra-fields-info-bottom-sheet/extra-fields-info-bottom-sheet.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    InfoDialogComponent,
    PwaInstallerComponent,
    WebNotificationSubscriberComponent,
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
    WebNotificationSubscriberComponent,
    ExtraFieldsInfoBottomSheetComponent,
    InfoDialogComponent,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
