import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from 'src/app/core/const/languages';
import { ConfigService } from 'src/app/core/services/config.service';
import { FooterModule } from 'src/app/core/shared/footer/footer.module';
import { NavBarModule } from 'src/app/core/shared/navbar/navbar.module';

const PRESENTACION_VIDEO_EN_SRC = 'assets/video/presentation_EN.mp4';
const PRESENTACION_VIDEO_ES_SRC = 'assets/video/presentation_ES.mp4';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    NavBarModule,
    FooterModule,
  ]
})
export class AboutComponent implements OnInit {
  public videoSrc: string;

  constructor(
    private readonly _configService: ConfigService,
    private readonly _router: Router,
  ) { }

  public ngOnInit(): void {
      this.videoSrc = this._configService.getLocale() === Languages.es ? PRESENTACION_VIDEO_ES_SRC : PRESENTACION_VIDEO_EN_SRC;
  }

  public goToContact() {
    this._router.navigate(['/contact']);
  }

}
