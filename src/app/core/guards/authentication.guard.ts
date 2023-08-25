import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { LoginService } from '../login/login.service';

@Injectable()
export class AuthenticationGuard  {
  public lastIntendedTargetRoute: string;

  constructor(
    private readonly _loginService: LoginService,
    private readonly _router: Router,
    ) {}

  /**
   * If not logged in and try to access parent route, redirect to login
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lastIntendedTargetRoute = state.url;
    const loggedUser = this._loginService.isLoggedIn();
    if (!loggedUser) {
      this._router.navigate(['/login']);
    }
    return loggedUser;
  }

  /**
   * If not logged in and try to access children route, redirect to login
   */
  public canActivateChild(): boolean {
    const loggedUser = this._loginService.isLoggedIn();
    if (!loggedUser) {
      this._router.navigate(['/login']);
    }
    return loggedUser;
  }
}
