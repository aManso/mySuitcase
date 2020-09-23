import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { SharedModule } from '../core/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { SuitcaseService } from './services/suitcase.service';

@NgModule({
  imports: [
    SharedModule,
    PublicRoutingModule,
  ],
  declarations: [
    PublicComponent,
  ],
  exports: [],
  providers: [
    SuitcaseService,
  ],
})
export class PublicModule {
  constructor() {}
}
