import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../public/login/login.service';
import { SessionService } from '../../../services/session.service';

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NavBarComponent{
  private _router = inject(Router);
  private _loginService = inject(LoginService);
  private _sessionService = inject(SessionService);

  public isLoggedIn(): boolean {
    return this._loginService.isLoggedIn();
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public logout(): void {
    this._sessionService.stopInterval();
    this._loginService.logout();
  }
}
