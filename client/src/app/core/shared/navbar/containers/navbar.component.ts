import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent{

  public constructor(
    private _router: Router,
  ) {}

  public goTo(path: string) {
    this._router.navigate([path]);
  }
}
