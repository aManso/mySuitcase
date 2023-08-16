import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserRegister } from '../../core/models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SimpleOutput } from 'src/app/core/models/shared';

@Injectable()
export class RegisterService {
  private readonly URL_REGISTER = environment.apiUrl + 'register/';
  private readonly URL_REGISTER_CONFIRM = environment.apiUrl + 'register/confirm';

  public constructor(
    private readonly _http: HttpClient,
  ) {
  }

  public register(user: User, lang: string): Observable<SimpleOutput> {
    return this._http.post(this.URL_REGISTER, {user, lang}) as Observable<SimpleOutput>;
  }

  public confirmRegistration(authorizationToken: string): Observable<SimpleOutput> {
    return this._http.put(this.URL_REGISTER_CONFIRM, {authorizationToken}) as Observable<SimpleOutput>;
  }

}
