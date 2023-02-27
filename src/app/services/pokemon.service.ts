import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemon } from '../models/IPokemon';
import { IPokemonResult, Sprites } from '../models/IPokemonResult';
import { Observable, Subject, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private httpClient: HttpClient) { }

  pokemon: IPokemon[] = [];
  pokemonSubject: Subject<IPokemon[]> = new Subject<IPokemon[]>();

  async search(name: string) {
    let options = new HttpHeaders().set('Content-Type', 'application/json')
    this.httpClient.get<IPokemonResult>(`https://pokeapi.co/api/v2/pokemon/${name}`, { headers: options })
      .pipe(
        catchError(this.errorHandler<IPokemonResult>('search'))
      ).subscribe((data) => {
        this.pokemon = [];

        let p: IPokemon = {
          sprite: data.sprites.front_default
        }
        
        this.pokemon.push(p);

        this.pokemonSubject.next(this.pokemon);
      });
  }

  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
