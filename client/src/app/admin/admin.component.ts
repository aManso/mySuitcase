import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [RouterOutlet],
})
export class AdminComponent {
}
