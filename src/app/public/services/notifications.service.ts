import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SwPush } from '@angular/service-worker';

import { Observable, Subject } from "rxjs";

import { environment } from "src/environments/environment";
import { FRONTEND_ERROR_TYPES } from "../../core/const/frontend-errors";

const PUBLIC_VAPID_KEY= "BN_Vaz62gKS1Mi6YS-6guChhEdg8J14bupDKzgh2rgeIcTwmGiDiblm96Emmkzlbakhk8Cy5sylcII65gVfHD7E";

@Injectable()
export class NotificationsService {
    private readonly ADD_SUBSCRIBER_API = environment.apiUrl + 'notifications/subscribe';

    public constructor(
        private readonly _http: HttpClient,
        private readonly _swPush: SwPush,
    ) {}

    /**
     * It checks if Service Workers are enabled (prod build & (https or localhost)), and if so creates a push subscription
     * if success, we send subscription to backend to store it.
     * @returns an Observable with the subscription response
     */
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
