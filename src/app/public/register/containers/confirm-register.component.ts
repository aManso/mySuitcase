import { Component, OnInit, InjectionToken } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { EXTENDED_SNACKBAR_TIME } from 'src/app/core/config/config';
import { FRONTEND_ERRORS } from 'src/app/core/const/frontend-errors';
import { FRONTEND_MESSAGES } from 'src/app/core/const/frontend-messages';

export const BASE_ROUTE = new InjectionToken<string[]>('BASE_ROUTE');

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
})
export class ConfirmRegisterComponent implements OnInit{

  public constructor(
    private readonly _snackBar: MatSnackBar,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {}
 
  /**
   * It retrieves a token as confirmRegistration from the resolver, otherwise so error
   */
  public ngOnInit() {
    this._activatedRoute.snapshot.data.confirmRegistration ? 
      this._showRegistrationComplete() : this._showRegistrationError();
    this._router.navigate(['/login']);
  }

  private _showRegistrationComplete() {
    this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_REGISTRATION.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['success-snackbar']});
  }

  private _showRegistrationError() {
    this._snackBar.open(FRONTEND_ERRORS.ERROR_REGISTRATION.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['error-snackbar']});
  }

}
