import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UserDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
