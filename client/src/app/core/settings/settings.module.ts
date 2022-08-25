import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './containers/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { NavBarModule } from '../shared/navbar/navbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { LoginService } from '../login/login.service';
import { SettingsService } from './settings.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../interceptor/token-interceptor.service';
import { SettingsResolver } from '../resolvers/settings-resolver';

@NgModule({

  imports: [
    CommonModule, // needed for async in view
    HttpClientModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    // application modules
    NavBarModule,
    FooterModule,
  ],
  declarations: [
    SettingsComponent,
  ],
  exports: [
    SettingsComponent,
  ],
  providers: [
    LoginService,
    SettingsService,
    SettingsResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,

    },
  ],
})
export class SettingsModule {
  constructor() {}
}
