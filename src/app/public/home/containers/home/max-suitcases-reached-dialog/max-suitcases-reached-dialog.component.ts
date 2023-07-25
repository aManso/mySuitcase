import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'suitcase-max-suitcases-reached-dialog',
  templateUrl: './max-suitcases-reached-dialog.component.html',
})
export class MaxSuitcasesReachedDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {title: string, content: string, confirmButton?: string, errorButton?: string}
  ) {
  }
}
