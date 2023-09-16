import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GENERAL_SNACKBAR_TIME } from 'src/app/core/config/config';
import { FRONTEND_ERRORS } from 'src/app/core/const/frontend-errors';
import { FRONTEND_MESSAGES } from 'src/app/core/const/frontend-messages';
import { Notification } from 'src/app/core/models/notification';
import { SimpleOutput } from 'src/app/core/models/shared';
import { AdminNotificationsService } from '../notifications.service';

@Component({
  selector: 'create-notification-component',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss']
})
export class CreateNotificationComponent {
  public notificationForm: FormGroup;

  public constructor(
    private _fb: FormBuilder,
    private _notificationsService: AdminNotificationsService,
    private _snackBar: MatSnackBar,
    private _dialogRef: MatDialogRef<CreateNotificationComponent>
  ) {}

  public ngOnInit() {
    this.notificationForm = this._setNotificationForm();
  }

  private _setNotificationForm(): FormGroup {
    return this._fb.group({
      title: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      body: [null, Validators.compose([Validators.required, Validators.maxLength(160)])],
      icon: ['assets/img/blog/blog-2.png', Validators.required],
      actionTitle: null,
      actionAction: 'explore',
    });
  }

  public createNotification(): void {
    if (this.notificationForm.valid) {
      const notification: Notification = this._buildNotification(this.notificationForm);
      this._notificationsService.createNotification(notification).subscribe({
        next: (response: SimpleOutput)=> {
          this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_CREATED_NOTIFICATION.message, '', {duration: GENERAL_SNACKBAR_TIME});
          this._dialogRef.close(true);
        },
        error: (error)=> {
          this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: GENERAL_SNACKBAR_TIME});
        },
      })
    }
  }

  private _buildNotification(notificationForm: FormGroup): Notification {
    return {
      title: notificationForm.value.title,
      body: notificationForm.value.body,
      icon: notificationForm.value.icon,
      actions: [{
        title: notificationForm.value.actionTitle,
        action: notificationForm.value.actionAction,
      }]
    } as Notification;
  }
}
