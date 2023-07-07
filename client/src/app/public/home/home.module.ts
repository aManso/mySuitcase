import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CreateSuitcaseFormComponent } from './containers/create-suitcase-form/create-suitcase-form.component';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { OverviewComponent } from './containers/overview/overview.component';
import { RemoveDialogComponent } from "./containers/overview/dialog/remove-dialog.component";
import { MaxSuitcasesReachedDialogComponent } from "./containers/home/max-suitcases-reached-dialog/max-suitcases-reached-dialog.component";
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

@NgModule({

  imports: [
    // Angular
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    // App
    HomeRoutingModule,
    SharedModule,
    // Angular Material
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSnackBarModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    CreateSuitcaseFormComponent,
    OverviewComponent,
    RemoveDialogComponent,
    MaxSuitcasesReachedDialogComponent,
  ],
  exports: [],
  providers: [],
})
export class HomeModule {
  constructor() {}
}
