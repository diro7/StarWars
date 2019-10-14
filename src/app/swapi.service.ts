import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Films } from './Films'
import { Film } from './Film'
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators'
import { Planet } from './Planet';
import { Characters } from './Characters';
import { Planets } from './Planets';
import { Starships } from './Starships';
import { Vehicles } from './Vehicles';
import { Species } from './Species';
import { environment } from 'src/environments/environment.prod';


export const UserMock = [{ a: 1 }];
@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor(private http: HttpClient) {
  }

  public getFilsm() {
    return this.http.get<Films[]>('https://swapi.co/api/films')
  }

  public getFilm(id): Observable<Film[]> {
    return this.http.get<Film[]>('https://swapi.co/api/' + id);
  }
  public getFilm2(id): Observable<any> {
    return of(UserMock);
    // return this.http.get<Film[]>('https://swapi.co/api/films/' + id);
  }


  //public getFilm(id): Observable<Film[]> {
  //  return this.http.get<Film[]>('https://swapi.co/api/films/' + id).pipe(
  //    tap(r=>{}),
  //    map((r:any)=>r.dara)
  //  );
  //}

  public getPlanet(url): Observable<Planet[]> {
    return this.http.get<Planet[]>('https://swapi.co/api/' + url)
  }

  public getCharacter(url): Observable<Characters[]> {
    return this.http.get<Characters[]>('https://swapi.co/api/' + url)
  }

  public getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>('https://swapi.co/api/people')
  }
  public getPlanets(): Observable<Planets[]> {
    return this.http.get<Planets[]>('https://swapi.co/api/planets')
  }
  public getStarships(): Observable<Starships[]> {
    return this.http.get<Starships[]>('https://swapi.co/api/starships')
  }
  public getStarship(url): Observable<any[]> {
    return this.http.get<[]>('https://swapi.co/api/' + url)
  }
  public getVehicles(): Observable<Vehicles[]> {
    return this.http.get<Vehicles[]>('https://swapi.co/api/vehicles')
  }
  public getVehicle(url): Observable<any> {
    return this.http.get<[]>('https://swapi.co/api/' + url)
  }
  public getSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>('https://swapi.co/api/species')
  }
  public getSpecie(url): Observable<any> {
    return this.http.get<[]>('https://swapi.co/api/' + url)
  }
  public getImage(word): Observable<any[]>{
    const url = "http://127.0.0.1:3000/"
    const params = new HttpParams()
      .set('q', word)
    return this.http.get<[]>(url, { params }).pipe(
      map((response:any) => response.url)
    );
  }
}
