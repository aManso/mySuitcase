import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { MatDialog } from '@angular/material/dialog';
import {SuitcaseService} from "../../../services/suitcase.service";
import {MAX_ALLOWED_SUITCASES} from "../../../../core/config/config";
import {MaxSuitcasesReachedDialogComponent} from "./max-suitcases-reached-dialog/max-suitcases-reached-dialog.component";

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
  @ViewChild('overview') private overviewContainer: ElementRef;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog,
    private _sessionService: SessionService,
    private _suitcaseService: SuitcaseService,
  ) { }

  ngOnInit() {
    // we check if there should be a logged user
    this.isLogged = !!this._loginService.isLoggedIn();
    // if so, we get it, either from the service (in case of coming from a different screen)
    let user;
    if (this.isLogged) {
      user = this._loginService.getActiveUser();
      // or from the BE using the token in the sessionStorage
      if (!user) {
        this._loginService.getUser(this._sessionService.getIdToken()).subscribe((user: User) => {
          this._loginService.setActiveUser(user);
        });
      }
    }
    this.isAdmin = this.isLogged && user && user.admin;
    this._loginService.logged$.subscribe((loggedUser: User | boolean) => {
      this.isLogged = !!loggedUser;
    });
  }

  public onOverviewLoaded(): void {
    this._activatedRoute.fragment.subscribe((fragment: string) => {
      this._scrollTo(fragment);
    })
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public logout(): void {
    this._sessionService.stopInterval();
    this._loginService.logout();
  }

  public createSuitcase() {
    if (this._suitcaseService.totalSuitcases < MAX_ALLOWED_SUITCASES) {
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
    } else {
      // TODO check after implementing i18n if better having a single dialog passing the text
      const dialogRef = this._dialog.open(MaxSuitcasesReachedDialogComponent, {
        height: '200px',
        width: '400px',
        hasBackdrop: true,
        data: {
          title: "Numero de listas maximo alcanzado",
          content: "Has alcanzado el numero maximo de maletas, por favor borra alguna antes de crear otra.",
          confirmButton: "OK"
        }
      });
      dialogRef.afterClosed().subscribe();
    }
  }

  private _scrollTo(target: string): void {
    try {
      // we can scroll using the HTMLElement or selecting the item in the dom and triggering scroll
      // document.querySelector('#' + target).scrollIntoView();
      (this.overviewContainer.nativeElement as HTMLElement).scrollIntoView();
    } catch(err) { }
  }

  private _removeElementById(id: string, delay: number) {
    // The delay has to be in sync with the time that the transition takes
    setTimeout(() => {
      const element = document.getElementById(id);
      element.parentNode.removeChild(element);
    }, delay);
  }
}
