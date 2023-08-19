import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { SwPush } from '@angular/service-worker';
import { FRONTEND_ERROR_TYPES } from "../../core/const/frontend-errors";
import { Notification } from "src/app/core/models/notification";

const PUBLIC_VAPID_KEY= "BN_Vaz62gKS1Mi6YS-6guChhEdg8J14bupDKzgh2rgeIcTwmGiDiblm96Emmkzlbakhk8Cy5sylcII65gVfHD7E";

@Injectable()
export class NotificationsService {
    private readonly ADD_SUBSCRIBER_API = environment.apiUrl + 'notifications/subscribe';

    public constructor(
        private _http: HttpClient,
        private _swPush: SwPush,
    ) {}

    public subscribeNotifications():Observable<any> {
        const $addSubscriberResponse = new Subject<void>();
        if (this._swPush.isEnabled) {
          this._swPush.requestSubscription({
            serverPublicKey: PUBLIC_VAPID_KEY,
          }).then((sub)=> {
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
            console.error("Could not subscribe to notifications", err);
            $addSubscriberResponse.error(err);
          })
        } else {
          $addSubscriberResponse.error(FRONTEND_ERROR_TYPES.NOTIFICATIONS_DISABLED);
        }
        return $addSubscriberResponse;
      }
}
