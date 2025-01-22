import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from 'rxjs';
import {Hero} from '../hero';
import {HeroService} from '../heroes/hero.service';
import {AsyncPipe} from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-hero-search',
  imports: [
    AsyncPipe,
    RouterLink,
    NgFor
  ],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.scss',
  standalone: true
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  //protected readonly async = async;
}
