import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  baseUrl: String = "https://pokeapi.co/api/v2/";
  // currentPokemon: Pokemon;

  public getPokemon(pokemon: String): Observable<any> {
    return this.http.get<any>(this.baseUrl + "pokemon/" + pokemon);
  }

  public getPokemonSpecies(pokemonId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + "pokemon-species/" + pokemonId);
  }
}
