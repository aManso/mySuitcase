import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/login.service';
import { User } from '../../../../core/models/user';
import { SessionService } from '../../../../core/services/session.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const FULL_SCREEN_ANIMATION_TIME = 1000;
const DISAPPEAR_ANIMATION_TIME = 1000; // in sync with animation made by keyFrames in scss file

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('isCreatingSuitcase', [
      state('hidden', style({
        opacity: 0,
        height: '0',
        overflow: 'hidden',
      })),
      state('show', style({
        opacity: 1,
        height: 'auto',
      })),
      transition('show => hidden', [
        animate(FULL_SCREEN_ANIMATION_TIME)
      ]),
    ]),
  ],

})
export class HomeComponent implements OnInit {
  public isAdmin: boolean;
  public isLogged = false;
  public isCreating = false;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.isLogged = !!this._loginService.isLoggedIn();
    const user = this._loginService.getActiveUser();
    this.isAdmin = this.isLogged && user && user.admin;
    this._loginService.logged$.subscribe((loggedUser: User | boolean) => {
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
    this.isCreating = true;
    // step 1: animation made with angular animation to make disappear the rest of the screen except for the creation section (1sec)
    // step 2: add full-screen class for the form of the creation of the suitcase
    // step 3: add class to run animations made with keyFrames in scss file to disappear some areas and show questions (1sec)
    // step 4: after the time of the animation, delete the not shown areas

    setTimeout(() => {
      document.getElementById('sections-container').classList.add('full-screen');
      document.getElementById('buttons-area').classList.add('disappearToTop');
      document.getElementById('image-area').classList.add('disappearToTop');
      document.getElementById('questions-area').classList.add('appearFromBottom');
      this._removeElementById('buttons-area', DISAPPEAR_ANIMATION_TIME);
      this._removeElementById('image-area', DISAPPEAR_ANIMATION_TIME);
    }, FULL_SCREEN_ANIMATION_TIME);
  }

  private _removeElementById(id: string, delay: number) {
    // The delay has to be in sync with the time that the transition takes
    setTimeout(() => {
      const element = document.getElementById(id);
      element.parentNode.removeChild(element);
    }, delay);
  }
}
