import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AdminComponent implements OnInit{
  constructor() { }

  ngOnInit() { }
}
