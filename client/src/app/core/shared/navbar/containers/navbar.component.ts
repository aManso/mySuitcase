import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../session/session.service';
import {LoginService} from '../../../login/login.service';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {

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
