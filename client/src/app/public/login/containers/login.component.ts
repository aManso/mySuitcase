import { Inject, Component, OnInit, InjectionToken } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { AuthenticationGuard } from '../../../core/guards/authentication.guard';
// TODO use it when launching to PROD
import { passwordValidator } from '../../../core/validators/validators';

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
    this.loginForm = this._setLoginForm();
  }

  private _setLoginForm() {
    return this.fb.group({
      keepSession: [null],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        // passwordValidator(),
      ]),
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
