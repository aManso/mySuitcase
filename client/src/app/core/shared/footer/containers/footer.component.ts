import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
export class FooterComponent {
  private readonly _router = inject(Router);

  public goTo(path: string) {
    this._router.navigate([path]);
  }
}
