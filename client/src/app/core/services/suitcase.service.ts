import { Optional, Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { last, map, tap } from 'rxjs/operators';

import {
  Suitcase,
  SuitcaseDetailOutput,
  SuitcaseOverviewInput,
  SuitcaseOverviewOutput
} from '../models/suitcase';
import { environment } from '../../../environments/environment';
import { TripItem, TripType } from '../models/trip';
import { SimpleOutput } from "../models/shared";
import { SessionService } from "../session/session.service";
import { Languages } from '../const/languages';

@Injectable()
export class SuitcaseService {
  private _currentSuitcase: Suitcase;
  public totalSuitcases: number;
  private readonly SAVE_SUITCASE_API = environment.apiUrl + 'suitcase/save';
  private readonly UPDATE_SUITCASE_API = environment.apiUrl + 'suitcase/update';
  private readonly RECOMMENDATIONS_SUITCASE_API = environment.apiUrl + 'suitcase/recommendations';
  private readonly SUITCASE_OVERVIEW_API = environment.apiUrl + 'suitcase/overview';
  private readonly SUITCASE_DETAIL_API = environment.apiUrl + 'suitcase/detail/';
  private readonly REMOVE_SUITCASE_API = environment.apiUrl + 'suitcase/remove';

  public constructor(
    private _http: HttpClient,
    @Inject(LOCALE_ID) public localeId: string,
    @Optional() private _sessionService?: SessionService,
  ) {
  }

  public saveSuitcase(suitcase: Suitcase, existing = false): Observable<string|void> {
    const $saveResponse = new Subject<void>();
    const url = existing ? this.UPDATE_SUITCASE_API : this.SAVE_SUITCASE_API;
    const options = {
          reportProgress: true
        }
    const req = new HttpRequest('POST', url , {suitcase}, options);

    this._http.request(req).pipe(
      tap((event) => {
        this.getEventMessage(event, suitcase);
        return event;
      }),
      last(),
    )
    .subscribe((data: any) => {
      this._currentSuitcase = data.body.response;
      console.log('Suitcase saved! ', data.body.response);
      $saveResponse.next();
    }, (error: any) => {
      console.log('There was a problem at saving the suitcase: ', error);
      $saveResponse.error(error);
    });
    return $saveResponse;
  }

  // this method is an useful example of showing the progrees of a uploading or downloading file with Angular HTTP
  private getEventMessage(event: HttpEvent<any>, file: any) {
    switch (event.type) {
      case HttpEventType.Sent:
        console.log( `Uploading file "${file.name}".` );
        break;
  
      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        console.log(`File "${file.name}" is ${percentDone}% uploaded.`);
        break;
  
      case HttpEventType.Response:
        console.log(`File "${file.name}" was completely uploaded!`);
        break;
  
      default:
        console.log(`File "${file.name}" surprising upload event: ${event.type}.`);
    }
  }

  public setCurrentSuitcase(suitcase: Suitcase): void  {
    this._currentSuitcase = suitcase;
  }

  public getCurrentSuitcase(): Suitcase {
    return this._currentSuitcase;
  }

  public fetchRecommendations(options: TripType, pageNumber: number, limit?: number): Observable<TripType> {
    const $saveResponse = new Subject<TripType>();
    this._http.post(this.RECOMMENDATIONS_SUITCASE_API, {options, pageNumber, limit})
    .pipe(
      map((trip: TripType)=> {
        if (trip.baby) {
          trip.baby.items = this._getTranslatedItems(trip.baby.items);
        }
        if (trip.beach) {
          trip.beach.items = this._getTranslatedItems(trip.beach.items);
        }
        if (trip.common) {
          trip.common.items = this._getTranslatedItems(trip.common.items);
        }
        if (trip.mountain) {
          trip.mountain.items = this._getTranslatedItems(trip.mountain.items);
        }
        if (trip.pet) {
          trip.pet.items = this._getTranslatedItems(trip.pet.items);
        }
        if (trip.sport) {
          trip.sport.items = this._getTranslatedItems(trip.sport.items);
        }        
        return trip;
      })
    )
    .subscribe((trip: TripType) => {
      console.log('Recommendations retrieved', trip);
      $saveResponse.next(trip);
    }, (error: any) => {
      console.log('There was a problem at retrieving the recommendations: ', error);
      $saveResponse.error(error);
    });
    return $saveResponse;
  }

  private _getTranslatedItems(items: TripItem[]): TripItem[] {
    // If current app language is not EN get the translated name
    return Languages.en != this.localeId ? items.map((item: TripItem)=> {
      item.name = item[this.localeId + '_name'] || item.name;
      return item
    }) : items;
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
      this.totalSuitcases--;
      $response.next(response);
    }, (error: any) => {
      console.log('There was a problem at removing the suitcase: ', error);
      $response.error(error);
    });
    return $response;
  }

  // *********************** DETAIL ************************
  public retrieveSuitcaseDetail(name: string): Observable<SuitcaseDetailOutput> {
    const $detailResponse = new Subject<SuitcaseDetailOutput>();
    // this is to make sure that the dependency exist
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this._sessionService.getToken()}`
    });
    this._http.get(this.SUITCASE_DETAIL_API + name, {headers: headers}).subscribe((response: SuitcaseDetailOutput) => {
      console.log('Suitcase detail retrieved', response);
      $detailResponse.next(response);
      $detailResponse.complete();
    }, (error: any) => {
      console.log('There was a problem at retrieving the detail of the suitcase: ', error);
      $detailResponse.error(error);
    });
    return $detailResponse;
  }

}
