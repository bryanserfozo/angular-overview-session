import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISimilarToResults } from '../interfaces/ISimilarToResults';

@Injectable({
  providedIn: 'root'
})
export class SimilarToService {

  async search(location: string) {

    let setHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('X-RapidAPI-Key', '6748543fb6msh9731801f9ab885fp134d43jsnfbe220e50fb1')
		    .set('X-RapidAPI-Host', 'wordsapiv1.p.rapidapi.com');

        this.http.get<ISimilarToResults>(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`, {headers: setHeaders})
        .pipe(
          catchError((e) =>{
            return throwError(e);
          })
        ).subscribe((data) => {
          console.log(data);
  }



  constructor() { }
}
