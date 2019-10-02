import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles = [];
  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SwapiService
  ) {
    this.swapiService.getVehicles().subscribe(data => {
      this.vehicles = data['results'];
      console.log(this.vehicles)
    });
  }

  ngOnInit() {
  }

}
