import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../core/login/login.service';
import { SessionService } from '../../../../core/session/session.service';

@Component({
  selector: 'admin-navbar-component',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavBarComponent {
  private readonly _router: Router = inject(Router);
  private readonly sessionService: SessionService = inject(SessionService);
  public readonly loginService: LoginService = inject(LoginService);

  public goTo(path: string, data?: any) {
    this._router.navigate(data ? [path, data] : [path]);
  }

  public goHome() {
    if (this._router.url !== '/home') {
      this.goTo('');
    } else {
      window.location.reload();
    }
  }

  public logout(): void {
    this.sessionService.stopInterval();
    this.loginService.logout();
  }
}
