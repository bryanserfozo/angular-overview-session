import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';

type City = {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  elevationMeters: number;
  latitude: number;
  longitude: number;
  population: number;
  timezone: string;
  deleted: boolean;
};

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.sass'],
})
export class CitiesComponent {
  cityId: string = '';
  headers: HttpHeaders;
  city: City | undefined;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set(
        'X-RapidAPI-Key',
        'fbd4193a19msh070d214481500e1p1b517cjsnc35b709e7001'
      )
      .set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com');
  }

  search(cityId: string) {
    this.http
      .get<any>(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityId}`, {
        headers: this.headers,
      })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      )
      .subscribe((data) => {
        this.city = data.data;
      });
  }

  handleClick() {
    this.search(this.cityId);
  }
}
