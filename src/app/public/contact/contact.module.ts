import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../../core/shared/shared.module';
import { ContactComponent } from './containers/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactService } from './contact.service';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    // Angular Material
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  declarations: [
    ContactComponent
  ],
  exports: [],
  providers: [
    ContactService,
  ],
})
export class ContactModule {
  constructor() { }
}
