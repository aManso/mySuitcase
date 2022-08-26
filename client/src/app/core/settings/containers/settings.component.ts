import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EXTENDED_SNACKBAR_TIME, GENERAL_SNACKBAR_TIME } from '../../config/config';
import { BACKEND_ERRORS, BACKEND_ERROR_TYPES } from '../../const/backend-errors';
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
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _bottomSheet: MatBottomSheet,
  ) {
  }

  public ngOnInit() {
    this._user = this._activatedRoute.snapshot.data.user;
    this.settingsForm = this._setSettingsForm();
    this.settingsForm.disable();
  }

  private _setSettingsForm() {
    this.passwordForm = this._setPasswordForm();
    this._user = this._user ? this._user : {} as User;
    return this._fb.group({
      email: [this._user.email, Validators.compose([Validators.required, Validators.email])],
      passwords: this.passwordForm,
      name: [this._user.name, Validators.maxLength(12)],
      age: [this._user.age, Validators.compose([Validators.min(14), Validators.max(99)])],
      gender: [this._user.gender],
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
      console.log('bien', response);
      this._snackBar.open('Usuario actualizado!', '', {duration: GENERAL_SNACKBAR_TIME, panelClass: ['success-snackbar'], horizontalPosition: 'center', verticalPosition: 'top'});
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