import { Component } from '@angular/core';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  standalone: true, // !!!!!
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero ?: Hero;
  onSelect(hero : Hero) {
    this.selectedHero = hero;
  }
}
