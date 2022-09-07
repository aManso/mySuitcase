import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications-component/notifications.component';
import { NotificationsResolver } from './notifications-resolver';

// Root routes of this particular module: ADMIN.
const routes: Routes = [
  {
    path: '', component: NotificationsComponent, resolve: { notifications: NotificationsResolver},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
