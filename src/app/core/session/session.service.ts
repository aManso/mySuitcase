import { Injectable, Optional } from '@angular/core';
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
  private _storageMethod: Storage;

  public constructor(@Optional() private _config: SessionServiceConfig) {
    this.sessionSeconds = this._config && this._config.MINUTES_TO_SHOW_COUNTDOWN ? this._config.MINUTES_TO_SHOW_COUNTDOWN * 60: undefined;
    console.log(this.sessionSeconds + ' seconds of session');
  }

  public setStorageMethod(storageMethod: Storage): void {
    this._storageMethod = storageMethod;
  }

  public _isThereActiveUser():boolean {
    return this._storageMethod ? !!this._storageMethod.getItem('activeUserToken') : !!sessionStorage.getItem('activeUserToken') || !!localStorage.getItem('activeUserToken');
  }

  private _findStorageMethod(): Storage {
    return sessionStorage.getItem('activeUserToken') ? sessionStorage : localStorage;
  }

  public getStorageMethod() {
    return this._storageMethod;
  }

  public removeToken(removeAll?: boolean) {
    if (removeAll) {
      sessionStorage.removeItem('activeUserToken');
      localStorage.removeItem('activeUserToken');
    } else {
      this._storageMethod.removeItem('activeUserToken');
    }
  }

  public startSession(token: string, ) {
    // In case of first loading the app but having the user in the localStorage or sessionStorage
    if (!this._storageMethod && this._isThereActiveUser()) {
      this._storageMethod = this._findStorageMethod()
    }
    this._storageMethod.setItem('activeUserToken', token);
    this._initInterval();
  }

  public getToken(): string {
    // In case of first loading the app but having the user in the localStorage or sessionStorage
    if (!this._storageMethod && this._isThereActiveUser()) {
      this._storageMethod = this._findStorageMethod();
      return this._storageMethod.getItem('activeUserToken');
    } else if (this._storageMethod) {
      return this._storageMethod.getItem('activeUserToken');
    }
    return '';
  }

  public getIdToken(): string {
    // In case of first loading the app but having the user in the localStorage or sessionStorage
    if (!this._storageMethod && this._isThereActiveUser()) {
      this._storageMethod = this._findStorageMethod()
    }
    const idToken =  this._storageMethod.getItem('activeUserToken');
    var base64Url = idToken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var rawPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const payload = JSON.parse(rawPayload);
    // TODO check why from register it comes userId and from refreshing after login it comes as subject
    return payload ? payload.subject ? payload.subject : payload.userId : payload;
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
