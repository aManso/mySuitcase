import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { AuthorizationGuard } from './core/guards/authorization.guard';

// ROOT OF THE APPLICATION. The entire route system is pulled from here.
const routes: Routes = [
  // Lazy loading: just load the application modules as they are called. Only the necessary ones.
  {
    path: 'public',
    loadComponent: () => import('./public/public.component').then(m => m.PublicComponent),
    children: [
      { path: 'home', loadComponent: () => import('./public/home/containers/home/home.component').then(m => m.HomeComponent) },
      { path: 'create-suitcase', loadComponent: () => import('./public/create-suitcase/create-suitcase.component').then(m => m.CreateSuitcaseComponent), canActivate: [AuthenticationGuard] },
      { path: 'contact', loadComponent: () => import('./public/contact/containers/contact.component').then(m => m.ContactComponent) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    canActivateChild: [AuthenticationGuard, AuthorizationGuard],
    children: [
      { path: 'users', loadComponent: () => import('./admin/users/containers/users-list/users-list.component').then(m => m.UsersListComponent) },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
    ],
  },
  { path: 'login', loadComponent: () => import('./public/login/containers/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./public/register/containers/register.component').then(m => m.RegisterComponent) },
  { path: '', redirectTo: 'public', pathMatch: 'full'},
  { path: 'page-not-found', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
  // Wildcard route for a 404 page
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
