import {
  AfterViewInit,
  Component,
} from '@angular/core';
import { PWAInstallerService } from '../../services/pwa-installer.service';

@Component({
  selector: 'pwa-installer',
  styles: [`:host { width: 100%;display: flex; justify-content: end; padding: 0 30px; position: absolute;z-index:999}`
  ],
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
