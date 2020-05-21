import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { RegisterService } from '../../register.service';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  public registerForm: FormGroup;

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
    return this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
      passwordConfirmation: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
      name: [null, Validators.maxLength(12)],
      age: [null, Validators.compose([Validators.min(14), Validators.max(99)])],
      gender: null,
    });
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public isValidForm(): boolean {
    return this.registerForm.valid && this.registerForm.controls.password.value === this.registerForm.controls.passwordConfirmation.value;
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
