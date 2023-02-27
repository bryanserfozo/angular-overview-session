import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/Pokemon';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-wrapper',
  templateUrl: './pokemon-wrapper.component.html',
  styleUrls: ['./pokemon-wrapper.component.css']
})
export class PokemonWrapperComponent implements OnInit {

  pokemons: Observable<Pokemon[]> = new Observable<Pokemon[]>();

  constructor(private ps: PokemonServiceService) { }

  ngOnInit(): void {
    this.pokemons = this.ps.pokemonSubject;
  }

}
