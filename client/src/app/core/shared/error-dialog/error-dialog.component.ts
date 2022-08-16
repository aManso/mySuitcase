import {
  Component, Inject, OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
})
export class ErrorDialogComponent implements OnInit {
  public title: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, message: any, action: boolean}
  ) {
  }

  public ngOnInit(): void {
      this.title = this.data.title;
      this.message = this.data.message
  }

}
