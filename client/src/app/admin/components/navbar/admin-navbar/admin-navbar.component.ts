import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login/login.service';
import { SessionService } from 'src/app/core/session/session.service';

@Component({
  selector: 'admin-navbar-component',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavBarComponent {

  public constructor(
    private _router: Router,
    private sessionService: SessionService,
    public loginService: LoginService,
  ) {}

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
