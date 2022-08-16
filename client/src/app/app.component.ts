import { Component, Inject } from '@angular/core';
import { AppConfig, MYSUITCASE_CONFIG, MYSUITCASE_CONFIG_TOKEN } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public config: AppConfig;

  constructor(@Inject(MYSUITCASE_CONFIG_TOKEN) config: AppConfig) {
    this.config = config;
  }
}
