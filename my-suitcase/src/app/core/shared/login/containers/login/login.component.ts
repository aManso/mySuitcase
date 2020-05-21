import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../models/user';
import { AuthenticationGuard } from '../../../../guards/authentication.guard';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup;
  public loginMode = true;

  public constructor(
    private _loginService: LoginService,
    public _authenticationGuard: AuthenticationGuard,
    private _router: Router,
    @Inject(BASE_ROUTE) private baseRoute: string[],
    private fb: FormBuilder
  ) {
  }

  public ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  private _setLoginForm() {
    return this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  private _setRememberForm() {
    return this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
    });
  }

  public toggleMode() {
    this.loginMode = !this.loginMode;
    this.loginForm = this.loginMode ? this._setLoginForm() : this._setRememberForm();
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }

  public submit() {
    if (this.loginForm.valid) {
      this._loginService.login(this.loginForm.value).subscribe((user: User|boolean) => {
        if (user) {
          const targetUrl = this._authenticationGuard.lastIntendedTargetRoute ? this._authenticationGuard.lastIntendedTargetRoute : this.baseRoute;
          this._router.navigate([targetUrl]);
        } else {
          console.error('The user or the password is wrong');
          // TODO show an error message when there email or the password was wrong
        }
      },
        (error: any) => {
        // TODO show an error message when there was a problem
        });
    }
  }
}
