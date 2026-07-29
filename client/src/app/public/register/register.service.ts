import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserRegister } from '../../core/models/user';
import { Subject, Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { SessionService } from '../../core/services/session.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly URL_REGISTER = 'http://localhost:3000/api/register/';
  private readonly _http = inject(HttpClient);
  private readonly _loginService = inject(LoginService);
  private readonly _sessionService = inject(SessionService);

  public register (user: User) {
    const $registerResponse = new Subject<User|boolean>();
    (this._http.post(this.URL_REGISTER, user) as Observable<UserRegister|boolean>).subscribe((response: UserRegister|boolean) => {
      if (typeof response === 'object') {
        console.log('user registered', response.user);
        this._loginService.setActiveUser(response.user);
        this._sessionService.startSession(response.token);
        $registerResponse.next(response.user);
      } else {
        $registerResponse.next(response);
      }
    }, (error: any) => {
      $registerResponse.error(error);
    });
    return $registerResponse;
  }
}
