import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species = [];
  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SwapiService
  ) {
    this.swapiService.getSpecies().subscribe(data => {
      this.species = data['results'];
      console.log(this.species)
    });
  }

  ngOnInit() {
  }

}
