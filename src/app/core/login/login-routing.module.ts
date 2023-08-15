import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login.component';
import { UpdatePasswordComponent } from './containers/update-password.component';

const routes: Routes = [
  { path: 'update-password', pathMatch: 'prefix', component: UpdatePasswordComponent},
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
