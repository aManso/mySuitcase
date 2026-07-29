import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {SessionService} from '../core/services/session.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'my-suitcase-timeout-dialog',
    templateUrl: 'timeout-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatDialogModule, MatButtonModule],
    standalone: true
})
export class TimeoutDialogComponent {
  public sessionService = inject(SessionService);
}
