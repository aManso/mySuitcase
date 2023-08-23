import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EXTENDED_SNACKBAR_TIME } from '../../config/config';
import { BACKEND_ERRORS, BACKEND_ERROR_TYPES } from '../../const/backend-errors';
import { FRONTEND_ERRORS, FRONTEND_ERROR_TYPES } from '../../const/frontend-errors';

import { NotificationsService } from '../../../public/services/notifications.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { FRONTEND_MESSAGES } from '../../const/frontend-messages';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'web-notification-subscriber',
  styles: [`.subscribe-button{ display: flex; align-items: center; width: 200px; justify-content: space-between;}`],
  templateUrl: './web-notification-subscriber.component.html',
})
export class WebNotificationSubscriberComponent {

  constructor(
    private readonly _notificationsService: NotificationsService,
    private readonly _loginService: LoginService,
    private readonly _router: Router,
    private readonly _snackBar: MatSnackBar,
    private readonly _dialog: MatDialog,
  ) {
  }

  public applyForNotifications() {
    this._loginService.isLoggedIn() ? this._subscribeNotifications() : this._goToLogin();
  }

  private _subscribeNotifications() {
    const dialogRef = this._dialog.open(InfoDialogComponent, {
      height: '240px',
      width: '460px',
      hasBackdrop: true,
      data: FRONTEND_MESSAGES.SUSCRIBE_NOTIFICATION
    });
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      this._notificationsService.subscribeNotifications().subscribe(()=> {
        this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_SUSCRIBE_NOTIFICATION.message, '', {duration: EXTENDED_SNACKBAR_TIME});
      }, ((error)=> {
        if (error && (error.name === BACKEND_ERROR_TYPES.POP_UPS_BLOCKED || error.name === FRONTEND_ERROR_TYPES.NOTIFICATIONS_DISABLED)) {
          const dialogRef = this._dialog.open(ErrorDialogComponent, {
            height: '240px',
            width: '500px',
            hasBackdrop: true,
            data: error.name === BACKEND_ERROR_TYPES.POP_UPS_BLOCKED ? BACKEND_ERRORS.POP_UPS_BLOCKED : FRONTEND_ERRORS.NOTIFICATIONS_DISABLED
          });
        } else { // in local its not possible test notifications unless we make a production build, so we get FRONTEND_ERROR_TYPES.NOTIFICATIONS_DISABLED
          this._snackBar.open('Ha habido un problema al activar las notificaciones, por favor intentelo de nuevo más tarde', '', {duration: EXTENDED_SNACKBAR_TIME});
        }
      }));
    });
  }

  private _goToLogin() {
    const dialogRef = this._dialog.open(InfoDialogComponent, {
      height: '240px',
      width: '460px',
      hasBackdrop: true,
      data: FRONTEND_MESSAGES.LOGIN_FOR_NOTIFICATION
    });
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      this._router.navigate(['/login'])
    });
  }

}
