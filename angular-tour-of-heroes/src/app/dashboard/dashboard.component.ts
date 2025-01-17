import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../heroes/hero.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  heroes : Hero[] = [];
  constructor(private heroService : HeroService) {
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.filter(hero => hero.id < 3));
  }

}
