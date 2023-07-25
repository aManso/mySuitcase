import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsResolver } from '../resolvers/settings-resolver';
import { SettingsComponent } from './containers/settings.component';

const routes: Routes = [
  { path: '', resolve: { user: SettingsResolver}, component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
