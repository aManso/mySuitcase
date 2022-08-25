import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { passwordMatchingValidator, passwordValidator } from '../../validators/validators';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent{
  private _user: User;
  public settingsForm: FormGroup;
  public passwordForm: FormGroup;

  public constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _settingsService: SettingsService,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this._user = this._activatedRoute.snapshot.data.user;
    this.settingsForm = this._setSettingsForm();
  }

  private _setSettingsForm() {
    this.passwordForm = this._setPasswordForm();
    this._user = this._user ? this._user : {} as User;
    return this._fb.group({
      email: [this._user.email, Validators.compose([Validators.required, Validators.email])],
      passwords: this.passwordForm,
      name: [this._user.name, Validators.maxLength(12)],
      age: [this._user.age, Validators.compose([Validators.min(14), Validators.max(99)])],
    });
  }

  private _setPasswordForm(): FormGroup {
    return new FormGroup({
      password: new FormControl(this._user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        passwordValidator(),
      ]),
      passwordConfirmation: new FormControl(this._user.password, [
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
    return this.settingsForm && this.settingsForm.valid;
  }

  public submit() {
    if (this.isValidForm()) {
      this._settingsService.update(this.settingsForm.value).subscribe((user: User) => {
        if (user) {
          this.goTo('/');
        }
      },
        (error: any) => {
          // TODO use a dialog
          console.error('Error in the transaction');
        });
    }
  }
}
