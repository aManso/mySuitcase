// Information about the suitcase
import {Directive} from '@angular/core';
import {TripLocation, TripType} from './trip';

export interface ISuitcase {
  _id?: string;
  name: string;
  icon?: string;
  items: any[];
  date: {
    from: Date;
    to: Date;
  };
  place: TripLocation;
  type: TripType;
  isInProgress?: boolean;
}

@Directive()
export class Suitcase {
  public name: string;
  public date: {from: Date, to: Date};
  public place: TripLocation;
  public type: TripType;
  public icon?: string;
  public isInProgress?: boolean;
  public items: any;
  public _id?: string;

  private _dateOptions = {
    year: 'numeric', month: 'long', day: 'numeric'
  } as const;

  // constructor(name: string, date: {from: Date, to: Date}, place: TripLocation, type: TripType, isInProgress: boolean) {
  constructor(suitcase: ISuitcase) {
    this._id = suitcase._id;
    this.name = suitcase.name;
    this.icon = suitcase.icon;
    this.date = suitcase.date;
    this.place = suitcase.place;
    this.type = suitcase.type;
    this.isInProgress = !!suitcase.isInProgress;
    this.items = suitcase.items || [];
  }

  isNorthHemisphere(): boolean { return this.place.coordinates.lat > 0; }

  isSouthHemisphere(): boolean { return this.place.coordinates.lat < 0; }

  print() { console.log(`${this.name} / ${this.date.from} - ${this.date.to} / ${this.place} - ${this.type} - ${this.isInProgress} - `); }

  getPrintDate(): string {
    // currently only in ES format
    return new Date(this.date.from).toLocaleString('es-ES', this._dateOptions)  + ' - ' + new Date(this.date.to).toLocaleString('es-ES', this._dateOptions)
  }

  getPrintPlace(): string {
    return this.place.city + ', ' + this.place.country;
  }
}

export interface SuitcaseOverviewInput {
}

export interface SuitcaseOverviewOutput {
  list: Suitcase[];
}
