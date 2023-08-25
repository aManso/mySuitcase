import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of, of as _of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RegisterService } from './register.service';

@Injectable()
export class RegisterResolver  {
  constructor(
    private _registerService: RegisterService,
  ) {
  }

  /**
   * resolve method
   * @param route
   * @param state
   * Whenever you need to get the data before the component initialization, the right way to do this is to use resolver.
   * Resolver acts synchronously i.e. resolver will wait for async call to complete and only after processing the async call,
   * it will route to the respective URL. Thus, the component initialization will wait till the callback is completed.
   * Thus, if you want to do something (service call), even before the component is initialized, you have come to right place.
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const authorizationToken = route.queryParams.token;
    return this._registerService.confirmRegistration(authorizationToken).pipe(
      catchError((error)=> {
        return of(false);
      })
    );
  }

}
