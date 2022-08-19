import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { SwPush } from '@angular/service-worker';

const PUBLIC_VAPID_KEY= "BN_Vaz62gKS1Mi6YS-6guChhEdg8J14bupDKzgh2rgeIcTwmGiDiblm96Emmkzlbakhk8Cy5sylcII65gVfHD7E";

@Injectable({providedIn: 'root'})
export class NotificationsService {
    private readonly SEND_NOTIFICATION_API = environment.apiUrl + 'notifications/send';
    private readonly ADD_SUBSCRIBER_API = environment.apiUrl + 'notifications/subscribe';

    public constructor(
        private _http: HttpClient,
        private _swPush: SwPush,
    ) {}

    public suscribeNotifications():Observable<any> {
        const $addSubscriberResponse = new Subject<void>();
        if (this._swPush.isEnabled) {
          this._swPush.requestSubscription({
            serverPublicKey: PUBLIC_VAPID_KEY,
          }).then((sub)=> {
            console.log("Notification subscription: ", sub);
            const url = this.ADD_SUBSCRIBER_API;  
            this._http.post(url, sub).subscribe(
                (data: any) => {
                    $addSubscriberResponse.next(data);
                },
                (error: any) => {
                    $addSubscriberResponse.error(error);
                }
                )
          }).catch((err) => {
            console.error("Could not suscribe to notifications", err);
            $addSubscriberResponse.error(err);
          })
        }
        return $addSubscriberResponse;
      }

    public sendNotification(): Observable<any> {
        const $sendNotificationResponse = new Subject<void>();
        const url = this.SEND_NOTIFICATION_API;        
        this._http.post(url, null).subscribe(
            (data: any) => {
                $sendNotificationResponse.next(data);
            },
            (error: any) => {
                $sendNotificationResponse.error(error);
            }
            )
        return $sendNotificationResponse;
    }

}
