import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {NotFoundComponent} from './core/shared/not-found/containers/not-found/not-found.component';

// ROOT OF THE APPLICAITON. The entire route system is pulled from here.
const routes: Routes = [
  { path: '', redirectTo: 'public/home', pathMatch:'full'},
  // Lazy loading: just load the application modules as they are called. Only the necessary ones.
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // Example: { path: 'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule) },
  // { path: '**', redirectTo: 'public/home' },
  // Wildcard route for a 404 page
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
