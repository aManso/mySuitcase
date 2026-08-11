import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailResolver } from './core/resolvers/detail-resolver';
import { LoginService } from './core/login/login.service';
import { RegisterResolver } from './public/register/register-resolver';
import { AuthorizationGuard } from './core/guards/authorization.guard';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { SettingsResolver } from './core/resolvers/settings-resolver';

// ROOT OF THE APPLICATION. The entire route system is pulled from here.
const routes: Routes = [
  // Lazy loading: just load the application modules or components as they are called. Only the necessary ones.
  {
    path: '',
    loadComponent: () => import('./public/public.component').then(c => c.PublicComponent),
    children: [
      { path: 'home', loadComponent: () => import('./public/home/containers/home/home.component').then(c => c.HomeComponent) },
      { path: 'create-suitcase', data: { createMode: true }, loadComponent: () => import('./public/create-suitcase/create-suitcase.component').then(c => c.CreateSuitcaseComponent) },
      { path: 'edit-suitcase/:name', resolve: { detail: DetailResolver }, data: { createMode: false }, loadComponent: () => import('./public/create-suitcase/create-suitcase.component').then(c => c.CreateSuitcaseComponent) },
      { path: 'about', loadComponent: () => import('./public/about/containers/about.component').then(c => c.AboutComponent) },
      { path: 'contact', loadComponent: () => import('./public/contact/containers/contact.component').then(c => c.ContactComponent) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { 
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent),
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    canActivateChild: [AuthenticationGuard, AuthorizationGuard],
    children: [
      { path: 'users', loadComponent: () => import('./admin/users/containers/users-list/users-list.component').then(c => c.UsersListComponent) },
      { path: 'notifications', loadChildren: () => import('./admin/notifications/notifications.module').then(m => m.NotificationsModule) },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
    ],
  },
  { path: 'login', loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule) },
  {
    path: 'register',
    loadComponent: () => import('./public/register/register-wrapper.component').then(c => c.RegisterWrapperComponent),
    providers: [LoginService, RegisterResolver],
    children: [
      { path: '', loadComponent: () => import('./public/register/containers/register.component').then(c => c.RegisterComponent) },
      { path: 'confirm', pathMatch: 'prefix', resolve: { confirmRegistration: RegisterResolver }, loadComponent: () => import('./public/register/containers/confirm-register.component').then(c => c.ConfirmRegisterComponent) },
    ],
  },
  { path: 'settings', resolve: { user: SettingsResolver}, loadComponent: () => import('./core/settings/containers/settings.component').then(c => c.SettingsComponent) }, 
  { path: 'page-not-found', loadComponent: () => import('./core/shared/not-found/not-found.component').then(c => c.NotFoundComponent) },
  // Wildcard route for a 404 page
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports:    [RouterModule.forRoot(routes, {useHash: false})],
  exports:    [RouterModule],
})
export class AppRoutingModule { }
