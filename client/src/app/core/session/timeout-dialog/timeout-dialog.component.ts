import { Component } from '@angular/core';
import {SessionService} from '../session.service';

@Component({
  selector: 'my-suitcase-timeout-dialog',
  templateUrl: 'timeout-dialog.component.html',
})
export class TimeoutDialogComponent {

  constructor(
    public readonly sessionService: SessionService,
  ) {
  }
}
