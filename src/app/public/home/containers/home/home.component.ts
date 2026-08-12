import { Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { NavBarComponent } from '../../../../core/shared/navbar/containers/navbar.component';
import { FooterComponent } from '../../../../core/shared/footer/containers/footer.component';
import { OverviewComponent } from '../overview/overview.component';
import { CreateSuitcaseFormComponent } from '../create-suitcase-form/create-suitcase-form.component';
import { PwaInstallerComponent } from '../../../../core/shared/pwa-installer/pwa-installer.component';
import { WebNotificationSubscriberComponent } from '../../../../core/shared/web-notification-subscriber/web-notification-subscriber.component';
import { LoginService } from '../../../../core/login/login.service';
import { User } from '../../../../core/models/user';
import { SessionService } from '../../../../core/session/session.service';
import { SuitcaseService} from '../../../../core/services/suitcase.service';
import { MaxSuitcasesReachedDialogComponent} from './max-suitcases-reached-dialog/max-suitcases-reached-dialog.component';
import { ConfigService, configServiceFactory } from '../../../../core/services/config.service';
import { UserService } from '../../../../core/services/user.service';

const FULL_SCREEN_ANIMATION_TIME = 1000;
const DISAPPEAR_ANIMATION_TIME = 1000; // in sync with animation made by keyFrames in scss file

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: ConfigService, useFactory: configServiceFactory}],
  standalone: true,
  imports: [NgTemplateOutlet, NavBarComponent, FooterComponent, CreateSuitcaseFormComponent, OverviewComponent, PwaInstallerComponent, WebNotificationSubscriberComponent],
})
export class HomeComponent implements OnInit {
  public isAdmin: boolean;
  public isLogged = false;
  public showOverview = false;
  @ViewChild('overview') private overviewContainer: ElementRef;
  private _maximumSuitcases: number;
  private readonly _loginService = inject(LoginService);
  private readonly _userService = inject(UserService);
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _dialog = inject(MatDialog);
  private readonly _sessionService = inject(SessionService);
  private readonly _suitcaseService = inject(SuitcaseService);
  private readonly _configService = inject(ConfigService);

  /**
   * We check if the user is logged in and if so we recover it either from the service if it is navegating throguht the website
   * or from the sessionStorage if previously logged.
   */
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
    this.showOverview = this._suitcaseService.totalSuitcases > 0;
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
          title: $localize `Maximum number of suitcases reached`,
          content: $localize `You have reached the maxium number of suitcases, please remove some before creating a new one`,
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
