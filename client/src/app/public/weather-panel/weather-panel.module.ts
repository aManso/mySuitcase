import { NgModule } from '@angular/core';
import { WeatherPanelRoutingModule } from './weather-panel-routing.module';
import { WeatherPanelComponent } from './weather-panel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    WeatherPanelRoutingModule,
  ],
  declarations: [
    WeatherPanelComponent,
  ],
  exports: [WeatherPanelComponent],
  providers: [],
})
export class WeatherPanelModule {
  constructor() {}
}
