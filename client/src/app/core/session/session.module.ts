import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS as MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { TimeoutDialogComponent } from './timeout-dialog/timeout-dialog.component';
import { SessionService, SessionServiceConfig } from './session.service';

@NgModule({
    imports: [CommonModule, MatDialogModule],
    declarations: [TimeoutDialogComponent],
    exports: [TimeoutDialogComponent],
    providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }]
})
export class SessionModule {
  constructor(@Optional() @SkipSelf() parentModule?: SessionModule) {
    if (parentModule) {
      throw new Error(
        'SessionModule is already loaded. Import it in the PublicModule or AdminModule only');
    }
  }

  // This way if sessionModule is used by other modules, SessionServiceConfig will still be created once, as it keeps as
  // singleton. MAT_DIALOG_DEFAULT_OPTIONS that has been set in the providers of the module, can create several instances
  static forRoot(config: SessionServiceConfig): ModuleWithProviders<SessionModule> {
    return {
      ngModule: SessionModule,
      providers: [
        SessionService,
        {provide: SessionServiceConfig, useValue: config }
      ]
    };
  }

  static forChild(config: SessionServiceConfig): ModuleWithProviders<SessionModule> {
    return {
      ngModule: SessionModule,
      providers: [
        SessionService,
        {provide: SessionServiceConfig, useValue: config }
      ]
    };
  }
}
