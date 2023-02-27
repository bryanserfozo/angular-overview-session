import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private url: string = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  private apiKey: string = "2a64fd1824msh30fd3c20ca1d592p12e7d7jsn9fe5c0170a5f"


   constructor(private http: HttpClient) { }


   public translate(query:String):Observable<String>{

    console.log("checking if this works?")
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.post<String>(this.url, query, {headers});
   }
}
