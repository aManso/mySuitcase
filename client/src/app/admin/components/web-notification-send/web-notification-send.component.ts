import {
  Component, Input,
} from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { EXTENDED_SNACKBAR_TIME } from 'src/app/core/config/config';
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
      this._snackBar.open('La suscripción ha sido enviada satisfactoriamente', '', {duration: EXTENDED_SNACKBAR_TIME});
    }, ((error)=> {
      console.log(error);
      this._snackBar.open('Ha habido un problema al enviar la notificacion, por favor intentelo de nuevo más tarde', '', {duration: EXTENDED_SNACKBAR_TIME});
    }));
  }

}
