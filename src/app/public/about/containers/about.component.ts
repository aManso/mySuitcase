import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from '../../../core/const/languages';
import { ConfigService } from '../../../core/services/config.service';
import { FooterComponent } from '../../../core/shared/footer/containers/footer.component';
import { NavBarComponent } from '../../../core/shared/navbar/containers/navbar.component';

const PRESENTACION_VIDEO_EN_SRC = 'assets/video/presentation_EN.mp4';
const PRESENTACION_VIDEO_ES_SRC = 'assets/video/presentation_ES.mp4';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
  ]
})
export class AboutComponent implements OnInit {
  public videoSrc: string;
  private readonly _configService = inject(ConfigService);
  private readonly _router = inject(Router);

  public ngOnInit(): void {
      this.videoSrc = this._configService.getLocale() === Languages.es ? PRESENTACION_VIDEO_ES_SRC : PRESENTACION_VIDEO_EN_SRC;
  }

  public goToContact() {
    this._router.navigate(['/contact']);
  }

}
