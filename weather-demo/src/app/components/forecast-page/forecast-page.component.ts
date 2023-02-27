import { Component } from '@angular/core';
import { IDailyForecast } from 'src/app/interfaces/IDailyForecast';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.css']
})
export class ForecastPageComponent {

  forecastedDays: Observable<IDailyForecast[]> = new Observable<IDailyForecast[]>();


  constructor(private ws:WeatherService){

  }

  ngOnInit(){
      this.forecastedDays = this.ws.daySubject;
  }

}
