import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/core/login/login.service';
import { ConfirmRegisterComponent } from './containers/confirm-register.component';
import { RegisterComponent } from './containers/register.component';
import { RegisterResolver } from './register-resolver';

const routes: Routes = [
  { path: 'confirm', resolve: { confirmRegistration: RegisterResolver}, component: ConfirmRegisterComponent},
  { path: '', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginService]
})
export class RegisterRoutingModule { }
