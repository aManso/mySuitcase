import {
  Component, Input,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EXTENDED_SNACKBAR_TIME } from 'src/app/core/config/config';
import { FRONTEND_ERRORS } from 'src/app/core/const/frontend-errors';
import { FRONTEND_MESSAGES } from 'src/app/core/const/frontend-messages';
import { Notification } from 'src/app/core/models/notification';

import { AdminNotificationsService } from '../../notifications/notifications.service';

@Component({
  selector: 'web-notification-send',
  styles: [`.send-button{ display: flex; align-items: center; width: 200px; justify-content: space-between;}`],
  templateUrl: './web-notification-send.component.html',
})
export class WebNotificationSendComponent {
  @Input() notificationId: string;

  constructor(
    private _notificationsService: AdminNotificationsService,
    private _snackBar: MatSnackBar,
  ) {
  }

  public sendNotification() {
    this._notificationsService.sendNotification(this.notificationId).subscribe(()=> {
      this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_SENT_NOTIFICATION.title, FRONTEND_MESSAGES.CONFIRMATION_SENT_NOTIFICATION.message, {duration: EXTENDED_SNACKBAR_TIME});
    }, ((error)=> {
      console.log(error);
      this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.title, FRONTEND_ERRORS.GENERAL_ERROR.message, {duration: EXTENDED_SNACKBAR_TIME});
    }));
  }

}
