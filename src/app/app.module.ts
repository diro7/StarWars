import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule , Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieIndexComponent } from './movie-index/movie-index.component';
import { HeaderComponent } from './header/header.component';

import { SwapiService } from './swapi.service';
import { IndexComponent } from './index/index.component';
import { FilmComponent } from './film/film.component';

import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planet/planet.component';

import { StarshipsComponent } from './starships/starships.component';
import { StarshipComponent } from './starship/starship.component';

import { SpeciesComponent } from './species/species.component';
import { SpecieComponent } from './specie/specie.component';

import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'films/:id', component: FilmComponent },

  { path: 'starships', component: StarshipsComponent },
  { path: 'starships/:id', component: StarshipComponent },

  { path: 'species', component: SpeciesComponent },
  { path: 'species/:id', component: SpecieComponent },

  { path: 'vehicles', component: VehiclesComponent },
  { path: 'vehicles/:id', component: VehicleComponent },

  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/:id', component: PlanetComponent },

  { path: 'characters', component: CharactersComponent },
  { path: 'people/:id', component: CharacterComponent },

  { path: 'search', component: SearchComponent },
  { path: 'search/:id', component: SearchComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MovieIndexComponent,
    HeaderComponent,
    IndexComponent,
    FilmComponent,
    CharactersComponent,
    PlanetsComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    CharacterComponent,
    VehicleComponent,
    SpecieComponent,
    PlanetComponent,
    StarshipComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SwapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
