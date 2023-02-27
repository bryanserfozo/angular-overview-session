import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {


  @Input() pokemon:Pokemon ={
    id: 1,
    name: 'Ditto',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', // .other.official-artwork.front_default
    weight: 340, // .weight
    height: 3 // .height
  }

  // pokemon:Pokemon = {
  //   name: 'Ditto',
  //   imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', // .other.official-artwork.front_default
  //   weight: 340, // .weight
  //   height: 3 // .height
  // };

  constructor() { }

  ngOnInit(): void {
  }

  goToPokemonIndex():void {

  }

}
