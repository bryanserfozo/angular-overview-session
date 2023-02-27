import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon, RootObject } from '../interfaces/Pokemon';
import { Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

    // Get the information for the forecasts
    pokemons: Pokemon[] = [];

    // Subject is a fancy observable which is a fancy promise, trust me don't worry about it right now
    pokemonSubject: Subject<Pokemon[]> = new Subject<Pokemon[]>();

  async search(id:number) {

    // We need to get ready for our api call
    let setHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
      // .set('X-RapidAPI-Key', '13b1eeb183msh58e9387b74bbd30p13f30ejsnf3d12efe8960')
		  // .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

      // We need to make the actual request
      this.http.get<RootObject>(`https://pokeapi.co/api/v2/pokemon/${id}`, {headers: setHeaders})
      .pipe(
        catchError((e) =>{
          return throwError(e);
        })
      ).subscribe((data) => {
        console.log(data);
        let currentPokemon:Pokemon = {
          name: data.name,
          weight: data.weight,
          height: data.height,
          imgSrc: data.sprites.other['official-artwork'].front_default
        }
        console.log(currentPokemon);

        // // Clear the existing values from the array
        // this.forecastedDays = [];

        // // We need to add the data to the subject
        // let days: Forecastday[] = data.forecast.forecastday;
        // // Strip each day of the necessary info and add that info to my array
        // for (let i = 0; i< days.length; i++){
        //   // Define a template object
        //   let forecastedDay: IDailyForecast = {date:'', min:0, max: 0, humidity:0}
        //   // Update values
        //   forecastedDay.max = days[i].day.maxtemp_f;
        //   forecastedDay.min= days[i].day.mintemp_f;
        //   forecastedDay.date = days[i].date;
        //   forecastedDay.humidity = days[i].day.avghumidity;
        //   // Add object to array
        //   this.forecastedDays.push(forecastedDay);
        // }
        // // Send out message to all subscribers that array has been updated
        // // Special method for subjects called next();
        // this.daySubject.next(this.forecastedDays);
        this.pokemons.push(currentPokemon);
        this.pokemonSubject.next(this.pokemons)
      })

  }

  constructor(private http: HttpClient) { }
}
