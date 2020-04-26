import { NgModule } from '@angular/core';
import {SharedModule} from '../../core/shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({

  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [],
  providers: [],
})
export class HomeModule {
  constructor() {}
}
