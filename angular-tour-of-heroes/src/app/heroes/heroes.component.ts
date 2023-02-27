import { Component } from '@angular/core';
import {Hero} from '../hero'
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService:HeroService){}

  getHeros(): void{
    this.heroService.getHeros().subscribe(heroes=> this.heroes =heroes);
  }

  ngOnInit(): void{
    this.getHeros();
  }
  

  selectedHero?: Hero;
  onSelect(hero:Hero): void{
    this.selectedHero=hero;
  }
  

}
