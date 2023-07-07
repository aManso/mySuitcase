import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { TokenInterceptorService } from '../interceptor/token-interceptor.service';
import { SettingsResolver } from '../resolvers/settings-resolver';
import { SettingsComponent } from './containers/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { NavBarModule } from '../shared/navbar/navbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { LoginService } from '../login/login.service';
import { SettingsService } from './settings.service';

@NgModule({

  imports: [
    CommonModule, // needed for async in view
    HttpClientModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    // application modules
    NavBarModule,
    FooterModule,
    // Material design modules
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatBottomSheetModule,
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
