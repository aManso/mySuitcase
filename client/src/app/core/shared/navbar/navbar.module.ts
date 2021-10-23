import { NgModule } from '@angular/core';
import { NavBarComponent } from './containers/navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({

  imports: [
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
