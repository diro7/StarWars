import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"

@Component({
  selector: "app-film",
  templateUrl: "./film.component.html",
  styleUrls: ["./film.component.css"]
})
export class FilmComponent implements OnInit {
  film:any = [];
  planets:any = [];
  characters:any = [];
  id = "0";
  images = {
    'Attack of the Clones': 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/271253/271253._SX1600_QL80_TTD_.jpg',
    'A New Hope': 'https://live.staticflickr.com/1749/41594967495_9acc828571_b.jpg',
    'The Phantom Menace': 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    'The Force Awakens': 'https://images-na.ssl-images-amazon.com/images/I/71rZtELyYzL._SY741_.jpg',
    'The Empire Strikes Back': 'https://images-na.ssl-images-amazon.com/images/I/814Cbv8EftL._SY679_.jpg',
    'Return of the Jedi': 'https://images-na.ssl-images-amazon.com/images/I/51UdiBUkerL.jpg',
    'Revenge of the Sith': 'https://images-na.ssl-images-amazon.com/images/I/71MKj4j-isL._SY679_.jpg',
  }

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SwapiService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.swapiService.getFilm(this.id).subscribe(data => {
      this.film = data;
      this.film = Replace.format(this.film, "https://swapi.co/api/", "", true, true);
      this.film.image = this.images[this.film.title]
      for (var key in this.film.planets) {
        this.swapiService.getPlanet(this.film.planets[key]).subscribe(data => {
          this.planets.push(data)
        });
      }
      for (var key in this.film.characters) {
        this.swapiService.getCharacter(this.film.characters[key]).subscribe(data => {
          this.characters.push(data)
        });
      }

      console.log(this.film)
    });
  }

  ngOnInit() {}
}
