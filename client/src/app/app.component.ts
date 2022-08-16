import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from './public/login/login.service';
import { SessionService } from './core/services/session.service';
import { MatDialog } from '@angular/material/dialog';
import { TimeoutDialogComponent } from './timeout-dialog/timeout-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public constructor(
    private _loginService: LoginService,
    private _elementRef: ElementRef,
    public sessionService: SessionService,
    private _dialog: MatDialog,
  ) {}

  public ngAfterViewInit() {
    let timeoutOpened = false;
    this.sessionService.showTimeOutPopUp$.subscribe(() => {
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
    this.sessionService.logout$.subscribe(() => {
      this._dialog.closeAll();
    });

    // It is not available until view is loaded
    this._elementRef.nativeElement.addEventListener('mousemove', e => {
      console.log('moving');
      if (!timeoutOpened) {
        this.sessionService.reset();
      }
    });
    this._elementRef.nativeElement.addEventListener('click', e => {
      console.log('clicking');
      if (!timeoutOpened) {
        this.sessionService.reset();
      }
    });
    window.addEventListener('keypress', e => {
      console.log('keypress');
      if (!timeoutOpened) {
        this.sessionService.reset();
      }
    });
  }

  public keepAlive(): void {
    this.sessionService.reset();
  }

  public logout(): void {
    this.sessionService.stopInterval();
    this._loginService.logout();
  }
}
