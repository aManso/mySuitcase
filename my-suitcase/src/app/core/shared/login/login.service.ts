import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly URL_API = 'http://localhost:3000/api/users/';
  private readonly URL_CHECK_EXISTING_USER = 'http://localhost:3000/api/login/';
  private _selectedUser: User;
  public logged$: Subject<User|boolean>;

  public constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {
    this.logged$ = new Subject<User|boolean>();
  }

  public login (form: {email: string, password: string}) {
    const $loginResponse = new Subject<User|boolean>();
    (this._http.post(this.URL_CHECK_EXISTING_USER, form) as Observable<User>).subscribe((loggedUser: User|boolean) => {
      if (typeof loggedUser === 'object') {
        console.log('user logged', loggedUser);
        this._selectedUser = loggedUser;
      }
      $loginResponse.next(loggedUser);
      this.logged$.next(loggedUser)
    }, (error: any) => {
      $loginResponse.error(error);
    });
    return $loginResponse;
  }

  public setActiveUser(user: User) {
    this._selectedUser = user;
  }

  public getActiveUser(): User {
    return this._selectedUser;
  }

  public getUsers(): Observable<User[]> {
    return this._http.get(this.URL_API) as Observable<User[]>;
  }

  public getUser(_id: string): Observable<User> {
    return this._http.get(this.URL_API + _id) as Observable<User>;
  }

  public addUser(user: User): Observable<any> {
    return this._http.post(this.URL_API, user) as Observable<any>;
  }

  public updateUser(user: User): Observable<any> {
    return this._http.put(this.URL_API + user._id, user) as Observable<any>;
  }

  public deleteUser(_id: string): Observable<any> {
    return this._http.delete(this.URL_API + _id) as Observable<any>;
  }

  public logout () {
    this._selectedUser = null;
    this.logged$.next(false);
    this._router.navigate(['/']);
  }
}
