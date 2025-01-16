import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import {UpperCasePipe, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
  @Input() hero?: Hero;
}
