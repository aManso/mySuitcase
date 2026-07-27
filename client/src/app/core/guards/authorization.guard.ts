import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {LoginService} from '../../public/login/login.service';


@Injectable()
export class AuthorizationGuard  {
  public lastIntendedTargetRoute: string;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lastIntendedTargetRoute = state.url;
    if (!this._loginService.isLoggedIn() || !this._loginService.getActiveUser().admin) {
      this._router.navigate(['/login']);
    }
    return true;
  }

  public canActivateChild(): boolean {
    if (!this._loginService.isLoggedIn() || !this._loginService.getActiveUser().admin) {
      this._router.navigate(['/login']);
    }
    return true;
  }
}
