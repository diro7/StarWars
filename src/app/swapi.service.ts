import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from './Films'
import { Film } from './Film'
import { Observable } from 'rxjs';
import { Planet } from './Planet';
import { Characters } from './Characters';
import { Planets } from './Planets';
import { Starships } from './Starships';
import { Vehicles } from './Vehicles';
import { Species } from './Species';

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

  public getPlanet(url): Observable<Planet[]>{
    return this.http.get<Planet[]>('https://swapi.co/api/' + url)
  }

  public getCharacter(url): Observable<Characters[]>{
    return this.http.get<Characters[]>('https://swapi.co/api/' + url)
  }

  public getCharacters(): Observable<Characters[]>{
    return this.http.get<Characters[]>('https://swapi.co/api/people')
  }
  public getPlanets(): Observable<Planets[]>{
    return this.http.get<Planets[]>('https://swapi.co/api/planets')
  }
  public getStarships(): Observable<Starships[]>{
    return this.http.get<Starships[]>('https://swapi.co/api/starships')
  }
  public getVehicles(): Observable<Vehicles[]>{
    return this.http.get<Vehicles[]>('https://swapi.co/api/vehicles')
  }
  public getSpecies(): Observable<Species[]>{
    return this.http.get<Species[]>('https://swapi.co/api/species')
  }


}
