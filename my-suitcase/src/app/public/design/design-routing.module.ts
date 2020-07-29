import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './containers/design/design.component';
import {AuthenticationGuard} from '../../core/guards/authentication.guard';

// Root routes of this particular module: HOME.
const routes: Routes = [
  { path: '', component: DesignComponent, canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
