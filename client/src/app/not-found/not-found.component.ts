import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'page-not-found',
    templateUrl: './not-found.component.html',
    styles: ['section:after {height: 0px}'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class NotFoundComponent{
}
