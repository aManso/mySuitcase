import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CreateSuitcaseFormComponent } from "./containers/create-suitcase-form/create-suitcase-form.component";

@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    CreateSuitcaseFormComponent,
  ],
  exports: [],
  providers: [],
})
export class HomeModule {
  constructor() {}
}
