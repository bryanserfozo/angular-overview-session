import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
  ) {};

  currentPokemon = {
    id: 79,
    name: "",
    title: "Dopey Pokemon",
    description: "",
    flavorNameEntries: [],
  };

  ngOnInit(): void {
      this.pokemonService.getPokemon("slowpoke")
      .subscribe((resp) => {
        console.log(resp);
        this.currentPokemon.name = resp.name;
        this.pokemonService.getPokemonSpecies(resp.id)
        .subscribe((species) => {
          species.flavor_text_entries.forEach((entry) => {
            if (entry.language.name == "en") {
              console.log(entry.flavor_text);
              this.currentPokemon.description = entry.flavor_text;
            }
          })
        })
      });
  }
}
