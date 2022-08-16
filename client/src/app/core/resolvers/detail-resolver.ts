import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {Observable, of as _of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {SuitcaseService} from '../services/suitcase.service';
import {Suitcase} from '../models/suitcase';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailResolver implements Resolve<any> {
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _suitcaseService: SuitcaseService,
    ) { }

  /**
   * resolve method
   * @param route
   * @param state
   * Whenever you need to get the data before the component initialization, the right way to do this is to use resolver.
   * Resolver acts synchronously i.e. resolver will wait for async call to complete and only after processing the async call,
   * it will route to the respective URL. Thus, the component initialization will wait till the callback is completed.
   * Thus, if you want to do something (service call), even before the component is initialized, you have come to right place.
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // const dialogRef = this.dialog.open(ProgressComponent);
    const suitcaseName = route.url[route.url.length - 1].path;
    route.url[route.url.length - 1].path = this._removeSpaces(route.url[route.url.length - 1].path);
    if (this._router.getCurrentNavigation().extras.state && this._router.getCurrentNavigation().extras.state.id) {
      // if the route has as param the id, its because it is coming from the overview, so the suitcase has already been set as current
      return _of(true);
    } else {

      // In case the user is accessing straight from the url
      return this._suitcaseService.retrieveSuitcaseDetail(suitcaseName).pipe(
        tap((suitcase: Suitcase) => this._suitcaseService.setCurrentSuitcase(suitcase)),
        // tap(() => dialogRef.close()),
        map(() => true),
        catchError(err => _of(false))
      )
    }
  }

  private _removeSpaces(url: string): string {
    return url.split(' ').join('_').toLowerCase();
  }

}
