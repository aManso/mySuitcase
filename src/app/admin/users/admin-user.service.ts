import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, retry, map } from 'rxjs/operators';
import { User } from "src/app/core/models/user";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class AdminUserService {
    // TODO replace for config const
    private readonly URL_API = environment.apiUrl + 'users/';
    private _activeUser: User|undefined;

    constructor(
        private _http: HttpClient,
        private _router: Router,
    ) {    }

    public get activeUser(): User|undefined {
        return this._activeUser;
    }
    public set activeUser(value: User|undefined) {
        this._activeUser = value;
    }

    public getUser(id: string): Observable<User> {
        return this._http.get(this.URL_API + id).pipe(
          retry(3),
          map(res => {
            if (!res) {
              throw new Error('User not found');
            }
            return res;
          })
        ) as Observable<User>;
      } 

    public getUsers(): Observable<User[]> {
        return this._http.get(this.URL_API).pipe(
          retry(3),
          map(res => {
            if (!res) {
              throw new Error('there were not found users!');
            }
            return res;
          }),
          catchError((err: any) => {
            console.log(err.message);
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401 || err.status === 500) {
                console.log('unauthorized request');
                this._router.navigate(['/login'])
              }
            }
            return of([])
          })
        ) as Observable<User[]>;
      }

    public addUser(user: User): Observable<any> {
        return this._http.post(this.URL_API, user).pipe(
            retry(3),
            map(res => {
            if (!res) {
                throw new Error('User couldnt get added');
            }
            return res;
            })
        ) as Observable<any>;
    }
    
    public updateUser(user: User): Observable<any> {
        return this._http.put(this.URL_API + user._id, user).pipe(
            retry(3),
            map(res => {
            if (!res) {
                throw new Error('User couldnt get updated');
            }
            return res;
            })
        ) as Observable<any>;
    }
    
    public deleteUser(id: string): Observable<any> {
        return this._http.delete(this.URL_API + id).pipe(
            retry(3),
            map(res => {
            if (!res) {
                throw new Error('User couldnt get deleted');
            }
            return res;
            })
        ) as Observable<any>;
    }
}