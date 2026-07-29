import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { FooterComponent } from './footer/containers/footer.component';

import {FooterModule} from './footer/footer.module';
import { NavBarComponent } from './navbar/containers/navbar.component';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavBarComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavBarComponent,
    FooterModule,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
