import { Component, OnInit } from "@angular/core";
import { SwapiService } from "../swapi.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Replace } from "../Replace"

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {


  species:any = [];
  images = {
    "Trandoshan": "https://lumiere-a.akamaihd.net/v1/images/databank_trandoshan_01_169_26a8a28f.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Ewok": "https://lumiere-a.akamaihd.net/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Sullustan": "https://lumiere-a.akamaihd.net/v1/images/databank_sullustan_01_169_01e4c3e0.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Yoda's species": "https://vignette.wikia.nocookie.net/starwars/images/5/5a/YodaNEGAS.jpg/revision/latest?cb=20061129202540",
    "Mon Calamari": "https://lumiere-a.akamaihd.net/v1/images/databank_moncalamari_01_169_135967d9.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Neimodian": "https://lumiere-a.akamaihd.net/v1/images/databank_neimoidian_01_169_f4d61512.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Gungan": "https://lumiere-a.akamaihd.net/v1/images/ep1_ia_70138_bd7b9296.jpeg?region=0%2C0%2C3072%2C1732&width=960",
    "Toydarian": "https://lumiere-a.akamaihd.net/v1/images/databank_toydarian_01_169_748d4d11.jpeg?region=0%2C0%2C1560%2C878&width=960",
    "Dug": "https://vignette.wikia.nocookie.net/es.starwars/images/2/2c/Dug_full_body.png/revision/latest?cb=20180108160945",
    "Hutt": "https://vignette.wikia.nocookie.net/es.starwars/images/7/72/HuttNEGAS.jpg/revision/latest?cb=20070227162036"
}

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute,
  ) {
    this.swapiService.getSpecies().subscribe(data => {
      this.species = data['results'];
      for (var key in this.species) {
        this.species[key] = Replace.format(this.species[key], "https://swapi.co/api", "", true, true);
        this.species[key].image = this.images[this.species[key].name]
        console.log(this.species[key].name)
        console.log(this.images[this.species[key].name])

        if (typeof this.species[key].image === 'undefined'){
          this.species[key].image = this.swapiService.getImage(this.species[key].name + "").subscribe(data => {
            this.species[key].image = data
            console.log(data)
          });
        }
      }
      console.log(this.species)
    });



  }

  ngOnInit() {
  }


}
