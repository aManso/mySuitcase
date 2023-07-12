import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CreateSuitcaseFormComponent } from './containers/create-suitcase-form/create-suitcase-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { OverviewComponent } from './containers/overview/overview.component';
import { RemoveDialogComponent } from "./containers/overview/dialog/remove-dialog.component";
import { MaxSuitcasesReachedDialogComponent } from "./containers/home/max-suitcases-reached-dialog/max-suitcases-reached-dialog.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

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
