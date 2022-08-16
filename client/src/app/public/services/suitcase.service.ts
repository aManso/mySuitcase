import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Suitcase, SuitcaseOverviewInput, SuitcaseOverviewOutput} from '../../core/models/suitcase';
import { environment } from '../../../environments/environment';
import { TripType } from '../../core/models/trip';
import {SimpleOutput} from "../../core/models/shared";

@Injectable({
  providedIn: 'root',
})
export class SuitcaseService {
  private _currentSuitcase: Suitcase;
  public totalSuitcases: number;
  private readonly SAVE_SUITCASE_API = environment.apiUrl + 'suitcase/save';
  private readonly UPDATE_SUITCASE_API = environment.apiUrl + 'suitcase/update';
  private readonly RECOMMENDATIONS_SUITCASE_API = environment.apiUrl + 'suitcase/recommendations';
  private readonly SUITCASE_OVERVIEW_API = environment.apiUrl + 'suitcase/overview';
  private readonly REMOVE_SUITCASE_API = environment.apiUrl + 'suitcase/remove';

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

  public setCurrentSuitcase(suitcase: Suitcase): void  {
    this._currentSuitcase = suitcase;
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

  // *********************** OVERVIEW ************************
  public retrieveSuitcaseOverview(input: SuitcaseOverviewInput): Observable<SuitcaseOverviewOutput> {
    const $overviewResponse = new Subject<SuitcaseOverviewOutput>();
    this._http.post(this.SUITCASE_OVERVIEW_API, input).subscribe((response: SuitcaseOverviewOutput) => {
      console.log('Suitcase overview retrieved', response);
      this.totalSuitcases = response.list.length;
      $overviewResponse.next(response);
    }, (error: any) => {
      console.log('There was a problem at retrieving the overview: ', error);
      $overviewResponse.error(error);
    });
    return $overviewResponse;
  }

  public removeSuitcase(id: string): Observable<SimpleOutput> {
    const $response = new Subject<SimpleOutput>();
    this._http.post(this.REMOVE_SUITCASE_API, {id}).subscribe((response: SimpleOutput) => {
      console.log('Suitcase removed', response);
      $response.next(response);
    }, (error: any) => {
      console.log('There was a problem at removing the suitcase: ', error);
      $response.error(error);
    });
    return $response;
  }
}
