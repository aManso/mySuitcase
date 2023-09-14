import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginService } from 'src/app/core/login/login.service';
import { ConfirmRegisterComponent } from './containers/confirm-register.component';
import { RegisterComponent } from './containers/register.component';
import { RegisterResolver } from './register-resolver';
import { RegisterWrapperComponent } from './register-wrapper.component';

const routes: Routes = [
  {
    path: '', component: RegisterWrapperComponent,
    children: [
      { path: '', component: RegisterComponent },
      { path: 'confirm', pathMatch: 'prefix', resolve: { confirmRegistration: RegisterResolver}, component: ConfirmRegisterComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginService]
})
export class RegisterRoutingModule { }
