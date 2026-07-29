import { Component, OnInit, InjectionToken, ChangeDetectionStrategy, inject } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from '../../../core/shared/footer/containers/footer.component';

// TODO use it when launching to PROD
import { passwordValidator } from '../../../core/validators/validators';
import { NavBarComponent } from '../../../core/shared/navbar/containers/navbar.component';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [ReactiveFormsModule, NavBarComponent, FooterComponent, MatSnackBarModule],
    providers: [{ provide: BASE_ROUTE, useValue: '/' }],
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup;
  public loginMode = true;

  private _snackBar = inject(MatSnackBar);
  private _loginService = inject(LoginService);
  private _authenticationGuard = inject(AuthenticationGuard);
  private _fb = inject(UntypedFormBuilder)
  private _router = inject(Router);
  private _baseRoute = inject(BASE_ROUTE);

  public ngOnInit() {
    this.loginForm = this._setLoginForm();
  }

  private _setLoginForm() {
    return this._fb.group({
      keepSession: [null],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        // passwordValidator(),
      ]),
    });
  }

  private _setRememberForm() {
    return this._fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
    });
  }

  public toggleMode() {
    this.loginMode = !this.loginMode;
    this.loginForm = this.loginMode ? this._setLoginForm() : this._setRememberForm();
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public submit() {
    if (this.loginForm.valid) {
      this._loginService.login(this.loginForm.value).subscribe({
        next: (user: User|boolean) => {
          if (user) {
            const targetUrl = this._authenticationGuard.lastIntendedTargetRoute ? this._authenticationGuard.lastIntendedTargetRoute : this._baseRoute;
            this._router.navigate([targetUrl]);
          } else {
            this._snackBar.open('The user or the password is wrong', 'Close', {
              duration: 5 * 1000,
            });
          }
        },
        error: (error: any) => {
          this._snackBar.open(error, 'Close', {
            duration: 5 * 1000,
          });
        }
      });
    }
  }
}
