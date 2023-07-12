import { NgModule } from '@angular/core';
import { CreateSuitcaseRoutingModule } from './create-suitcase-routing.module';
import { CreateSuitcaseComponent } from './create-suitcase.component';
import { WeatherPanelModule } from './components/weather-panel/weather-panel.module';
import { CommonModule } from '@angular/common';
import { MatInputModule as MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { SaveDialogComponent } from "./components/dialog/save-dialog.component";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS as MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    // App
    SharedModule,
    CreateSuitcaseRoutingModule,
    WeatherPanelModule,
    MatInputModule,
    // Angular Material
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  declarations: [
    CreateSuitcaseComponent,
    SaveDialogComponent,
    ItemListComponent,
  ],
  exports: [],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
})
export class CreateSuitcaseModule {
  constructor() {}
}
