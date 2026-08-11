import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
export class FooterComponent implements OnInit {
  public fullYear: string;
  private readonly _router = inject(Router);

  ngOnInit(): void {
    this.fullYear = new Date().getFullYear().toString();
  }

  public goTo(path: string) {
    this._router.navigate([path]);
  }
}
