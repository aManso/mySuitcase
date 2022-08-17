import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, MYSUITCASE_CONFIG, MYSUITCASE_CONFIG_TOKEN } from './app.config';
import { SwUpdate } from '@angular/service-worker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public config: AppConfig;

  constructor(
    @Inject(MYSUITCASE_CONFIG_TOKEN) config: AppConfig,
    private swUpdate: SwUpdate ,
  ) {
    this.config = config;
  }

  public ngOnInit(): void {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((response: any)=> {
        if (response.type === 'VERSION_DETECTED') {
          if (confirm("Una nueva versión está disponible, ¿Desea cargar la nueva versión?")) {
            window.location.reload();
          }
        }
      })
    }
  }
}
