import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from '../../public/login/login.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  public constructor(
    private _injector: Injector,
  ) {
  }

  public intercept(req, next) {
    // this is to make sure that the dependency exist
    const loginService = this._injector.get(LoginService);

    // we add the token that it was created in BE to be retrieved again and valid the request
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${loginService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
