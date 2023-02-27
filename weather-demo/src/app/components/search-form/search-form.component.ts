import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  searchLocation:string='';

  onSubmit():void{
    console.log("Form submitted!");
    console.log(this.searchLocation);

    this.ws.search(this.searchLocation);
  }

  constructor(private ws:WeatherService){}

}
