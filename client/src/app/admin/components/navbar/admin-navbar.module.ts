import { NgModule } from '@angular/core';
import { AdminNavBarComponent } from './admin-navbar/admin-navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({

  imports: [
    RouterModule, // needed for routerLink in view
    CommonModule, // needed for async in view
    // Angular Material
    MatTooltipModule,
    MatIconModule,
  ],
  declarations: [
    AdminNavBarComponent,
  ],
  exports: [
    AdminNavBarComponent,
  ],
  providers: [],
})
export class AdminNavBarModule {
  constructor() {}
}
