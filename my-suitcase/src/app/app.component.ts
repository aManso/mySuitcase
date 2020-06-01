import { Component } from '@angular/core';
import {LoginService} from './public/login/login.service';
import {User} from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isSessionActive: boolean;

  public constructor(
    private _loginService: LoginService,
  ) {
    this._loginService.logged$.subscribe((user: User|boolean) => {
      this.isSessionActive = !!user;
    });
  }

  public logout() {
    this._loginService.logout();
  }
}
