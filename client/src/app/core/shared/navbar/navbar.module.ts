import { NgModule } from '@angular/core';
import { NavBarComponent } from './containers/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({

  imports: [
    RouterModule, // needed for routerLink in view
    CommonModule, // needed for async in view
  ],
  declarations: [
    NavBarComponent,
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
})
export class NavBarModule {
  constructor() {}
}
