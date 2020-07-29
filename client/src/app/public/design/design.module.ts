import { NgModule } from '@angular/core';
import { DesignComponent } from './containers/design/design.component';
import { DesignRoutingModule } from './design-routing.module';

@NgModule({

  imports: [
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
