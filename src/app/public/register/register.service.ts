import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserRegister } from '../../core/models/user';
import { Subject, Observable } from 'rxjs';
import { SessionService } from '../../core/session/session.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly URL_REGISTER = environment.apiUrl + 'register/';

  public constructor(
    private http: HttpClient,
    private _sessionService: SessionService,
  ) {
  }

  public register (user: User) {
    const $registerResponse = new Subject<User>();
    (this.http.post(this.URL_REGISTER, user) as Observable<UserRegister>).subscribe((response: UserRegister) => {
      if (typeof response === 'object') {
        console.log('user registered', response.user);
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
