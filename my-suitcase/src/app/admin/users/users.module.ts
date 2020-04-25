import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared/shared.module';
// import { AdminRoutingModule } from '.././admin-routing.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './containers/users-list/users-list.component';
// import { UserDetailComponent } from './containers/user-detail/user-detail.component';

@NgModule({

  imports: [
    SharedModule,
    // AdminRoutingModule,
    UsersRoutingModule,
  ],
  declarations: [
    UsersListComponent,
    // UserDetailComponent,
  ],
  exports: [],
  providers: [],
})
export class UsersModule {
  constructor() {}
}
