import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavBarComponent } from '../../../core/shared/navbar/containers/navbar.component';
import { FooterComponent } from '../../../core/shared/footer/containers/footer.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [NavBarComponent, FooterComponent],
})
export class ContactComponent {
}
