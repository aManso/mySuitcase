import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../core/models/user';
import { RegisterService } from './register.service';
import { passwordMatchingValidator, passwordValidator } from '../../core/validators/validators';

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
    private fb: FormBuilder
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
      this._registerService.register(this.registerForm.value).subscribe((user: User|boolean) => {
        if (user) {
          this.goTo(this.baseRoute.toString());
        } else {
          console.error('An user already exist with this email');
        }
      },
        (error: any) => {
          console.error('Error in the transaction');
        });
    }
  }
}
