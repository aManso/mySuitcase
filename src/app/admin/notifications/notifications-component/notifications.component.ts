import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { GENERAL_SNACKBAR_TIME } from '../../../core/config/config';
import { FRONTEND_ERRORS } from '../../../core/const/frontend-errors';
import { FRONTEND_MESSAGES } from '../../../core/const/frontend-messages';
import { Notification } from '../../../core/models/notification';
import { InfoDialogComponent } from '../../../core/shared/info-dialog/info-dialog.component';
import { CreateNotificationComponent } from '../create-notification-component/create-notification.component';
import { AdminNotificationsService } from '../notifications.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'notifications-component',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit {

  public notifications: Notification[];

  displayedColumns: string[] = ['position', 'title', 'body', 'icon', 'send'];
  dataSource;

  private readonly _dialog: MatDialog = inject(MatDialog);
  private readonly _snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly _notificationService: AdminNotificationsService = inject(AdminNotificationsService);
  private readonly _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.notifications = this._activatedRoute.snapshot.data.notifications;
    this.dataSource = this.notifications;
    this._changeDetectorRef.detectChanges();
  }

  public create() {
    const dialogRef = this._dialog.open(CreateNotificationComponent, {
      height: '500px',
      width: '500px',
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this._updateList();
      }
      dialogRef.close();
    });
  }

  public deleteNotification(notificationId: string) {
    const dialogRef = this._dialog.open(InfoDialogComponent, {
      height: '240px',
      width: '460px',
      hasBackdrop: true,
      data: FRONTEND_MESSAGES.CONFIRMATION_REMOVE_NOTIFICATION
    });
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this._notificationService.deleteNotification(notificationId).subscribe({
          next: (response)=> {
            this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_REMOVED_NOTIFICATION.message, '', {duration: GENERAL_SNACKBAR_TIME});
            this._updateList();
          },
          error: ()=> {
            this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: GENERAL_SNACKBAR_TIME});
          },
        })
      }
    });
  }

  private _updateList() {
    this._notificationService.getNotifications().subscribe({
      next: (notificationList: Notification[])=> {
        this.notifications = notificationList;
        this.dataSource = this.notifications;
        this._changeDetectorRef.detectChanges();
      },
      error: ()=> {
        this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: GENERAL_SNACKBAR_TIME});
      },
    })
  }
}
