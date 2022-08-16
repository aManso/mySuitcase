import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';
import { EditSuitcaseComponent } from './containers/edit-suitcase.component';
import { EditSuitcaseRoutingModule } from './edit-suitcase-routing.module';

@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    EditSuitcaseRoutingModule,
  ],
  declarations: [
    EditSuitcaseComponent
  ],
  exports: [],
  providers: [],
})
export class EditSuitcaseModule {
  constructor() { }
}
