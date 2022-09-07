import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { AuthorizationGuard } from '../core/guards/authorization.guard';

// Root routes of this particular module: ADMIN.
const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
    ], canActivate: [AuthenticationGuard, AuthorizationGuard], canActivateChild: [AuthenticationGuard, AuthorizationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
