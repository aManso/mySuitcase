import { NgModule } from '@angular/core';
import { CreateSuitcaseRoutingModule } from './create-suitcase-routing.module';
import {CreateSuitcaseComponent} from './create-suitcase.component';

@NgModule({

  imports: [
    CreateSuitcaseRoutingModule,
  ],
  declarations: [
    CreateSuitcaseComponent,
  ],
  exports: [],
  providers: [],
})
export class CreateSuitcaseModule {
  constructor() {}
}
