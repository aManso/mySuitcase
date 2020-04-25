import { NgModule } from '@angular/core';
import {SharedModule} from '../../core/shared/shared.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({

  imports: [
    SharedModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [],
  providers: [],
})
export class LoginModule {
  constructor() {}
}
