import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships = [];
  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SwapiService
  ) {
    this.swapiService.getStarships().subscribe(data => {
      this.starships = data['results'];
      console.log(this.starships)
    });
  }

  ngOnInit() {
  }

}
