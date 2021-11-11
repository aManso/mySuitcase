import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  public lastIntendedTargetRoute: string;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lastIntendedTargetRoute = state.url;
    const loggedUser = this._loginService.isLoggedIn();
    if (!loggedUser) {
      this._router.navigate(['/login']);
    }
    return loggedUser;
  }

  public canActivateChild(): boolean {
    const loggedUser = this._loginService.isLoggedIn();
    if (!loggedUser) {
      this._router.navigate(['/login']);
    }
    return loggedUser;
  }
}
