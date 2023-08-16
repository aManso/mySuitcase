import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { RegisterService } from '../register.service';
import { passwordMatchingValidator, passwordValidator } from '../../../core/validators/validators';
import { EXTENDED_SNACKBAR_TIME } from 'src/app/core/config/config';
import { FRONTEND_MESSAGES } from 'src/app/core/const/frontend-messages';
import { FRONTEND_ERRORS } from 'src/app/core/const/frontend-errors';
import { MatSnackBar } from '@angular/material/snack-bar';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  public registerForm: FormGroup;
  public passwordForm: FormGroup;

  public constructor(
    private _registerService: RegisterService,
    private _router: Router,
    @Inject(BASE_ROUTE) private baseRoute: string[],
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
  }

  public ngOnInit() {
    this.registerForm = this._setRegisterForm();
  }

  private _setRegisterForm() {
    this.passwordForm = this._setPasswordForm();
    return this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email, Validators.maxLength(25)])],
      passwords: this.passwordForm,
      name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(12)])],
      age: [null, Validators.compose([Validators.min(14), Validators.max(99)])],
      gender: null,
    });
  }

  private _setPasswordForm(): FormGroup {
    return new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        passwordValidator(),
      ]),
      passwordConfirmation: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
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
      this._registerService.register(this.adaptUser(this.registerForm.value)).subscribe((user: User) => {
        if (user) {
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
