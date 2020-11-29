import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SuitcaseService } from '../services/suitcase.service';
import { Suitcase } from '../../core/models/suitcase';
import { TripType } from '../../core/models/trip';

@Component({
  selector: 'app-create-suitcase',
  templateUrl: './create-suitcase.component.html',
  styleUrls: ['./create-suitcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSuitcaseComponent implements OnInit {
  public suitcase: Suitcase;
  public showWeather: boolean;
  public weatherDays: number;
  private _sevenDaysDateInMillis: number;
  private _currentPageNumber = 1;
  public suggestionList: TripType;

  constructor(
    private _suitcaseService: SuitcaseService,
    private readonly _changeDetector: ChangeDetectorRef,
  ) {
  }

  public ngOnInit() {
    const sevenDaysDate = new Date();
    sevenDaysDate.setDate(sevenDaysDate.getDate() + 7);
    this._sevenDaysDateInMillis = sevenDaysDate.getTime();
    this.suitcase = this._suitcaseService.getCurrentSuitcase();
    this._fetchSuggestionList(this.suitcase.type);
    this.showWeather = this._checkShowWeather();
    this.weatherDays = this.showWeather ? Math.ceil((this._sevenDaysDateInMillis - this.suitcase.date.from.getTime()) / (1000*60*60*24)) : 0;
  }

  private _fetchSuggestionList(tripType: TripType) {
    this._suitcaseService.fetchRecommendations(tripType, this._currentPageNumber).subscribe((response) => {
      this.suggestionList = response;
      this._changeDetector.detectChanges();
    });
  }

  private _checkShowWeather(): boolean {
    return !!this.suitcase && this.suitcase.date.from.getTime() < this._sevenDaysDateInMillis;
  }
}
