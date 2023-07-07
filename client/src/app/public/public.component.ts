import { AfterViewInit, Component, ElementRef } from '@angular/core';

import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import { LoginService } from '../core/login/login.service';
import { SessionService } from '../core/session/session.service';
import { TimeoutDialogComponent } from '../core/session/timeout-dialog/timeout-dialog.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styles: [':host {display: inline-block; width: 100%; height: 100%}']
})
export class PublicComponent implements AfterViewInit {

  public constructor(
    private _loginService: LoginService,
    private _sessionService: SessionService,
    private _elementRef: ElementRef,
    private _dialog: MatDialog,
  ) {
  }

  public ngAfterViewInit() {
    let timeoutOpened = false;
    this._sessionService.showTimeOutPopUp$.subscribe(() => {
      timeoutOpened = true;
      const dialogRef = this._dialog.open(TimeoutDialogComponent, {
        height: '200px',
        width: '400px',
        hasBackdrop: true,
      });
      dialogRef.afterClosed().subscribe((confirm: boolean) => {
        if (confirm || confirm === undefined) {
          // Its undefined when clicking the backdrop
          this.keepAlive();
        } else {
          this.logout();
        }
        dialogRef.close();
        timeoutOpened = false;
      });
    });
    this._sessionService.logout$.subscribe(() => {
      this._dialog.closeAll();
    });

    // It is not available until view is loaded
    this._elementRef.nativeElement.addEventListener('mousemove', e => {
      // console.log('moving');
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
    this._elementRef.nativeElement.addEventListener('click', e => {
      // console.log('clicking');
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
    window.addEventListener('keypress', e => {
      console.log('keypress');
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
  }

  public keepAlive(): void {
    this._sessionService.reset();
  }

  public logout(): void {
    this._sessionService.stopInterval();
    this._loginService.logout();
  }
}
