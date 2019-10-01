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

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'films/:id', component: FilmComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MovieIndexComponent,
    HeaderComponent,
    IndexComponent,
    FilmComponent
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
