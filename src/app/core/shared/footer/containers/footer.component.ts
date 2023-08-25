import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public fullYear: string;

  public constructor(
    private readonly _router: Router,
  ) {
    this.fullYear = new Date().getFullYear().toString();
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }
}
