import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../core/models/user';
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
    (this.http.post(this.URL_REGISTER, user) as Observable<User>).subscribe((loggedUser: User|boolean) => {
      if (typeof loggedUser === 'object') {
        console.log('user registered', loggedUser);
        this._loginService.setActiveUser(loggedUser);
      }
      $registerResponse.next(loggedUser);
    }, (error: any) => {
      $registerResponse.error(error);
    });
    return $registerResponse;
  }
}
