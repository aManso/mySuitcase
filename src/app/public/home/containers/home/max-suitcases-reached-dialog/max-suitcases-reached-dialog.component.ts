import { Component, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'suitcase-max-suitcases-reached-dialog',
  templateUrl: './max-suitcases-reached-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class MaxSuitcasesReachedDialogComponent {
  protected readonly data: {title: string, content: string, confirmButton?: string, errorButton?: string} = inject(MAT_DIALOG_DATA);
}
