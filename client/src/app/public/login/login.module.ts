import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../core/shared/shared.module';
import { BASE_ROUTE, LoginComponent} from './containers/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [],
  providers: [
    {provide: BASE_ROUTE, useValue: '/'},
  ],
})
export class LoginModule {
  constructor() {}
}
