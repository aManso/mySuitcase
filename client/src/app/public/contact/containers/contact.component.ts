import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ContactComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
  }
}
