// Information about the suitcase
import {Directive} from '@angular/core';
import {TripLocation, TripType} from './trip';

export interface ISuitcase {
  name: string;
  date: {
    from: Date;
    to: Date;
  };
  place: TripLocation;
  type: TripType;
  isInProgress: boolean;
}

@Directive()
export class Suitcase {
  public name: string;
  public date: {from: Date, to: Date};
  public place: TripLocation;
  public type: TripType;
  private _isInProgress: boolean;
  private _items: any;

  constructor(name: string, date: {from: Date, to: Date}, place: TripLocation, type: TripType, isInProgress: boolean) {
    this.name = name;
    this.date = date;
    this.place = place;
    this.type = type;
    this._isInProgress = isInProgress;
    this._items = {};
  }

  // we use get and set because this can be assign later on the creation
  get inProgress() {
    return this._isInProgress;
  }

  set inProgress(isInProgress: boolean) {
    this._isInProgress = isInProgress;
  }

  // we use get and set because this can be assign later on the creation
  get items() {
    return this._items;
  }

  set items(items: any) {
    this._items = items;
  }

  isNorthHemisphere(): boolean { return this.place.coordinates.lat > 0; }

  isSouthHemisphere(): boolean { return this.place.coordinates.lat < 0; }

  print() { console.log(`${this.name} / ${this.date.from} - ${this.date.to} / ${this.place} - ${this.type} - ${this._isInProgress} - `); }
}
