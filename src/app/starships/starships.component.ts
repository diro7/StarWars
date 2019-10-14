import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships:any = [];
  images = {
      "Death Star": "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900&width=960",
      "X-wing": "https://www.revell.de/out/pictures/master/product/1/03601_smpw_x_wing_fighter.jpg",
      "Executor": "https://spikeybits.com/wp-content/uploads/2018/08/gencon-executor-3.jpg",
      "Millennium Falcon": "https://i0.wp.com/www.disneytouristblog.com/wp-content/uploads/2019/05/millennium-falcon-smugglers-run-galaxys-edge-star-wars-land-disneyland-california-1829.jpg?fit=800%2C536&ssl=1",
      "Y-wing": "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=960",
      "Sentinel-class landing craft": "https://i.ytimg.com/vi/dtGLhUaSka8/maxresdefault.jpg",
      "TIE Advanced x1": "https://www.zmart.cl/productos/Galerias/2017/12/02/MDLK00153%20(13)_M.jpg",
      "Imperial shuttle": "https://lumiere-a.akamaihd.net/v1/images/veh_ia_1752_040381b2.jpeg?region=0%2C70%2C1280%2C720&width=960",
      "EF76 Nebulon-B escort frigate": "https://media.moddb.com/images/mods/1/11/10420/Nebulon_B_Varianten.jpg",
      "Slave 1": "https://live.staticflickr.com/2216/2111406652_47bfa8eddd_b.jpg"
  }

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
  ) {
    this.swapiService.getStarships().subscribe(data => {
      this.starships = data['results'];
      for (var key in this.starships) {
        this.starships[key] = Replace.format(this.starships[key], "https://swapi.co/api", "", true, true);
        this.starships[key].image = this.images[this.starships[key].name]
        console.log(this.starships[key].name)
        console.log(this.images[this.starships[key].name])

        if (typeof this.starships[key].image === 'undefined'){
          this.starships[key].image = this.swapiService.getImage(this.starships[key].name + "").subscribe(data => {
            this.starships[key].image = data
            console.log(data)
          });
        }
      }
      console.log(this.starships)
    });



  }

  ngOnInit() {
  }

}
