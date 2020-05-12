import { NgModule } from '@angular/core';
import {SharedModule} from '../../core/shared/shared.module';
import { DesignComponent } from './containers/home/design.component';
import { DesignRoutingModule } from './design-routing.module';

@NgModule({

  imports: [
    SharedModule,
    DesignRoutingModule,
  ],
  declarations: [
    DesignComponent,
  ],
  exports: [],
  providers: [],
})
export class DesignModule {
  constructor() {}
}
