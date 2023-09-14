import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';
// TODO use it when launching to PROD
import { passwordValidator } from '../../../core/validators/validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GENERAL_SNACKBAR_TIME } from '../../../core/config/config';
import { BACKEND_ERRORS, BACKEND_ERROR_TYPES } from '../../const/backend-errors';
import { FRONTEND_ERRORS } from '../../const/frontend-errors';
import { FRONTEND_MESSAGES } from '../../const/frontend-messages';
import { ConfigService } from '../../services/config.service';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup;
  public loginMode = true;

  public constructor(
    private readonly _loginService: LoginService,
    private readonly _configService: ConfigService,
    @Inject(BASE_ROUTE) private baseRoute: string[],
    private readonly _authenticationGuard: AuthenticationGuard,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _fb: FormBuilder,
    private readonly _snackBar: MatSnackBar,
  ) {
  }

  public ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      params && params.token ? this._router.navigate(['login/update-password'], { queryParams: { token: params.token} }) : this.loginForm = this._setLoginForm();
    });
  }

  private _setLoginForm() {
    return this._fb.group({
      keepSession: [null],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        passwordValidator(), // TODO
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
      if (this.loginMode) {
        this.login();
      } else {
        this.remindPassword();
      }
    }
  }

  private login() {
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
          this._snackBar.open(BACKEND_ERRORS.USER_NOT_FOUND.title, '', {duration: GENERAL_SNACKBAR_TIME, panelClass: ['error-snackbar']});
        } else if (error.error === BACKEND_ERROR_TYPES.USER_NOT_CONFIRMED) {
          this._snackBar.open(BACKEND_ERRORS.USER_NOT_CONFIRMED.title, BACKEND_ERRORS.USER_NOT_CONFIRMED.message, {duration: GENERAL_SNACKBAR_TIME, panelClass: ['error-snackbar']});
        } else {
          this._showGeneralError();
        }
      });
  }

  private remindPassword() {
    const lang = this._configService.getLocale();
    this._loginService.remindPassword(this.loginForm.value.email, lang).subscribe(() => {
      this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_REMINDER_PASSWORD_SENT.message, '', {duration: GENERAL_SNACKBAR_TIME, panelClass: ['success-snackbar']});
    },
    (error: any) => {
      this._showGeneralError();
    });
  }

  private _showGeneralError() {
    this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: GENERAL_SNACKBAR_TIME, panelClass: ['error-snackbar']});
  }
}
