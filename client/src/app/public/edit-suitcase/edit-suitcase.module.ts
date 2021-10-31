import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';
import { ContactComponent } from './containers/contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
  ],
  declarations: [
    ContactComponent
  ],
  exports: [],
  providers: [],
})
export class ContactModule {
  constructor() { }
}
