import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { BASE_ROUTE, RegisterComponent } from './containers/register/register.component';
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
