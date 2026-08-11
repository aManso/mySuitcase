import {
  Component, inject, OnInit,
} from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class InfoDialogComponent implements OnInit {
  public title: string;
  public message: string;
  public readonly dialogRef: MatDialogRef<InfoDialogComponent> = inject(MatDialogRef<InfoDialogComponent>);
  private readonly _data: {title: string, message: any, action: boolean} = inject(MAT_DIALOG_DATA);

  public ngOnInit(): void {
      this.title = this._data.title;
      this.message = this._data.message;
  }

}
