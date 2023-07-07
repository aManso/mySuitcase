import {
  Component, Inject, OnInit,
} from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
})
export class InfoDialogComponent implements OnInit {
  public title: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, message: any, action: boolean}
  ) {
  }

  public ngOnInit(): void {
      this.title = this.data.title;
      this.message = this.data.message
  }

}
