import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications-component/notifications.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyDialogModule as MatDialogModule, MAT_LEGACY_DIALOG_DEFAULT_OPTIONS as MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { AdminNotificationsService } from './notifications.service';
import { NotificationsResolver } from './notifications-resolver';
import { WebNotificationSendComponent } from '../components/web-notification-send/web-notification-send.component';
import { CreateNotificationComponent } from './create-notification-component/create-notification.component';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    // App
    NotificationsRoutingModule,
    SharedModule,
    // Angular Material
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
  ],
  declarations: [
    NotificationsComponent,
    CreateNotificationComponent,
    WebNotificationSendComponent,
  ],
  providers: [
    AdminNotificationsService,
    NotificationsResolver,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
})
export class NotificationsModule {
  constructor() {}
}
