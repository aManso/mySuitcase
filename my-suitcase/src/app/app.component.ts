import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from './public/login/login.service';
import { User } from './core/models/user';
import { SessionService } from './core/services/session.service';
import { MatDialog } from '@angular/material/dialog';
import { TimeoutDialogComponent } from './timeout-dialog/timeout-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public isSessionActive: boolean;

  public constructor(
    private _loginService: LoginService,
    private _elementRef: ElementRef,
    public sessionService: SessionService,
    public dialog: MatDialog,
  ) {
    this._loginService.logged$.subscribe((user: User|boolean) => {
      this.isSessionActive = !!user;
    });
  }

  public ngAfterViewInit() {
    let timeoutOpened = false;
    this.sessionService.showTimeOutPopUp$.subscribe(() => {
      timeoutOpened = true;
      const dialogRef = this.dialog.open(TimeoutDialogComponent, {
        height: '200px',
        width: '400px',
        hasBackdrop: false,
      });
      dialogRef.afterClosed().subscribe((keepAlive: boolean) => {
        if (keepAlive) {
          this.keepAlive();
        } else {
          this.logout();
        }
        dialogRef.close();
      });
    });
    this.sessionService.logout$.subscribe(() => {
      timeoutOpened = false;
      this.dialog.closeAll();
    });

    // It is not available until view is loaded
    this._elementRef.nativeElement.addEventListener('mousemove', e => {
      console.log('moving');
      if (timeoutOpened) {
        this.sessionService.reset();
      }
    });
    this._elementRef.nativeElement.addEventListener('click', e => {
      console.log('clicking');
      if (timeoutOpened) {
        this.sessionService.reset();
      }
    });
    window.addEventListener('keypress', e => {
      console.log('keypress');
      if (timeoutOpened) {
        this.sessionService.reset();
      }
    });
  }

  public keepAlive(): void {
    this.sessionService.reset();
  }

  public logout():void {
    this.sessionService.stopInterval();
    this._loginService.logout();
  }
}
