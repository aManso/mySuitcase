import { Injectable } from "@angular/core";
import { User } from "../models/user";



@Injectable({providedIn: 'root'})
export class UserService {

    private _activeUser: User|undefined;

    constructor() {    }

    public get activeUser(): User|undefined {
        return this._activeUser;
    }
    public set activeUser(value: User|undefined) {
        this._activeUser = value;
    }
}