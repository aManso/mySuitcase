import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ROOT OF THE APPLICAITON. The entire route system is pulled from here.
const routes: Routes = [
  { path: '', redirectTo: 'public/home', pathMatch:'full'},
  // Lazy loading: just load the application modules as they are called. Only the necessary ones.
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // Example: { path: 'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
