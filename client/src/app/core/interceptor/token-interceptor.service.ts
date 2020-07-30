import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SessionService } from '../services/session.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  public constructor(
    private _injector: Injector,
  ) {
  }

  public intercept(req, next) {
    // this is to make sure that the dependency exist
    const sessionService = this._injector.get(SessionService);

    // we add the token that it was created in BE to be retrieved again and valid the request
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
