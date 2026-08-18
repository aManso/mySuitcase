import { Component, OnInit, ChangeDetectorRef, inject, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coordinates } from '../../../../core/models/trip';
import { environment } from '../../../../../environments/environment';
import { ConfigService } from '../../../../core/services/config.service';
import { maxAllowedDaysInAPI, OPEN_METEO_WEATHER_CODE_MAP, OpenMeteoWeatherCode, WeatherOutput } from '../../../../core/models/open-meteo-weather';

@Component({
  selector: 'my-suitcase-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.scss'],
  standalone: true,
})
export class WeatherPanelComponent implements OnInit {
  readonly coordinates = input.required<Coordinates>();
  // Number of days from the current date to the start date of the trip
  readonly startWeatherDays = input<number>(0);
  // Number of days of the trip
  readonly weatherDays = input<number>(maxAllowedDaysInAPI);

  public weatherIsReady: boolean;
  public weatherData: WeatherOutput;
  // It retrieves the daily forecast for the next 5 days
  private readonly URL_WEATHER_API = environment.apiUrl + 'weather';
  private readonly _changeDetector = inject(ChangeDetectorRef);
  private readonly _http = inject(HttpClient);
  private readonly _configService = inject(ConfigService);

  public ngOnInit() {
    const coordinates = this.coordinates();
    const url = this.URL_WEATHER_API + '?lat='+coordinates.lat.toString()+'&lon='+coordinates.lng.toString()+'&lan='+this.getLanguage(this._configService.getLocale());
    this._http.get<WeatherOutput>(url).subscribe({
      next: (response: WeatherOutput) => {
        this._parseData(response);
      },
      error: (error: unknown) => {
        console.log(error);
      }
    })
  }

  private getLanguage(locale: string): string {
    return locale.substring(0, 2);
  }

  private _parseData(data: WeatherOutput) {
    const weatherDays = this.weatherDays();
    this.weatherIsReady = !!data;
    this.weatherData = data;
    this.weatherData = this._spliceTripForecastData(data);
    this.weatherData.daily.weather_code_object = this._setWeatherCodes(this.weatherData.daily.weather_code);

    // this.weatherData.daily.forEach((dailyWeather: any) => {
    //   dailyWeather.dayOfMonth = new Date(parseInt(dailyWeather.dt + '000')).getDate();
    //   const sunriseTime = new Date(parseInt(dailyWeather.sunrise + '000'));
    //   dailyWeather.sunrise = sunriseTime.getHours() + ':' + sunriseTime.getMinutes();
    //   const sunsetTime = new Date(parseInt(dailyWeather.sunset + '000'));
    //   dailyWeather.sunset = sunsetTime.getHours() + ':' + sunsetTime.getMinutes();
    // });
    this._changeDetector.detectChanges();
  }

  private _spliceTripForecastData(data: WeatherOutput): WeatherOutput {
    data.daily.time = data.daily.time.slice(this.startWeatherDays(), this.startWeatherDays() + this.weatherDays());
    data.daily.time.forEach((time: string, index: number) => {
      const date = new Date(time);
      data.daily.time[index] = date.getDate().toString();
    });
    data.daily.sunset = data.daily.sunset.slice(this.startWeatherDays(), this.startWeatherDays() + this.weatherDays());
    data.daily.sunrise = data.daily.sunrise.slice(this.startWeatherDays(), this.startWeatherDays() + this.weatherDays());
    data.daily.sunrise.forEach((sunrise: string, index: number) => {
      const sunriseDate = new Date(sunrise);
      const sunsetDate = new Date(data.daily.sunset[index]);
      data.daily.sunrise[index] = sunriseDate.getHours() + ':' + sunriseDate.getMinutes();
      data.daily.sunset[index] = sunsetDate.getHours() + ':' + sunsetDate.getMinutes();  
    });
    data.daily.weather_code = data.daily.weather_code.slice(this.startWeatherDays(), this.startWeatherDays() + this.weatherDays());
    data.daily.temperature_2m_max = data.daily.temperature_2m_max.slice(this.startWeatherDays(), this.startWeatherDays() + this.weatherDays());
    data.daily.temperature_2m_min = data.daily.temperature_2m_min.slice(this.startWeatherDays(), this.startWeatherDays() + this.weatherDays());
    data.daily.precipitation_probability_max = data.daily.precipitation_probability_max.slice(this.startWeatherDays(), this.startWeatherDays() + this.weatherDays());
    return data;
  }

  private _setWeatherCodes(weatherCodes: number[]): OpenMeteoWeatherCode[] {
    return weatherCodes.map(code => OPEN_METEO_WEATHER_CODE_MAP[code as number]);
  }
}
