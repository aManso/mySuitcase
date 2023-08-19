import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
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
    @Inject(BASE_ROUTE) private readonly baseRoute: string[],
    private readonly fb: FormBuilder,
    private readonly _snackBar: MatSnackBar
  ) {
  }

  public ngOnInit() {
    this.lang = this._configService.getLocale();
    this.registerForm = this._setRegisterForm();
  }

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

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public isValidForm(): boolean {
    return this.registerForm.valid;
  }

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
