import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { retry } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { User } from "../models/user";


@Injectable()
export class SettingsService {
    private readonly URL_UPDATE_USER = environment.apiUrl + 'users/update/';

    public constructor(
        private readonly _http: HttpClient,
    ) { }

    public update(user: User): Observable<User> {
        return this._http.put(this.URL_UPDATE_USER + user._id, user).pipe(
            retry(3),
        ) as Observable<any>; 
    }
}
