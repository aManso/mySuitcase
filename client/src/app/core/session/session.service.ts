import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class SessionServiceConfig {
  MINUTES_TO_SHOW_COUNTDOWN: number;
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _interval: any;
  private secondsCountDown = 10;
  public sessionSeconds: number;
  public showTimeOutPopUp$: Subject<number> = new Subject<number>();
  public logout$: Subject<void> = new Subject<void>();
  private _storageMethod = sessionStorage;

  public constructor(private _config: SessionServiceConfig) {
    this.sessionSeconds = this._config.MINUTES_TO_SHOW_COUNTDOWN ? this._config.MINUTES_TO_SHOW_COUNTDOWN * 60: undefined;
    console.log(this.sessionSeconds + ' seconds of session');
  }

  public setStorageMethod(storageMethod: any): void {
    this._storageMethod = storageMethod;
  }

  public getStorageMethod() {
    return this._storageMethod;
  }

  public startSession(token: string, ) {
    this._storageMethod.setItem('activeUserToken', token);
    this._initInterval();
  }

  public getToken(): string {
    return this._storageMethod.getItem('activeUserToken');
  }

  public getIdToken(): string {
    const idToken =  this._storageMethod.getItem('activeUserToken');
    var base64Url = idToken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var rawPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const payload = JSON.parse(rawPayload);
    return payload ? payload.subject : payload;
  }

  private _initInterval() {
    this._interval = setInterval(() => {
      --this.sessionSeconds;
      if (this.sessionSeconds < this.secondsCountDown) {
        if (this.sessionSeconds === this.secondsCountDown -1) {
          this.showTimeOutPopUp$.next(this.sessionSeconds);
        }
        if (this.sessionSeconds === 0) {
          this.stopInterval();
          this.logout$.next();
        }
      }
    }, 1000);
  }

  public reset(): void {
    this.sessionSeconds = this._config ? this._config.MINUTES_TO_SHOW_COUNTDOWN * 60 : undefined;
  }

  public stopInterval(): void {
    if (this._interval) {
      this.reset();
      clearInterval(this._interval);
    }
  }
}