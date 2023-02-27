import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';

type Country = {
  capital: string;
  code: string;
  callingCode: string;
  currencyCodes: string[];
  flagImageUri: string;
  name: string;
  numRegions: number;
  wikiDataId: string;
};

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass'],
})
export class CountriesComponent {
  countryId: string = '';
  headers: HttpHeaders;
  country: Country | undefined;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set(
        'X-RapidAPI-Key',
        'fbd4193a19msh070d214481500e1p1b517cjsnc35b709e7001'
      )
      .set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com');
  }

  search(countryId: string) {
    this.http
      .get<any>(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryId}`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      )
      .subscribe((data) => {
        this.country = data.data;
      });
  }

  handleClick() {
    this.search(this.countryId);
  }
}
