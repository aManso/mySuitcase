import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login.component';
import { UpdatePasswordComponent } from './containers/update-password.component';
import { LoginWrapperComponent } from './login-wrapper.component';

const routes: Routes = [
  {
    path: '', component: LoginWrapperComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'update-password', pathMatch: 'prefix', component: UpdatePasswordComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
