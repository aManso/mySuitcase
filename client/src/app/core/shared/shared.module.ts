import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterModule } from './footer/footer.module';
import { NavBarModule } from './navbar/navbar.module';
import { PwaInstallerComponent } from './pwa-installer/pwa-installer.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    PwaInstallerComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavBarModule,
    FooterModule,
    PwaInstallerComponent,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
