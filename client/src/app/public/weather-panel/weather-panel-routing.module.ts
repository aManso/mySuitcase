import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../../core/guards/authentication.guard';
import { WeatherPanelComponent } from './weather-panel.component';

// Root routes of this particular module: DESIGN.
const routes: Routes = [
  { path: '', component: WeatherPanelComponent, canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherPanelRoutingModule { }
