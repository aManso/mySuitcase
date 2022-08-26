import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/core/login/login.service';
import { RegisterComponent } from './containers/register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginService]
})
export class RegisterRoutingModule { }
