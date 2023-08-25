import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LoginService } from '../login/login.service';
import { User } from "../models/user";
import { UserService } from '../services/user.service';

@Injectable()
export class AuthorizationGuard  {
  public lastIntendedTargetRoute: string;

  constructor(
    private readonly _userService: UserService,
    private readonly _loginService: LoginService,
    private readonly _router: Router,
    ) {}

  /**
  * If user is logged in, check if it has admin rights, otherwise redirect to login
  */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|Observable<boolean> {
    this.lastIntendedTargetRoute = state.url;
    // if user is logged in because token is stored..
    if(this._loginService.isLoggedIn()) {
      // it could be that it tries to access via url, so the service has not stored the user yet, therefore we recover it
      if (!this._userService.activeUser) {
        return this._loginService.recoverActiveUser().pipe(
          map((user:User)=>{
            if (user) {
              return this._checkAdminUser(user);
            } else {
              this._router.navigate(['/login']);
              return false;
            }
          }),
          catchError(()=> {
            this._router.navigate(['/login']);
            return of(false);
          })
        )
      } else {
        // if there is not an active user or it has not admin rights, we redirect to login
        return this._checkAdminUser(this._userService.activeUser)
      }
    }
    return false;
  }

  private _checkAdminUser(user: User): boolean {
    return this._userService.activeUser && this._userService.activeUser.admin;
  }

  public canActivateChild(): boolean {
    // we get the logged user if exists
    // if there is not an active user or it has not admin rights, we redirect to login
    if (!this._userService.activeUser || !this._userService.activeUser.admin) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
