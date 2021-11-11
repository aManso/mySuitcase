import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ROOT OF THE APPLICATION. The entire route system is pulled from here.
const routes: Routes = [
  // Lazy loading: just load the application modules as they are called. Only the necessary ones.
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./public/register/register.module').then(m => m.RegisterModule) },
  { path: '', redirectTo: 'public', pathMatch: 'full'},
  // Wildcard route for a 404 page
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
