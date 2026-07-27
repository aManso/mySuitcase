import { Component, OnInit, InjectionToken, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { RegisterService } from '../register.service';
import { passwordMatchingValidator, passwordValidator } from '../../../core/validators/validators';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    imports: [
      CommonModule,
      SharedModule,
      ReactiveFormsModule,
    ],
    providers: [{ provide: BASE_ROUTE, useValue: '/' }],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
export class RegisterComponent implements OnInit{
  public registerForm: UntypedFormGroup;
  public passwordForm: UntypedFormGroup;

  private _registerService = inject(RegisterService);
  private _router = inject(Router);
  private _baseRoute = inject(BASE_ROUTE);
  private _fb = inject(UntypedFormBuilder);
  private _snackBar = inject(MatSnackBar);

  public ngOnInit() {
    this.registerForm = this._setRegisterForm();
  }

  private _setRegisterForm() {
    this.passwordForm = this._setPasswordForm();
    return this._fb.group({
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
      this._registerService.register(this.registerForm.value).subscribe({
        next: (user: User|boolean) => {
          if (user) {
            this.goTo(this._baseRoute.toString());
          } else {
            this._snackBar.open('An user already exist with this email', 'Close', {
              duration: 5 * 1000,
            });
          }
        },
        error: (error: any) => {
          this._snackBar.open(error, 'Close', {
            duration: 5 * 1000,
          });
        },
      });
    }
  }
}
