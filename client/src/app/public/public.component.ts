import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuitcaseService } from './services/suitcase.service';

@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styles: [':host {display: inline-block; width: 100%; height: 100%}'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [RouterOutlet],
    providers: [SuitcaseService],
})
export class PublicComponent {}
