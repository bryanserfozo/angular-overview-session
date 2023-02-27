import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.sass'],
})
export class CitiesComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set(
        'X-RapidAPI-Key',
        'fbd4193a19msh070d214481500e1p1b517cjsnc35b709e7001'
      )
      .set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com');

    this.http
      .get<any>(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities`, {
        headers,
      })
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
