import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-selector',
  templateUrl: './pokemon-selector.component.html',
  styleUrls: ['./pokemon-selector.component.css']
})
export class PokemonSelectorComponent implements OnInit {

  constructor(private pokeService: PokemonServiceService) { }

  ngOnInit(): void {
  }

  getRandomPokemon():void {
    console.log('raolsjhdkalushdb')
    let id = Math.floor(Math.random() * 151)
    this.pokeService.search(id)
  }

}
