import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, UserLogin} from '../models/user';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SessionService } from '../session/session.service';

@Injectable()
export class LoginService {
  private readonly URL_API = environment.apiUrl + 'users/';
  private readonly URL_CHECK_EXISTING_USER = environment.apiUrl + 'login/';
  private _selectedUser: User;
  public logged$: BehaviorSubject<User|boolean>;
  private _storageMethod: any;

  public constructor(
    private _http: HttpClient,
    private _router: Router,
    private _sessionService: SessionService,
  ) {
    this.logged$ = new BehaviorSubject<User|boolean>(false);
    this._sessionService.logout$.subscribe(() => {
      this.logout();
    });
  }

  public login(form: {email: string, password: string, keepSession: boolean}): Observable<User|boolean> {
    const $loginResponse = new Subject<User|boolean>();
    (this._http.post(this.URL_CHECK_EXISTING_USER, form) as Observable<UserLogin>).subscribe((response: UserLogin|boolean) => {
      if (typeof response === 'object') {
        console.log('user logged', response.user);
        this._selectedUser = response.user;
        this._storageMethod = form.keepSession ? localStorage : sessionStorage;
        this._sessionService.setStorageMethod(this._storageMethod);
        this._sessionService.startSession(response.token);
        $loginResponse.next(response.user);
        this.logged$.next(response.user)
      } else {
        $loginResponse.next(response);
        this.logged$.next(response)
      }
    }, (error: any) => {
      $loginResponse.error(error);
    });
    return $loginResponse;
  }

  public setActiveUser(user: User) {
    this._selectedUser = user;
    this.logged$.next(user)
  }

  public getActiveUser(): Observable<User|undefined> {
    const $userResponse = new Subject<User|undefined>();
    // If user is cached in the service we return it (in case of coming from a different screen)
    if (this._selectedUser) {
      $userResponse.next(this._selectedUser);
    }
    // if not, we make sure user should have an open session:
    //    we check if there should be a logged user
    const isLogged = !!this.isLoggedIn();
    if (isLogged) {
      // if so, we get it from the BE using the token in the sessionStorage
      this.getUser(this._sessionService.getIdToken()).subscribe((user: User) => {
        this.setActiveUser(user);
        $userResponse.next(this._selectedUser);
      }, (error)=> {
        console.log(error);
      });
    } else {
      $userResponse.next();
    }
    return $userResponse;
  }

  public isLoggedIn(): boolean {
    return this._storageMethod ? !!this._storageMethod.getItem('activeUserToken') : !!sessionStorage.getItem('activeUserToken') || !!localStorage.getItem('activeUserToken');
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

  public logout() {
    this._selectedUser = null;
    sessionStorage.removeItem('activeUserToken');
    localStorage.removeItem('activeUserToken');
    this._sessionService.stopInterval();
    this.logged$.next(false);
    this._router.navigate(['/']);
  }
}
