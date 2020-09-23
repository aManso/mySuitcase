import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Suitcase } from '../../core/models/suitcase';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SuitcaseService {
  private _currentSuitcase: Suitcase;
  private readonly URL_API = environment.apiUrl + 'suitcase/save';

  public constructor(
    private _http: HttpClient,
  ) {
  }

  public saveSuitcase(suitcase: Suitcase): Observable<void > {
    const $saveResponse = new Subject<void>();
    this._currentSuitcase = suitcase;
    this._http.post(this.URL_API, {suitcase}).subscribe((response: null) => {
      console.log('Suitcase saved! ', response);
      $saveResponse.next();
    }, (error: any) => {
      console.log('There was a problem at saving the suitcase: ', error);
      $saveResponse.error(error);
    });
    return $saveResponse;
  }

  public getCurrentSuitcase(): Suitcase {
    return this._currentSuitcase;
  }
}
