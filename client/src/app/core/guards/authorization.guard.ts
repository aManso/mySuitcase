import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {LoginService} from '../login/login.service';
import {User} from "../models/user";

@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  public lastIntendedTargetRoute: string;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lastIntendedTargetRoute = state.url;
    // we get the logged user if exists
    this._loginService.getActiveUser().subscribe((user: User|undefined)=> {
      // if there is not an active user or it has not admin rights, we redirect to login
      if (!user || !user.admin) {
        this._router.navigate(['/login']);
      }
    });
    return true;
  }

  public canActivateChild(): boolean {
    // we get the logged user if exists
    this._loginService.getActiveUser().subscribe((user: User|undefined)=> {
      // if there is not an active user or it has not admin rights, we redirect to login
      if (!user || !user.admin) {
        this._router.navigate(['/login']);
      }
    });
    return true;
  }
}
