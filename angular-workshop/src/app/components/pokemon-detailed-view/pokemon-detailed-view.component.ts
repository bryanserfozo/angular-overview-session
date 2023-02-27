import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/Pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detailed-view',
  templateUrl: './pokemon-detailed-view.component.html',
  styleUrls: ['./pokemon-detailed-view.component.css']
})
export class PokemonDetailedViewComponent implements OnInit {

    // pokemons: Observable<Pokemon[]> = new Observable<Pokemon[]>();
  // index: Observable<number> = new Observable<number>();

  pokemon?:Pokemon

  constructor(private ps: PokemonServiceService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.ps.getPokemon(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data => {
      this.pokemon = {
        id: data.id,
        name: data.name,
        weight: data.weight,
        height: data.height,
        imgSrc: data.sprites.other['official-artwork'].front_default
      }
    })
  }
}
