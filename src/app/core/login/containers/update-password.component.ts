import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EXTENDED_SNACKBAR_TIME } from '../../config/config';
import { FRONTEND_ERRORS } from '../../const/frontend-errors';
import { FRONTEND_MESSAGES } from '../../const/frontend-messages';
import { passwordMatchingValidator, passwordValidator } from '../../validators/validators';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent {
  public updatePasswordForm: FormGroup;
  private token: string;

  public constructor(
    private _loginService: LoginService,
    private _router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.updatePasswordForm = this._setLoginForm();
    this.route.queryParams.subscribe(params => {
      this.token = params.token;
    });
  }

  private _setLoginForm() {
    return this.fb.group({
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
    }, {validators: passwordMatchingValidator});
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public submit() {
    if (this.updatePasswordForm.valid) {
      this._loginService.updatePassword(this.updatePasswordForm.value.password, this.token).subscribe(() => {
        this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_UPDATE_PASSWORD.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['success-snackbar']});
        this.goTo('/login');
      },
      (error: any) => {
        this._showGeneralError();
      });
    }
  }

  private _showGeneralError() {
    this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['error-snackbar']});
  }

}