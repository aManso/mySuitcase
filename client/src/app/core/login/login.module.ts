import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../core/shared/shared.module';
import { BASE_ROUTE, LoginComponent} from './containers/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginService } from './login.service';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { SessionModule } from '../session/session.module';
import { TokenInterceptorService } from '../interceptor/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SessionModule.forRoot({MINUTES_TO_SHOW_COUNTDOWN: undefined}),
    LoginRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [],
  providers: [
    LoginService,
    AuthenticationGuard,
    AuthorizationGuard,
    {provide: BASE_ROUTE, useValue: '/'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
})
export class LoginModule {
  constructor() {}
}
