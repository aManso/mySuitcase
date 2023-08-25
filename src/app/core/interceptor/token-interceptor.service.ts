import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { SessionService } from '../session/session.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  public constructor(
    private readonly _injector: Injector,
  ) {
  }

  public intercept(req, next) {
    // this is to make sure that the dependency exist
    const sessionService = this._injector.get(SessionService);

    // We can pass the token as parameter or otherwise, as general purpose, we understand is the session token
    const token = req.body?.authorizationToken || sessionService.getToken();

    // we add the token that it was created in BE to be retrieved again and valid the request
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
