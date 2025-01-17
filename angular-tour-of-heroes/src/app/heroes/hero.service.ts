import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages/message.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService, private http: HttpClient) { }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:8080/heroes');
  }
  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`http://localhost:8080/heroes/${id}`);
  }
  // get()
}
