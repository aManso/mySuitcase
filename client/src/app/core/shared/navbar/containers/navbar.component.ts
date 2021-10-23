import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from "../../../services/session.service";
import { LoginService } from "../../../../public/login/login.service";

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent{

  public constructor(
    private _router: Router,
    private sessionService: SessionService,
    public loginService: LoginService,
  ) {}

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public logout(): void {
    this.sessionService.stopInterval();
    this.loginService.logout();
  }
}
