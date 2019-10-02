import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets = [];
  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SwapiService
  ) {
    this.swapiService.getPlanets().subscribe(data => {
      this.planets = data['results'];
      console.log(this.planets)
    });
  }

  ngOnInit() {
  }

}
