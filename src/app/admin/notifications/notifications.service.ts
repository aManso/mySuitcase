import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Notification, NotificationOutput } from "src/app/core/models/notification";
import { environment } from "src/environments/environment";

@Injectable()
export class AdminNotificationsService {
    private readonly URL_API = environment.apiUrl + 'notifications';
    private readonly SEND_NOTIFICATION_API = environment.apiUrl + 'notifications/send';
    private readonly ADD_NOTIFICATION_API = environment.apiUrl + 'notifications/add';
    private readonly DELETE_NOTIFICATION_API = environment.apiUrl + 'notifications/delete/';

    public constructor(
        private _http: HttpClient,
    ) {}

    public getNotifications(): Observable<Notification[]> {
        return this._http.get<NotificationOutput>(this.URL_API).pipe(map((response: NotificationOutput)=> {return response.list}));
    }

    public sendNotification(notificationId: string): Observable<any> {
        const $sendNotificationResponse = new Subject<void>();
        const url = this.SEND_NOTIFICATION_API;        
        this._http.post(url, {notificationId}).subscribe(
            (data: any) => {
                $sendNotificationResponse.next(data);
            },
            (error: any) => {
                $sendNotificationResponse.error(error);
            }
            )
        return $sendNotificationResponse;
    }

    public createNotification(notification: Notification): Observable<any> {
        return this._http.post(this.ADD_NOTIFICATION_API, {notification})
      }

      public deleteNotification(notificationId: string): Observable<any> {
        return this._http.delete(this.DELETE_NOTIFICATION_API + notificationId)
      }
}