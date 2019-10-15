import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  specie:any = [];
  films:any = [];
  planets:any = [];
  people:any = [];
  api = "https://swapi.co/api/";
  id = "0";

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.swapiService.getSpecie('species/' + this.id).subscribe(data => {
      this.specie = data;
      this.specie = Replace.format(this.specie, "https://swapi.co/api/", "", true, true);
      this.swapiService.getImage(this.specie.name).subscribe(data => {
        this.specie.image = data
      });
      console.log(this.specie)

      for (var key in this.specie.films) {
        this.swapiService.getFilm(this.specie.films[key]).subscribe(data => {
          this.films.push(Replace.format(data, this.api, "", true, true))
        });
      }

      for (var key in this.specie.people) {
        this.swapiService.getCharacter(this.specie.people[key]).subscribe(data => {
          this.people.push(Replace.format(data, this.api, "", true, true))
        });
      }

      for (var key in this.specie.films) {
        this.swapiService.getFilm(this.specie.films[key]).subscribe(data => {
          this.films.push(Replace.format(data, this.api, "", true, true))
        });
      }
      
      this.swapiService.getPlanet(this.specie.homeworld).subscribe(data => {
        this.planets.push(Replace.format(data, this.api, "", true, true))
      });
    

      console.log(this.planets)
    });
  }

  ngOnInit() {}

}
