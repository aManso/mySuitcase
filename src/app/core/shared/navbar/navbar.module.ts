import { NgModule } from '@angular/core';
import { NavBarComponent } from './containers/navbar.component';

@NgModule({
  imports: [
    NavBarComponent,
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
})
export class NavBarModule {
}
