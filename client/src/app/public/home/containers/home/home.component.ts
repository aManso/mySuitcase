import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/login.service';
import { User } from '../../../../core/models/user';
import { NavBarComponent } from '../../../../core/shared/navbar/containers/navbar.component';
import { FooterComponent } from '../../../../core/shared/footer/containers/footer.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [NavBarComponent, FooterComponent],
})
export class HomeComponent implements OnInit {
  public isAdmin: boolean;
  public isLogged = false;

  private _loginService = inject(LoginService);
  private _router = inject(Router);

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
