import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../core/shared/shared.module';
import { BASE_ROUTE, RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
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
