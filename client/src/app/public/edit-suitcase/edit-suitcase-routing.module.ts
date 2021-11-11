import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSuitcaseComponent } from './containers/edit-suitcase.component';
import { AuthenticationGuard } from '../../core/guards/authentication.guard';

// Root routes of this particular module: HOME.
const routes: Routes = [
  { path: '', component: EditSuitcaseComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSuitcaseRoutingModule { }
