import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../core/shared/shared.module';
import { BASE_ROUTE, LoginComponent} from './containers/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule} from '@angular/material/input';
import { LoginService } from './login.service';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { SessionModule } from '../session/session.module';
import { UpdatePasswordComponent } from './containers/update-password.component';
import { LoginWrapperComponent } from './login-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SessionModule.forRoot({MINUTES_TO_SHOW_COUNTDOWN: undefined}),
    LoginRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
  ],
  declarations: [
    LoginWrapperComponent,
    LoginComponent,
    UpdatePasswordComponent,
  ],
  exports: [],
  providers: [
    LoginService,
    AuthenticationGuard,
    AuthorizationGuard,
    {provide: BASE_ROUTE, useValue: '/'},
  ],
})
export class LoginModule {}
