import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../../core/shared/shared.module';
import { BASE_ROUTE, RegisterComponent } from './containers/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ConfirmRegisterComponent } from './containers/confirm-register.component';
import { RegisterService } from './register.service';
import { RegisterResolver } from './register-resolver';
import { RegisterWrapperComponent } from './register-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Own modules
    SharedModule,
    RegisterRoutingModule,
    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  declarations: [
    RegisterWrapperComponent,
    RegisterComponent,
    ConfirmRegisterComponent,
  ],
  exports: [],
  providers: [
    RegisterService,
    RegisterResolver,
    {provide: BASE_ROUTE, useValue: '/'},
  ],
})
export class RegisterModule {
  constructor() {}
}
