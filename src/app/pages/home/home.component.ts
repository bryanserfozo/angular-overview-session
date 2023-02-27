import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from 'src/app/models/IPokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private pokemonService: PokemonService) { }

  pokemonObservable: Observable<IPokemon[]> = new Observable<IPokemon[]>();

  ngOnInit() {
    console.log(this.pokemonObservable);
    this.pokemonObservable = this.pokemonService.pokemonSubject;
  }
}
