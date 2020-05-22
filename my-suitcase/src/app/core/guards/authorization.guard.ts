import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {LoginService} from '../shared/login/login.service';


@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  public lastIntendedTargetRoute: string;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lastIntendedTargetRoute = state.url;
    const loggedUser = this._loginService.getActiveUser();
    if (!loggedUser || !loggedUser.admin) {
      this._router.navigate(['/login']);
    }
    return true;
  }

  public canActivateChild(): boolean {
    const loggedUser = this._loginService.getActiveUser();
    if (!loggedUser || !loggedUser.admin) {
      this._router.navigate(['/login']);
    }
    return true;
  }
}
