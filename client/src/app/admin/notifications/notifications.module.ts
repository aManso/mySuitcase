import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications-component/notifications.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS as MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

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
