import {
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PWAInstallerService } from '../../services/pwa-installer.service';

@Component({
  selector: 'pwa-installer',
  styles: [`.install-button{ display: flex; align-items: center; width: 160px; justify-content: space-between;}`],
  templateUrl: './pwa-installer.component.html',
  standalone: true,
  imports: [MatIconModule],
})
export class PwaInstallerComponent implements AfterViewInit {

  private readonly _pwaInstallerService: PWAInstallerService = inject(PWAInstallerService);

  public ngAfterViewInit(): void {
    this._pwaInstallerService.loadScript();
  }

}
