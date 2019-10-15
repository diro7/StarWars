import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets:any = [];
  images = {
    "Dagobah": "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=391%2C39%2C830%2C467",
    "Yavin IV": "https://vignette.wikia.nocookie.net/es.starwars/images/9/93/Great_Temple_RO.png/revision/latest?cb=20171018194017",
    "Bespin": "https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Endor": "https://cdna.artstation.com/p/assets/covers/images/010/348/404/large/esbjorn-nord-swbfii-esbjornnord-41.jpg?1523958436",
    "Alderaan": "https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Naboo": "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Coruscant": "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=960",
    "Kamino": "https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Geonosis": "https://cdnb.artstation.com/p/assets/images/images/014/319/709/large/esbjorn-nord-esbjornnord-geonosis-07.jpg?1543477481",
    "Hoth": "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=960"
  }

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SwapiService
  ) {
    this.swapiService.getPlanets().subscribe(data => {
      this.planets = data['results'];
      for (var key in this.planets) {
        this.planets[key] = Replace.format(this.planets[key], "https://swapi.co/api", "", true, true);
        this.planets[key].image = this.images[this.planets[key].name]
        console.log(this.planets[key].name)
        console.log(this.images[this.planets[key].name])

        if (typeof this.planets[key].image === 'undefined'){
          this.planets[key].image = this.swapiService.getImage(this.planets[key].name + "").subscribe(data => {
            this.planets[key].image = data
            console.log(data)
          });
        }
      }
      console.log(this.planets)
    });
  }

  ngOnInit() {
  }

}
