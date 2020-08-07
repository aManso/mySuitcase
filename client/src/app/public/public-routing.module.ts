import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

// Root routes of this particular module: PUBLIC.
const routes: Routes = [
  // This module has its own children. Be careful with redirection.
    { path: '', component: PublicComponent, children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'design', loadChildren: () => import('./design/design.module').then(m => m.DesignModule) },
      { path: 'create-suitcase', loadChildren: () => import('./create-suitcase/create-suitcase.module').then(m => m.CreateSuitcaseModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
