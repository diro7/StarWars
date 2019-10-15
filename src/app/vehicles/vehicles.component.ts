import { Component, OnInit } from '@angular/core';
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: any = [];
  images = {
    "Snowspeeder": "https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C211%2C2048%2C1154&width=960",
    "TIE bomber": "https://lumiere-a.akamaihd.net/v1/images/tie-bomber-1-retina_d3ea46d8.jpeg?region=0%2C0%2C1200%2C675",
    "T-16 skyhopper": "https://lumiere-a.akamaihd.net/v1/images/databank_t16skyhopper_01_169_ad69e901.jpeg?region=141%2C304%2C750%2C422",
    "TIE/LN starfighter": "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2014/07/10-tie-pilot.png",
    "Sand Crawler": "https://i.pinimg.com/originals/f2/7c/8b/f27c8b2e228ae33fc2eab2df58d506e6.jpg",
    "Sail barge": "https://media.comicbook.com/2018/02/star-wars-jabbas-sail-barge-hasbro-crowdfund-1085664-1280x0.jpeg",
    "Luke Skywalker": "https://lumiere-a.akamaihd.net/v1/images/rey-history-3-retina_850ac9a3.jpeg?region=0%2C0%2C1200%2C497",
    "AT-ST": "https://lumiere-a.akamaihd.net/v1/images/AT-ST-gallery-1_85c9da66.jpeg?region=258%2C24%2C751%2C422",
    "Storm IV Twin-Pod cloud car": "https://lumiere-a.akamaihd.net/v1/images/e6d_ia_5724_a150e6d4.jpeg?region=124%2C0%2C1424%2C802&width=960",
    "AT-AT": "https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716&width=960",
    "X-34 landspeeder": "https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819&width=960"

  };
  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
    private service: SwapiService
  ) {
    this.swapiService.getVehicles().subscribe(data => {
      this.vehicles = data['results'];
      for (var key in this.vehicles) {
        this.vehicles[key] = Replace.format(this.vehicles[key], "https://swapi.co/api", "", true, true);
        this.vehicles[key].image = this.images[this.vehicles[key].name]
        if (typeof this.vehicles[key].image === 'undefined') {
          this.vehicles[key].image = this.swapiService.getImage(this.vehicles[key].name + "").subscribe(data => {
            this.vehicles[key].image = data
          });
        }
      }
    });
  }

  ngOnInit() { }

}
