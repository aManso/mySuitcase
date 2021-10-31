import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { FooterComponent } from './footer/containers/footer.component';

import {FooterModule} from './footer/footer.module';
import {NavBarModule} from './navbar/navbar.module';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavBarModule,
    FooterModule,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
