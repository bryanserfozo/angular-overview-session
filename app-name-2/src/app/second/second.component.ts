import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  second = ""
  ngOnInit(httpClient : HttpClient) {
    this.second = "second"
    // https://angular.io/api/common/http/HttpClient
    // https://angular.io/guide/http
    // "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D"
  }
}
