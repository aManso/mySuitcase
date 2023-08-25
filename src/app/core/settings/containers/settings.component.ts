import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EXTENDED_SNACKBAR_TIME, GENERAL_SNACKBAR_TIME, MAX_AGE, MAX_EMAIL_LENGTH, MAX_NAME_LENGTH, MAX_PASSWORD_LENGTH, MIN_AGE, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from '../../config/config';
import { BACKEND_ERRORS, BACKEND_ERROR_TYPES } from '../../const/backend-errors';
import { FRONTEND_MESSAGES } from '../../const/frontend-messages';
import { LoginService } from '../../login/login.service';
import { User } from '../../models/user';
import { ExtraFieldsInfoBottomSheetComponent } from '../../shared/extra-fields-info-bottom-sheet/extra-fields-info-bottom-sheet.component';
import { passwordValidator } from '../../validators/validators';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent{
  private _user: User;
  public editMode = false;
  public showPasswordChange = false;
  public settingsForm: FormGroup;
  public passwordForm: FormGroup;

  public constructor(
    private _fb: FormBuilder,
    private _settingsService: SettingsService,
    private _loginService: LoginService,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _bottomSheet: MatBottomSheet,
  ) {
  }

  public ngOnInit() {
    this._user = this._activatedRoute.snapshot.data.user;
    // We set the logged user into the login service because this loginService has multiple instances (public/admin...) and it is needed for intance to show the admin icon
    this._loginService.logged$.next(this._user);
    this.settingsForm = this._setSettingsForm();
    this.settingsForm.disable();
  }

  private _setSettingsForm() {
    this.passwordForm = this._setPasswordForm();
    this._user = this._user ? this._user : {} as User;
    return this._fb.group({
      email: [this._user.email, Validators.compose([Validators.required, Validators.email, Validators.maxLength(MAX_EMAIL_LENGTH)])],
      passwords: this.passwordForm,
      name: [this._user.name, Validators.compose([Validators.maxLength(MIN_NAME_LENGTH), Validators.maxLength(MAX_NAME_LENGTH)])],
      age: [this._user.age, Validators.compose([Validators.min(MIN_AGE), Validators.max(MAX_AGE)])],
      gender: [this._user.gender],
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
    })
  }

  public toggleEditMode() {
    this.editMode = !this.editMode;
    this.editMode ? this.settingsForm.enable() : this.settingsForm.disable();
  }

  public enableChangePassword() {
    this.showPasswordChange = !this.showPasswordChange;
    if (this.showPasswordChange) {
      this.passwordForm.addControl('newPassword', new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        passwordValidator(),
      ]));
    } else {
      this.passwordForm.removeControl('newPassword');
    }
  }

  public openExtraDataExp() {
    this._bottomSheet.open(ExtraFieldsInfoBottomSheetComponent);
  }

  public isValidForm(): boolean {
    return this.settingsForm && this.settingsForm.valid;
  }

  public saveChanges() {
    this._settingsService.update({...this.settingsForm.value, _id: this._user._id}).subscribe((response)=> {
      this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_USER_UPDATED.title, FRONTEND_MESSAGES.CONFIRMATION_USER_UPDATED.message, {duration: GENERAL_SNACKBAR_TIME, panelClass: ['success-snackbar'], horizontalPosition: 'center', verticalPosition: 'top'});
    }, (error)=> {
      if (error && (error.error === BACKEND_ERROR_TYPES.WRONG_PASSWORD || error.error === BACKEND_ERROR_TYPES.EXISTING_EMAIL)) {
        this._snackBar.open(
          error.error === BACKEND_ERROR_TYPES.WRONG_PASSWORD ? BACKEND_ERRORS.WRONG_PASSWORD.message : BACKEND_ERRORS.EXISTING_EMAIL.message,
           '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['error-snackbar'], horizontalPosition: 'center', verticalPosition: 'top'});
      }
      console.log(error);
    });
  }
}
