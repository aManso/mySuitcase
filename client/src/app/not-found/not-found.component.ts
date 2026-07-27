import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-design',
    templateUrl: './not-found.component.html',
    styles: ['section:after {height: 0px}'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NotFoundComponent{
}
