import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';
// TODO use it when launching to PROD
import { passwordValidator } from '../../../core/validators/validators';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import {EXTENDED_SNACKBAR_TIME, GENERAL_SNACKBAR_TIME} from '../../../core/config/config';
import { BACKEND_ERRORS, BACKEND_ERROR_TYPES } from '../../const/backend-errors';
import { FRONTEND_ERRORS } from '../../const/frontend-errors';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginForm: UntypedFormGroup;
  public loginMode = true;

  public constructor(
    private _loginService: LoginService,
    public _authenticationGuard: AuthenticationGuard,
    private _router: Router,
    @Inject(BASE_ROUTE) private baseRoute: string[],
    private fb: UntypedFormBuilder,
    private _snackBar: MatSnackBar,
  ) {
  }

  public ngOnInit() {
    this.loginForm = this._setLoginForm();
  }

  private _setLoginForm() {
    return this.fb.group({
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
    return this.fb.group({
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
      this._loginService.login(this.loginForm.value).subscribe((user: User|boolean) => {
        if (user) {
          const targetUrl = this._authenticationGuard.lastIntendedTargetRoute ? this._authenticationGuard.lastIntendedTargetRoute : this.baseRoute;
          this._router.navigate([targetUrl]);
        } else {
          this._showGeneralError();
        }
      },
        (error: any) => {
          if (error.error === BACKEND_ERROR_TYPES.USER_NOT_FOUND) {
            this._snackBar.open(BACKEND_ERRORS.USER_NOT_FOUND.title, '', {duration: GENERAL_SNACKBAR_TIME});
          } else {
            this._showGeneralError();
          }
        });
    }
  }

  private _showGeneralError() {
    this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.title, FRONTEND_ERRORS.GENERAL_ERROR.message, {duration: EXTENDED_SNACKBAR_TIME});
  }
}
