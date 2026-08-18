import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../../core/shared/navbar/containers/navbar.component';
import { FooterComponent } from '../../../core/shared/footer/containers/footer.component';

import { EXTENDED_SNACKBAR_TIME, MAX_EMAIL_LENGTH, MAX_MESSAGE_LENGTH, MAX_NAME_LENGTH, MIN_MESSAGE_LENGTH } from '../../../core/config/config';
import { BACKEND_ERRORS, BACKEND_ERROR_TYPES } from '../../../core/const/backend-errors';
import { FRONTEND_ERRORS } from '../../../core/const/frontend-errors';
import { FRONTEND_MESSAGES } from '../../../core/const/frontend-messages';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NavBarComponent, FooterComponent],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  private readonly _contactService: ContactService = inject(ContactService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly _router: Router = inject(Router);

  ngOnInit() {
    this.contactForm = this._setContactForm();
  }

  private _setContactForm() {
    return this._fb.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(MAX_NAME_LENGTH)])],
      message: [null, Validators.compose([Validators.required, Validators.minLength(MIN_MESSAGE_LENGTH), Validators.maxLength(MAX_MESSAGE_LENGTH)])],
      email: [null, Validators.compose([Validators.required, Validators.email, Validators.maxLength(MAX_EMAIL_LENGTH)])],
      subject: [null, Validators.compose([Validators.required, Validators.maxLength(MAX_NAME_LENGTH)])],
    });
  }

  public isValidForm(): boolean {
    return this.contactForm.valid;
  }

  public submit() {
    if (this.isValidForm()) {
      this._contactService.contact(this.contactForm.value).subscribe({
        next: () => {
            this._snackBar.open(FRONTEND_MESSAGES.CONFIRMATION_CONTACT_MSG_SENT.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['success-snackbar']});
            this._router.navigate(['/login'])
        },
        error: (error: any) => {
          if (error.error === BACKEND_ERROR_TYPES.MISSING_FIELDS) {
            this._snackBar.open(BACKEND_ERRORS.MISSING_FIELDS.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['error-snackbar']});
          } else {
            this._showGeneralError();
          }
        }
      });
    }
  }

  private _showGeneralError() {
    this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: EXTENDED_SNACKBAR_TIME, panelClass: ['error-snackbar']});
  }
}
