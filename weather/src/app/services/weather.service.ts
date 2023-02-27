import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forcast } from '../models/forcast';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { RootObject } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //private baseUrl: string = "https://weatherapi-com.p.rapidapi.com/forecast.json";
  private forcastResp : Observable<RootObject>;
  

  constructor(private http: HttpClient) {}

  // this is currently broken since I need to modle the data
  public getForcast(searchText: string): Observable<Forcast[]> {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchText}&days=3`
    forcast: Forcast;
    forcastResp : Observable<RootObject>;
    
    forcastResp = this.http.get<RootObject>(url, {headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }}).pipe(
      catchError(this.handleError<RootObject>('getReq'))
    );

    
    
  }

  // error handling for failed post
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
