import {
  Component,
} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class RemoveDialogComponent {

}
