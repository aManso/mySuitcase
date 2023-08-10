import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coordinates } from '../../../../core/models/trip';
import { environment } from '../../../../../environments/environment';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'my-suitcase-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.scss']
})
export class WeatherPanelComponent implements OnInit {

  @Input() coordinates: Coordinates;
  @Input() weatherDays: number;

  public weatherIsReady: boolean;
  public weatherData: any;
  // It retrieves the daily forecast for the next 5 days
  private readonly URL_WEATHER_API = environment.apiUrl + 'weather';

  constructor(
    private _http: HttpClient,
    private readonly _changeDetector: ChangeDetectorRef,
    private readonly _configService: ConfigService,
  ) {
  }

  public ngOnInit() {
    const url = this.URL_WEATHER_API + '?lat='+this.coordinates.lat.toString()+'&lon='+this.coordinates.lng.toString()+'&lan='+this.getLanguage(this._configService.getLocale());
    this._http.get(url).subscribe((response: any) => {
      this._parseData(response);
    }, (error) => {
      console.log(error);
      if (!environment.production) {
        // TODO just for testing;
        const mockResponse = this.buildMockWeather();
        this._parseData(mockResponse);
      }
    })
  }

  private getLanguage(locale: string): string {
    return locale.substring(0, 2);
  }

  private _parseData(data: any) {
    this.weatherIsReady = !!data;
    this.weatherData = data;
    this.weatherData.daily = data.daily.splice(0, this.weatherDays);
    this.weatherData.daily.forEach((dailyWeather: any) => {
      dailyWeather.dayOfMonth = new Date(parseInt(dailyWeather.dt + '000')).getDate();
      const sunriseTime = new Date(parseInt(dailyWeather.sunrise + '000'));
      dailyWeather.sunrise = sunriseTime.getHours() + ':' + sunriseTime.getMinutes();
      const sunsetTime = new Date(parseInt(dailyWeather.sunset + '000'));
      dailyWeather.sunset = sunsetTime.getHours() + ':' + sunsetTime.getMinutes();
    });
    this._changeDetector.detectChanges();
  }

  private buildMockWeather() {
    return {lat:36.72,lon:-4.42,timezone:'Europe/Madrid',timezone_offset:7200,daily:[
      {dt:1599393600,sunrise:1599371589,sunset:1599417546,temp:{day:299.24,min:295.58,max:299.24,night:295.58,eve:298.54,morn:299.24},feels_like:{day:300.78,night:297.24,eve:300.35,morn:300.78},pressure:1015,humidity:69,dew_point:293.11,wind_speed:3.04,wind_deg:146,weather:[{id:801,main:'Clouds',description:'few clouds',icon:'02d'}],clouds:20,pop:0,uvi:8.02},
        {dt:1599480000,sunrise:1599458036,sunset:1599503857,temp:{day:300.85,min:294.59,max:300.85,night:295.29,eve:298.14,morn:294.59},feels_like:{day:300.92,night:296.78,eve:299.2,morn:296.39},pressure:1015,humidity:51,dew_point:289.8,wind_speed:3.09,wind_deg:161,weather:[{id:800,main:'Clear',description:'clear sky',icon:'01d'}],clouds:0,pop:0,uvi:7.61},
        {dt:1599566400,sunrise:1599544484,sunset:1599590168,temp:{day:298.26,min:295.2,max:298.8,night:295.2,eve:297,morn:295.74},feels_like:{day:296.38,night:295.64,eve:296.93,morn:297.69},pressure:1018,humidity:61,dew_point:290.43,wind_speed:6.11,wind_deg:127,weather:[{id:500,main:'Rain',description:'light rain',icon:'10d'}],clouds:71,pop:0.46,rain:1.07,uvi:7.31},
        {dt:1599652800,sunrise:1599630931,sunset:1599676478,temp:{day:299.12,min:293.48,max:299.12,night:294.7,eve:297.17,morn:293.48},feels_like:{day:297.88,night:295.03,eve:297.25,morn:294.27},pressure:1019,humidity:49,dew_point:287.85,wind_speed:3.78,wind_deg:148,weather:[{id:800,main:'Rain',description:'very heavy rain',icon:'10d'}],clouds:1,pop:0,uvi:7.4},
        {dt:1599739200,sunrise:1599717378,sunset:1599762788,temp:{day:301.24,min:294.3,max:301.24,night:295.82,eve:298.54,morn:294.3},feels_like:{day:299.55,night:295.99,eve:298.63,morn:294.24},pressure:1016,humidity:37,dew_point:285.27,wind_speed:3.3,wind_deg:155,weather:[{id:800,main:'Rain',description:'shower rain',icon:'10d'}],clouds:0,pop:0,uvi:7.57},
        {dt:1599825600,sunrise:1599803825,sunset:1599849097,temp:{day:301.21,min:294.74,max:301.21,night:295.29,eve:298.71,morn:294.74},feels_like:{day:299.46,night:297.26,eve:299.14,morn:294.16},pressure:1011,humidity:40,dew_point:286.5,wind_speed:3.92,wind_deg:137,weather:[{id:802,main:'Snow',description:'snow',icon:'03d'}],clouds:25,pop:0,uvi:7.1},
        // {dt:1599912000,sunrise:1599890273,sunset:1599935406,temp:{day:301.46,min:294.71,max:301.46,night:297.07,eve:299.45,morn:294.71},feels_like:{day:300.65,night:298.3,eve:300.19,morn:295.63},pressure:1014,humidity:41,dew_point:287.02,wind_speed:2.86,wind_deg:172,weather:[{id:804,main:'Thunderstorm',description:'thunderstorm',icon:'04d'}],clouds:95,pop:0,uvi:7.32},
        {dt:1599998400,sunrise:1599976720,sunset:1600021715,temp:{day:300.87,min:296.87,max:301.18,night:297.67,eve:299.01,morn:296.87},feels_like:{day:300.73,night:298.94,eve:299.75,morn:297.34},pressure:1018,humidity:50,dew_point:289.75,wind_speed:3.23,wind_deg:160,weather:[{id:804,main:'Clouds',description:'overcast clouds',icon:'04d'}],clouds:100,pop:0.1,uvi:7.38}
        ]};
  }
}
