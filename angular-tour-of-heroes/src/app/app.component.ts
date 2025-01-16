import { Component } from '@angular/core';
import { HeroesComponent} from './heroes/heroes.component';

@Component({
  standalone: true, // !!!!!
  selector: 'app-root',
  imports:[HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
