import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, UserLogin} from '../models/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SessionService } from '../session/session.service';
import { UserService } from '../services/user.service';

@Injectable()
export class LoginService {
  private readonly URL_API = environment.apiUrl + 'users/';
  private readonly URL_CHECK_EXISTING_USER = environment.apiUrl + 'login/';
  private readonly URL_REMIND_PASSWORD = environment.apiUrl + 'login/remindPassword';
  private readonly URL_UPDATE_PASSWORD = environment.apiUrl + 'login/updatePassword';

  public logged$: BehaviorSubject<User|undefined>;

  public constructor(
    private _http: HttpClient,
    private _router: Router,
    private _sessionService: SessionService,
    private _userService: UserService,
  ) {
    this.logged$ = new BehaviorSubject<User|undefined>(undefined);

    // Do logout in browser and app when leaves the session
    this._sessionService.logout$.subscribe(() => {
      this.logout();
    });
  }

  public login(form: {email: string, password: string, keepSession: boolean}): Observable<User|boolean> {
    const $loginResponse = new Subject<User>();
    (this._http.post(this.URL_CHECK_EXISTING_USER, form) as Observable<UserLogin>).subscribe((response: UserLogin) => {
      if (typeof response === 'object') {
        console.log('user logged', response.user);
        // we store the user in the service
        this._userService.activeUser = response.user;
        
        // we keep the token of the session
        const storageMethod = form.keepSession ? localStorage : sessionStorage;
        this._sessionService.setStorageMethod(storageMethod);
        this._sessionService.startSession(response.token);

        $loginResponse.next(response.user);
        // we notified the observers
        this.logged$.next(response.user)
      } else {
        // If request was ok, but not user was found, response is undefined
        $loginResponse.next(response);
        // we notified the observers
        this.logged$.next(response)
      }
    }, (error: any) => {
      $loginResponse.error(error);
    });
    return $loginResponse;
  }

  public recoverActiveUser(): Observable<User> {
    const $userResponse = new Subject<User>();
    // we get it from the BE using the token in the sessionStorage
    this.getUser(this._sessionService.getIdToken()).subscribe((user: User) => {
      this._userService.activeUser = user;
      $userResponse.next(this._userService.activeUser);
    }, (error: HttpErrorResponse)=> {
      if (error.status == 401) {
        this._sessionService.removeToken();
      }
      console.log(error);
      $userResponse.error(error);
    });
    return $userResponse;
  }

  public isLoggedIn(): boolean {
    return this._sessionService._isThereActiveUser();
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

  public logout() {
    this._userService.activeUser = undefined;
    this._sessionService.removeToken(true);
    this._sessionService.stopInterval();
    this.logged$.next(undefined);
    this._router.navigate(['home']);
  }

  // REMIND PASSWORD
  public remindPassword(email: string, lang?: string): Observable<boolean> {
    return this._http.post(this.URL_REMIND_PASSWORD, {email, lang}) as Observable<boolean>
  }

   // UPDATE PASSWORD
   public updatePassword(password: string, authorizationToken: string): Observable<boolean> {
    return this._http.put(this.URL_UPDATE_PASSWORD, {password, authorizationToken}) as Observable<boolean>
  }
}
