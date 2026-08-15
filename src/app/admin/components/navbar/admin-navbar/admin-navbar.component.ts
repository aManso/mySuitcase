import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../../../core/login/login.service';
import { SessionService } from '../../../../core/session/session.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-navbar-component',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
  imports: [
    RouterModule, // needed for routerLink in view
    CommonModule, // needed for async in view
    // Angular Material
    MatTooltipModule,
    MatIconModule,
  ],
})
export class AdminNavBarComponent {
  private readonly _router: Router = inject(Router);
  private readonly sessionService: SessionService = inject(SessionService);
  public readonly loginService: LoginService = inject(LoginService);

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
