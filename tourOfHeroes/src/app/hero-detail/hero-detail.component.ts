import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../Hero'
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{

  hero: Hero | undefined;

  constructor(
    private route:ActivatedRoute,
    private heroService: HeroService,
    private location:Location
  ) {}

  ngOnInit() : void{
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    console.log(this.hero);
  }

  goBack(): void{
    this.location.back();
  }
}