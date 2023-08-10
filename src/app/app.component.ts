import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig, MYSUITCASE_CONFIG_TOKEN } from './app.config';
import { SwUpdate } from '@angular/service-worker'
import { ConfigService } from './core/services/config.service';

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
    private readonly configService: ConfigService,
  ) {
    this.config = config;
  }

  public ngOnInit(): void {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((evt: any)=> {
        switch (evt.type) {
          case 'VERSION_DETECTED':
            console.log(`Downloading new app version: ${evt.version.hash}`);
            break;
          case 'VERSION_READY':
            console.log(`Current app version: ${evt.currentVersion.hash}`);
            console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
            if (confirm("Una nueva versión está disponible, ¿Desea cargar la nueva versión?")) {
              window.location.reload();
            }
            break;
          case 'VERSION_INSTALLATION_FAILED':
            console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
            break;
        }
      })
    } else {
      console.log("The current browser does not support service workers or the Angular Service Worker is not up and running");
    }
    // If there is not a locale set in the localStorage, we set as default the one of the navigator
    // This is also done in the main index but it could be possible that the user get access straight to a particular locale
    if (!this.configService.getLocale()) {
      this.configService.setLocale(window.navigator.language);
    }
    
  }
}
