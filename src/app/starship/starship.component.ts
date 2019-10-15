import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starship:any = [];
  films:any = [];
  pilots:any = [];
  api = "https://swapi.co/api/";
  id = "0";

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.swapiService.getStarship('starships/' + this.id).subscribe(data => {
      this.starship = data;
      this.starship = Replace.format(this.starship, "https://swapi.co/api/", "", true, true);
      this.swapiService.getImage(this.starship.name).subscribe(data => {
        this.starship.image = data
      });
      for (var key in this.starship.films) {
        this.swapiService.getFilm(this.starship.films[key]).subscribe(data => {
          this.films.push(Replace.format(data, this.api, "", true, true))
        });
      }
      for (var key in this.starship.pilots) {
        this.swapiService.getCharacter(this.starship.pilots[key]).subscribe(data => {
          this.pilots.push(Replace.format(data, this.api, "", true, true))
        });
      }
    });
  }

  ngOnInit() {}

}
