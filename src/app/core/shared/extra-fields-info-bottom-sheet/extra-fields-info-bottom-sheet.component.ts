import {
  Component,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-extra-fields-info-bottom-sheet',
  templateUrl: './extra-fields-info-bottom-sheet.component.html',
  styleUrls: ['./extra-fields-info-bottom-sheet.component.scss']
})
export class ExtraFieldsInfoBottomSheetComponent {
  constructor(private readonly _bottomSheetRef: MatBottomSheetRef<ExtraFieldsInfoBottomSheetComponent>) {}

  public closePanel(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
