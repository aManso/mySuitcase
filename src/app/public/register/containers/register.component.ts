import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { RegisterService } from '../register.service';
import { passwordMatchingValidator, passwordValidator } from '../../../core/validators/validators';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  public registerForm: UntypedFormGroup;
  public passwordForm: UntypedFormGroup;

  public constructor(
    private _registerService: RegisterService,
    private _router: Router,
    @Inject(BASE_ROUTE) private baseRoute: string[],
    private fb: UntypedFormBuilder
  ) {
  }

  public ngOnInit() {
    this.registerForm = this._setRegisterForm();
  }

  private _setRegisterForm() {
    this.passwordForm = this._setPasswordForm();
    return this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      passwords: this.passwordForm,
      name: [null, Validators.maxLength(12)],
      age: [null, Validators.compose([Validators.min(14), Validators.max(99)])],
      gender: null,
    });
  }

  private _setPasswordForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      password: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        passwordValidator(),
      ]),
      passwordConfirmation: new UntypedFormControl(null, [
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
          this.goTo(this.baseRoute.toString());
        } else {
          // TODO use a dialog
          console.error('An user already exist with this email');
        }
      },
        (error: any) => {
          console.error('Error in the transaction');
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
}
