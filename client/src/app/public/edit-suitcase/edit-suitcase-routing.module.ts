import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSuitcaseComponent } from './containers/edit-suitcase.component';

// Root routes of this particular module: HOME.
const routes: Routes = [
  { path: '', component: EditSuitcaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSuitcaseRoutingModule { }
