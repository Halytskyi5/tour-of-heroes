import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import {UpperCasePipe, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Location } from '@angular/common';
import {HeroService} from '../heroes/hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  imports: [
    UpperCasePipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  //@Input() hero?: Hero;
  hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
