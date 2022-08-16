import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { User } from "../models/user";
import { UserService } from '../services/user.service';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  public lastIntendedTargetRoute: string;

  constructor(
    private _userService: UserService,
    private _router: Router,
    ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lastIntendedTargetRoute = state.url;
    // we get the logged user if exists
    // if there is not an active user or it has not admin rights, we redirect to login
    if (!this._userService.activeUser || !this._userService.activeUser.admin) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
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
