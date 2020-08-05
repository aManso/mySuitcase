import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent{

  public constructor(
    private _router: Router,
  ) {}

  public goTo(path: string) {
    this._router.navigate([path]);
  }
}
