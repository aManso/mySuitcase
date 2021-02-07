import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Suitcase } from '../../core/models/suitcase';
import { environment } from '../../../environments/environment';
import { TripType } from '../../core/models/trip';

@Injectable({
  providedIn: 'root',
})
export class SuitcaseService {
  private _currentSuitcase: Suitcase;
  private readonly SAVE_SUITCASE_API = environment.apiUrl + 'suitcase/save';
  private readonly UPDATE_SUITCASE_API = environment.apiUrl + 'suitcase/update';
  private readonly RECOMMENDATIONS_SUITCASE_API = environment.apiUrl + 'suitcase/recommendations';

  public constructor(
    private _http: HttpClient,
  ) {
  }

  public saveSuitcase(suitcase: Suitcase, existing = false): Observable<void> {
    const $saveResponse = new Subject<void>();
    const url = existing ? this.UPDATE_SUITCASE_API : this.SAVE_SUITCASE_API;
    this._http.post(url, {suitcase}).subscribe((data: any) => {
      this._currentSuitcase = data.response;
      console.log('Suitcase saved! ', data.response);
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

  public fetchRecommendations(options: TripType, pageNumber: number, limit?: number): Observable<TripType> {
    const $saveResponse = new Subject<TripType>();
    this._http.post(this.RECOMMENDATIONS_SUITCASE_API, {options, pageNumber, limit}).subscribe((response: TripType) => {
      console.log('Recommendations retrieved', response);
      $saveResponse.next(response);
    }, (error: any) => {
      console.log('There was a problem at retrieving the recommendations: ', error);
      $saveResponse.error(error);
    });
    return $saveResponse;
  }
}
