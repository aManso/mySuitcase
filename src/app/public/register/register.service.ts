import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../core/models/user';
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

  /**
   * It register a new user into the system
   * @param user with all the info filled in the register form
   * @param lang to send the confirmation email in the correct language
   * @returns Simple confirmation response
   */
  public register(user: User, lang: string): Observable<SimpleOutput> {
    return this._http.post(this.URL_REGISTER, {user, lang}) as Observable<SimpleOutput>;
  }

  /**
   * It confirms the end of the registration process after having confirm the user email
   * @param authorizationToken to registered as header in the interceptor as it is a specific token
   * @returns Simple confirmation response
   */
  public confirmRegistration(authorizationToken: string): Observable<SimpleOutput> {
    return this._http.put(this.URL_REGISTER_CONFIRM, {authorizationToken}) as Observable<SimpleOutput>;
  }

}
