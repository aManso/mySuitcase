import { NgModule } from '@angular/core';
import { CreateSuitcaseRoutingModule } from './create-suitcase-routing.module';
import { CreateSuitcaseComponent } from './create-suitcase.component';
import { WeatherPanelModule } from '../weather-panel/weather-panel.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CreateSuitcaseRoutingModule,
    WeatherPanelModule,
  ],
  declarations: [
    CreateSuitcaseComponent,
  ],
  exports: [],
  providers: [],
})
export class CreateSuitcaseModule {
  constructor() {}
}
