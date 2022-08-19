import {
  AfterViewInit,
  Component,
} from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'web-notification-suscriber',
  styles: [`` ],
  templateUrl: './web-notification-suscriber.component.html',
})
export class WebNotificationSuscriberComponent {

  constructor(
    private _notificationsService: NotificationsService,
  ) {
  }

  public suscribeNotifications() {
    this._notificationsService.suscribeNotifications();
  }

}
