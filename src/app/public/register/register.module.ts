import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../../core/shared/shared.module';
import { BASE_ROUTE, RegisterComponent } from './containers/register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  declarations: [
    RegisterComponent,
  ],
  exports: [],
  providers: [
    {provide: BASE_ROUTE, useValue: '/'},
  ],
})
export class RegisterModule {
  constructor() {}
}
