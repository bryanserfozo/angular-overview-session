import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon, RootObject } from '../interfaces/Pokemon';
import { Subject, catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

    // Get the information for the forecasts
    pokemons: Pokemon[] = [];

    // Subject is a fancy observable which is a fancy promise, trust me don't worry about it right now
    pokemonSubject: Subject<Pokemon[]> = new Subject<Pokemon[]>();

    getPokemon(id:number):Observable<RootObject> {

      // We need to get ready for our api call
      let setHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json');
        // .set('X-RapidAPI-Key', '13b1eeb183msh58e9387b74bbd30p13f30ejsnf3d12efe8960')
        // .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

        // We need to make the actual request
        return this.http.get<RootObject>(`https://pokeapi.co/api/v2/pokemon/${id}`, {headers: setHeaders})
        .pipe(
          catchError((e) =>{
            return throwError(e);
          })
        )

    }

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
          id: data.id,
          name: data.name,
          weight: data.weight,
          height: data.height,
          imgSrc: data.sprites.other['official-artwork'].front_default
        }
        console.log(currentPokemon);
        this.pokemons.push(currentPokemon);
        this.pokemonSubject.next(this.pokemons)
      })

  }

  constructor(private http: HttpClient) { }
}
