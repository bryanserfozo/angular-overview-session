import { Component, Input } from '@angular/core';
import { IPokemon } from 'src/app/models/IPokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemon: IPokemon = {
    sprite: ''
  }
}
