import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User, UserRegister} from '../../core/models/user';
import { Subject, Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly URL_REGISTER = 'http://localhost:3000/api/register/';

  public constructor(
    private http: HttpClient,
    private _loginService: LoginService,
  ) {
  }

  public register (user: User) {
    const $registerResponse = new Subject<User|boolean>();
    (this.http.post(this.URL_REGISTER, user) as Observable<UserRegister|boolean>).subscribe((response: UserRegister|boolean) => {
      if (typeof response === 'object') {
        console.log('user registered', response.user);
        this._loginService.setActiveUser(response.user);
        sessionStorage.setItem('activeUserToken', response.token);
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
