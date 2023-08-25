import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
    private readonly _loginService: LoginService,
    private readonly _sessionService: SessionService,
    private readonly _elementRef: ElementRef,
    private readonly _dialog: MatDialog,
  ) {
  }

  /**
   * After the view of the module has been loaded, we init the timeout session.
   * If a click, move or key is triggered, we reset the timer. 
   * If the countdown is finished, we show a dialog to finish the session or not
   */
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
          this._sessionService.reset();
        } else {
          this._logout();
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
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
    this._elementRef.nativeElement.addEventListener('click', e => {
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
    window.addEventListener('keypress', e => {
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
  }

  /**
   * When clicking to finish the session, we stop the intereval and logout
   */
  private _logout(): void {
    this._sessionService.stopInterval();
    this._loginService.logout();
  }
}
