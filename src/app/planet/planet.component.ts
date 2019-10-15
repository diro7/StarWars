import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet:any = [];
  films:any = [];
  residents:any = [];
  api = "https://swapi.co/api/";
  id = "0";

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.swapiService.getPlanet('planets/' + this.id).subscribe(data => {
      this.planet = data;
      this.planet = Replace.format(this.planet, "https://swapi.co/api/", "", true, true);
      this.swapiService.getImage(this.planet.name).subscribe(data => {
        this.planet.image = data
      });
      for (var key in this.planet.films) {
        console.log(this.planet.films)
        this.swapiService.getFilm(this.planet.films[key]).subscribe(data => {
          this.films.push(Replace.format(data, this.api, "", true, true))
          console.log(this.films)
        });
      }
      for (var key in this.planet.residents) {
        this.swapiService.getCharacter(this.planet.residents[key]).subscribe(data => {
          this.residents.push(Replace.format(data, this.api, "", true, true))
        });
      }

      console.log(this.planet)
    });
  }

  ngOnInit() {}

}
