import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  /*{
    path: '',
    title: 'Home page',
    component: AppComponent
  },*/
  {
    path: 'heroes',
    title: 'All heroes',
    component: HeroesComponent
  }
];
