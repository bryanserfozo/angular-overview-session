import { Component } from '@angular/core';
import {Hero} from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService:HeroService, private messageService:MessageService){}
  
  ngOnInit(): void{
    this.getHeros();
  }

  onSelect(hero:Hero): void{
    this.selectedHero=hero;
    this.messageService.add(`HeroesComponent: Select hero id=${hero.id}`)
  }

  getHeros(): void{
    this.heroService.getHeros().subscribe(heroes=> this.heroes =heroes);
  }

}
