import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../../core/login/login.service';
import { User } from '../../../../core/models/user';
import { SessionService } from '../../../../core/session/session.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import {SuitcaseService} from '../../../../core/services/suitcase.service';
import {MaxSuitcasesReachedDialogComponent} from './max-suitcases-reached-dialog/max-suitcases-reached-dialog.component';
import { ConfigService, configServiceFactory } from 'src/app/core/services/config.service';
import { UserService } from 'src/app/core/services/user.service';

const FULL_SCREEN_ANIMATION_TIME = 1000;
const DISAPPEAR_ANIMATION_TIME = 1000; // in sync with animation made by keyFrames in scss file

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('showOverview', [
      state('hide', style({
        opacity: 0,
        height: '0',
        overflow: 'hidden',
      })),
      state('show', style({
        opacity: 1,
        height: 'auto',
      })),
      transition('show => hide', [
        animate(FULL_SCREEN_ANIMATION_TIME)
      ]),
      transition('hide => show', [
        animate(FULL_SCREEN_ANIMATION_TIME)
      ]),
    ]),
  ],
  providers: [{ provide: ConfigService, useFactory: configServiceFactory}]
})
export class HomeComponent implements OnInit {
  public isAdmin: boolean;
  public isLogged = false;
  public showOverview = false;
  @ViewChild('overview') private overviewContainer: ElementRef;
  private _maximumSuitcases: number;

  constructor(
    private _loginService: LoginService,
    private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog,
    private _sessionService: SessionService,
    private _suitcaseService: SuitcaseService,
    private _configService: ConfigService,
  ) { }

  public ngOnInit() {
    this._maximumSuitcases = this._configService.getMaximumSuitcases(false);
    // we get the logged user if exists
    if (this._loginService.isLoggedIn()) {
      // if its in the service, whe get it from there
      if (this._userService.activeUser) {
        this._loginService.logged$.next(this._userService.activeUser);
        this.isAdmin = this._userService.activeUser.admin;
        const isPremium = this._userService.activeUser.isPremium;
        this._maximumSuitcases = this._configService.getMaximumSuitcases(isPremium);
      } else {
        // if it is not in the service because the session is opened but just started the app, we fetched the active user
        this._loginService.recoverActiveUser().subscribe((user: User|undefined)=> {
          if (user) {
            this._loginService.logged$.next(user);
            this.isAdmin = user.admin;
            const isPremium = user.isPremium;
            this._maximumSuitcases = this._configService.getMaximumSuitcases(isPremium);
          }
          
        });
      }
    }
    this._loginService.logged$.subscribe((loggedUser: User | boolean) => {
      this.isLogged = !!loggedUser;
      const isPremium = this.isLogged && loggedUser && (loggedUser as User).isPremium;
      this._maximumSuitcases = this._configService.getMaximumSuitcases(isPremium);
    });
  }

  public onOverviewLoaded(): void {
    this.showOverview = true;
    this._activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        this._scrollTo(fragment);
      }
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
    if (this._suitcaseService.totalSuitcases < this._maximumSuitcases) {
      this.showOverview = false;
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
          title: 'Numero de listas maximo alcanzado',
          content: 'Has alcanzado el numero maximo de maletas, por favor borra alguna antes de crear otra.',
          confirmButton: 'OK'
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
