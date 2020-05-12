import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NotFoundModule} from './not-found/not-found.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NotFoundModule
  ],
  // By exporting here any module will be available in the entire application.
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NotFoundModule,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
