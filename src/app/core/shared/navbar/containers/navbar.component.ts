import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { SessionService } from '../../../session/session.service';
import { LoginService } from '../../../login/login.service';
import { environment } from '../../../../../environments/environment';
import { Languages } from '../../../const/languages';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive, MatTooltipModule, MatIconModule],
})
export class NavBarComponent {
  public showLanguages = false;
  public languages = Languages;

  private readonly _router: Router = inject(Router);
  private readonly sessionService: SessionService = inject(SessionService);
  protected readonly loginService: LoginService = inject(LoginService);
  private readonly configService: ConfigService = inject(ConfigService);

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

  public isProdMode(): boolean {
    return environment.production;
  }

  public changeLanguage(lang: string) {
    this.configService.setLocale(lang);
    window.location.href = window.location.protocol + "//" + window.location.host;
  }

  public logout(): void {
    this.sessionService.stopInterval();
    this.loginService.logout();
  }
}
