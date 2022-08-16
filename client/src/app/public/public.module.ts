import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { SharedModule } from '../core/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { SuitcaseService } from '../core/services/suitcase.service';
import { SessionModule } from '../core/session/session.module';
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { AuthorizationGuard } from "../core/guards/authorization.guard";
import { TokenInterceptorService } from "../core/interceptor/token-interceptor.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from '../core/login/login.service';
import { DetailResolver } from '../core/resolvers/detail-resolver';

@NgModule({
  imports: [
    SharedModule,
    SessionModule.forRoot({MINUTES_TO_SHOW_COUNTDOWN: 10}),
    HttpClientModule,
    PublicRoutingModule,
  ],
  declarations: [
    PublicComponent,
  ],
  exports: [],
  providers: [
    LoginService,
    SuitcaseService,
    DetailResolver,
    AuthenticationGuard,
    AuthorizationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
})
export class PublicModule {
  constructor() {}
}
