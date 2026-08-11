import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './footer/containers/footer.component';
import { NavBarModule } from './navbar/navbar.module';
import { PwaInstallerComponent } from './pwa-installer/pwa-installer.component';
import { WebNotificationSubscriberComponent } from './web-notification-subscriber/web-notification-subscriber.component';
import { ExtraFieldsInfoBottomSheetComponent } from './extra-fields-info-bottom-sheet/extra-fields-info-bottom-sheet.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // Angular material
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    // Standalone components
    ErrorDialogComponent,
    InfoDialogComponent,
    PwaInstallerComponent,
    WebNotificationSubscriberComponent,
    ExtraFieldsInfoBottomSheetComponent,
    FooterComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavBarModule,
    FooterComponent,
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
