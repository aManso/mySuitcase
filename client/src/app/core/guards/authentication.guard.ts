import { inject, Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../../public/login/login.service';


@Injectable()
export class AuthenticationGuard  {
  public lastIntendedTargetRoute: string;

  private readonly _loginService = inject(LoginService);
  private readonly _router = inject(Router);

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
