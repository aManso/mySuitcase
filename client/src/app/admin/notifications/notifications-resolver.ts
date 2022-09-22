import { Inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of as _of } from 'rxjs';
import { Notification } from 'src/app/core/models/notification';
import { AdminNotificationsService } from './notifications.service';

@Injectable()
export class NotificationsResolver implements Resolve<Observable<Notification[]>> {
  constructor(
    private _notificationService: AdminNotificationsService,
  ) {
  }

  /**
   * resolve method
   * @param route
   * @param state
   * Whenever you need to get the data before the component initialization, the right way to do this is to use resolver.
   * Resolver acts synchronously i.e. resolver will wait for async call to complete and only after processing the async call,
   * it will route to the respective URL. Thus, the component initialization will wait till the callback is completed.
   * Thus, if you want to do something (service call), even before the component is initialized, you have come to right place.
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Notification[]> {
      return this._notificationService.getNotifications()
  }

}