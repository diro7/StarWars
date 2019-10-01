import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from './Films'
import { Film } from './Film'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor(private http: HttpClient) {
  }

  public getFilsm(){
    return this.http.get<Films[]>('https://swapi.co/api/films')
  }

  public getFilm(id): Observable<Film[]> {
    return this.http.get<Film[]>('https://swapi.co/api/films/' + id);
  }

}
