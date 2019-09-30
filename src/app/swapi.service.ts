import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from './Films'

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor(private http: HttpClient) {
  }

  getFilsm(){
    return this.http.get<Films[]>('https://swapi.co/api/films')
  }

}
