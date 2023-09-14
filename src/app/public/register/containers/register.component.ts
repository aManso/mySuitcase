import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../../../core/models/user';
import { RegisterService } from '../register.service';
import { passwordMatchingValidator, passwordValidator } from '../../../core/validators/validators';
import { EXTENDED_SNACKBAR_TIME, MAX_AGE, MAX_EMAIL_LENGTH, MAX_NAME_LENGTH, MAX_PASSWORD_LENGTH, MIN_AGE, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from 'src/app/core/config/config';
import { FRONTEND_MESSAGES } from 'src/app/core/const/frontend-messages';
import { FRONTEND_ERRORS } from 'src/app/core/const/frontend-errors';
import { ConfigService } from 'src/app/core/services/config.service';
import { SimpleOutput } from 'src/app/core/models/shared';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  public registerForm: FormGroup;
  public passwordForm: FormGroup;
  private lang: string;

  public constructor(
    private readonly _registerService: RegisterService,
    private readonly _configService: ConfigService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    @Inject(BASE_ROUTE) private readonly baseRoute: string[],
    private readonly fb: FormBuilder,
    private readonly _snackBar: MatSnackBar
  ) {
  }

  /**
   * Init the user language and the register form
   */
  public ngOnInit() {
    this.lang = this._configService.getLocale();
    this._activatedRoute.queryParams.subscribe(params => {
      params && params.token ? this._router.navigate(['register/confirm'], { queryParams: { token: params.token} }) : this.registerForm = this._setRegisterForm();
    });
  }

  /**
   * Creates the inital status of the register form
   * @returns the form
   */
  private _setRegisterForm() {
    this.passwordForm = this._setPasswordForm();
    return this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email, Validators.maxLength(MAX_EMAIL_LENGTH)])],
      passwords: this.passwordForm,
      name: [null, Validators.compose([Validators.required, Validators.minLength(MIN_NAME_LENGTH), Validators.maxLength(MAX_NAME_LENGTH)])],
      age: [null, Validators.compose([Validators.min(MIN_AGE), Validators.max(MAX_AGE)])],
      gender: null,
    });
  }

  /**
   * Creates the inital status of the password form group
   * @returns a form group for the passwords
   */
  private _setPasswordForm(): FormGroup {
    return new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_PASSWORD_LENGTH),
        Validators.maxLength(MAX_PASSWORD_LENGTH),
        passwordValidator(),
      ]),
      passwordConfirmation: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_PASSWORD_LENGTH),
        Validators.maxLength(MAX_PASSWORD_LENGTH),
        passwordValidator(),
      ]),
    }, {validators: passwordMatchingValidator})
  }

  /**
   * Redirect to the specified path
   * @param path the target path
   */
  public goTo(path: string) {
    this._router.navigate([path]);
  }

  /**
   * Checks if the form has errors in its controls
   * @returns true if form is valid
   */
  public isValidForm(): boolean {
    return this.registerForm.valid;
  }

  /**
   * Submits the form to register and redirect to login if success
   */
  public submit() {
    if (this.isValidForm()) {
      this._registerService.register(this.adaptUser(this.registerForm.value), this.lang).subscribe((response: SimpleOutput) => {
        if (response.success) {
          this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_REGISTER.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['success-snackbar']});
          this.goTo(this.baseRoute.toString());
        } else {
          this._snackBar.open(FRONTEND_ERRORS.USER_EXISTS.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['error-snackbar']});
        }
      },
        (error: any) => {
          this._showGeneralError();
        });
    }
  }

  /**
   * Adapt object to the expected input contract
   * @param form the introduced values
   * @returns the input contract to register a new user
   */
  public adaptUser(form: any): User {
    return {...form,
      password: form.passwords.password,
      passwordConfirmation: form.passwords.passwordConfirmation,
      passwords: undefined
    };
  }

  private _showGeneralError() {
    this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['error-snackbar']});
  }
}
