import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ROOT OF THE APPLICATION. The entire route system is pulled from here.
const routes: Routes = [
  // Lazy loading: just load the application modules as they are called. Only the necessary ones.
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
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
