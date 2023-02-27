import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private pokemonService: PokemonService) { }

  name: string = '';

  onSubmit(): void {
    console.log(this.name);
    this.pokemonService.search(this.name);
  }
}
