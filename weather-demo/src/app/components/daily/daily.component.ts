import { Component, Input } from '@angular/core';
import { IDailyForecast } from 'src/app/interfaces/IDailyForecast';

@Component({
  selector: 'daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {

  @Input() dayInputted:IDailyForecast ={
    date:"",
    min:0,
    max:0,
    humidity: 0
  }

}
