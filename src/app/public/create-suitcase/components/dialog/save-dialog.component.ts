import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-save-dialog',
    templateUrl: './save-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
})
export class SaveDialogComponent {

}
