import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
export class UserDetailComponent {
}
