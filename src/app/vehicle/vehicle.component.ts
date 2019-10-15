import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicle: any = [];
  films: any = [];
  pilots: any = [];
  api = "https://swapi.co/api/";
  id = "0";

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.swapiService.getVehicle('vehicles/' + this.id).subscribe(data => {
      this.vehicle = data;
      this.vehicle = Replace.format(this.vehicle, "https://swapi.co/api/", "", true, true);
      this.swapiService.getImage(this.vehicle.name).subscribe(data => {
        this.vehicle.image = data
      });
      for (var key in this.vehicle.films) {
        this.swapiService.getFilm(this.vehicle.films[key]).subscribe(data => {
          this.films.push(Replace.format(data, this.api, "", true, true))
        });
      }
      for (var key in this.vehicle.pilots) {
        this.swapiService.getCharacter(this.vehicle.pilots[key]).subscribe(data => {
          this.pilots.push(Replace.format(data, this.api, "", true, true))
        });
      }

    });
  }

  ngOnInit() { }

}
