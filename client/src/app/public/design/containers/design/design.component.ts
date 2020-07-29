import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
})
export class DesignComponent{

  public constructor(
    private _router: Router,
  ) {}

  public goTo(path: string) {
    this._router.navigate([path]);
  }
}
