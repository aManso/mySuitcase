import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import {Suitcase} from '../../core/models/suitcase';

@Injectable({
  providedIn: 'root',
})
export class SuitcaseService {
  private _currentSuitcase: Suitcase;

  public constructor() {
  }

  public saveSuitcase(suitcase: Suitcase): void {
    this._currentSuitcase = suitcase;
    // TODO save into the DDBB
  }

  public getCurrentSuitcase(): Suitcase {
    return this._currentSuitcase;
  }
}
