import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styles: [':host {display: inline-block; width: 100%; height: 100%}'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PublicComponent {}
