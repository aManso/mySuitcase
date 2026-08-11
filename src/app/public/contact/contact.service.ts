import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SimpleOutput } from '../../core/models/shared';

@Injectable()
export class ContactService {
  private readonly URL_CONTACT = environment.apiUrl + 'contact/';
  private readonly http = inject(HttpClient);

  public contact(contactRequest: any): Observable<SimpleOutput> {
    return this.http.post(this.URL_CONTACT, contactRequest) as Observable<SimpleOutput>;
  }
}
