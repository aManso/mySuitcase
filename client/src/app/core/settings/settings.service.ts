import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class SettingsService {
    public constructor() { }

    public update(user: User): Observable<User> {
        return 
    }
}
