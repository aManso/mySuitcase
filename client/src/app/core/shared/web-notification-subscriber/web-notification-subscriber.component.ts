import {
  AfterViewInit,
  Component,
} from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { EXTENDED_SNACKBAR_TIME } from '../../config/config';
import { BACKEND_ERRORS, BACKEND_ERROR_TYPES } from '../../const/backend-errors';
import { FRONTEND_ERRORS, FRONTEND_ERROR_TYPES } from '../../const/frontend-errors';

import { NotificationsService } from '../../../public/services/notifications.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { SaveDialogComponent } from 'src/app/public/create-suitcase/components/dialog/save-dialog.component';
import { FRONTEND_MESSAGES } from '../../const/frontend-messages';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'web-notification-subscriber',
  styles: [`.subscribe-button{ display: flex; align-items: center; width: 200px; justify-content: space-between;}`],
  templateUrl: './web-notification-subscriber.component.html',
})
export class WebNotificationSubscriberComponent {

  constructor(
    private _notificationsService: NotificationsService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
  ) {
  }

  public subscribeNotifications() {
    const dialogRef = this._dialog.open(InfoDialogComponent, {
      height: '240px',
      width: '460px',
      hasBackdrop: true,
      data: FRONTEND_MESSAGES.CONFIRMATION_SEND_NOTIFICATION
    });
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      this._notificationsService.subscribeNotifications().subscribe(()=> {
        this._snackBar.open('La suscripción ha sido activada satisfactoriamente', '', {duration: EXTENDED_SNACKBAR_TIME});
      }, ((error)=> {
        if (error && (error.name === BACKEND_ERROR_TYPES.POP_UPS_BLOCKED || error.name === FRONTEND_ERROR_TYPES.NOTIFICATIONS_DISABLED)) {
          const dialogRef = this._dialog.open(ErrorDialogComponent, {
            height: '240px',
            width: '460px',
            hasBackdrop: true,
            data: error.name === BACKEND_ERROR_TYPES.POP_UPS_BLOCKED ? BACKEND_ERRORS.POP_UPS_BLOCKED : FRONTEND_ERRORS.NOTIFICATIONS_DISABLED
          });
        } else {
          this._snackBar.open('Ha habido un problema al activar las notificaciones, por favor intentelo de nuevo más tarde', '', {duration: EXTENDED_SNACKBAR_TIME});
        }
      }));
    });
  }

}
