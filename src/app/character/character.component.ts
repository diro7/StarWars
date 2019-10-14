import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character:any = [];
  vehicles:any = [];
  films:any = [];
  starships:any = [];
  api = "https://swapi.co/api/";
  id = "0";

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SwapiService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.swapiService.getCharacter('people/' + this.id).subscribe(data => {
      this.character = data;
      this.character = Replace.format(this.character, "https://swapi.co/api/", "", true, true);
      //this.character.image = this.images[this.character.name]
      this.swapiService.getImage(this.character.name).subscribe(data => {
        this.character.image = data
        console.log(data)
      });
      for (var key in this.character.films) {
        this.swapiService.getFilm(this.character.films[key]).subscribe(data => {
          this.films.push(Replace.format(data, this.api, "", true, true))
        });
      }
      for (var key in this.character.vehicles) {
        this.swapiService.getVehicle(this.character.vehicles[key]).subscribe(data => {
          this.vehicles.push(Replace.format(data, this.api, "", true, true))
        });
      }
      for (var key in this.character.starships) {
        this.swapiService.getStarship(this.character.starships[key]).subscribe(data => {
          this.starships.push(Replace.format(data, this.api, "", true, true))
        });
      }

      console.log(this.character)
    });
  }

  ngOnInit() {}
}
