import {
  AfterViewInit,
  Component,
} from '@angular/core';
import { PWAInstallerService } from '../../services/pwa-installer.service';

@Component({
  selector: 'pwa-installer',
  styles: [`.install-button{ display: flex; align-items: center; width: 160px; justify-content: space-between;}`],
  templateUrl: './pwa-installer.component.html',
})
export class PwaInstallerComponent implements AfterViewInit {

  constructor(
    private _pwaInstallerService: PWAInstallerService,
  ) {
  }

  public ngAfterViewInit(): void {
    this._pwaInstallerService.loadScript();
  }

}
