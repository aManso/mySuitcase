import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { SharedModule } from '../core/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({

  imports: [
    SharedModule,
    PublicRoutingModule,
  ],
  declarations: [
    PublicComponent,
  ],
  exports: [],
  providers: [],
})
export class PublicModule {
  constructor() {}
}
