import { BrowserModule } from '@angular/platform-browser';
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
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'films/:id', component: FilmComponent },

  { path: 'starships', component: StarshipsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'people/:id', component: CharacterComponent },
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
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SwapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
