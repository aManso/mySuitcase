import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/login.service';
import { User } from '../../../../core/models/user';
import {SessionService} from '../../../../core/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isAdmin: boolean;
  public isLogged = false;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.isLogged = !!this._loginService.isLoggedIn();
    const user = this._loginService.getActiveUser();
    this.isAdmin = this.isLogged && user && user.admin;
    this._loginService.logged$.subscribe((loggedUser: User|boolean) => {
      this.isLogged = !!loggedUser;
    });
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public logout(): void {
    this._sessionService.stopInterval();
    this._loginService.logout();
  }

  public createSuitcase() {
    document.getElementById('buttons-area').classList.add('disappearToTop');
    document.getElementById('image-area').classList.add('disappearToTop');
    document.getElementById('questions-area').classList.add('appearFromBottom');
    this._removeElementById('buttons-area', 1000);
    this._removeElementById('image-area', 1000);
  }

  private _removeElementById(id: string, delay: number) {
    // The delay has to be in sync with the time that the transition takes
    setTimeout(() => {
      const element = document.getElementById(id);
      element.parentNode.removeChild(element);
    }, delay);
  }
}
