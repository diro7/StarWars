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
  images = {
    'Luke Skywalker': 'https://img-cdn.hipertextual.com/files/2018/12/lukeskywalkersableluzstarwarsafkad-454a516bfb5e4a16c018f6b9ec3ec302-1200x600.jpg?strip=all&lossy=1&quality=57&resize=740%2C490&ssl=1',
    'C-3PO': 'https://fsmedia.imgix.net/2c/a4/ca/4f/f3e4/4e12/8879/80557aaa2bba/star-wars-9-leaks-c3po.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=325&w=650',
    'R2-D2': 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_gallery_5c4fb7e7e5e21.jpg',
    'Leia Organa': 'http://sartorialgeek.com/wp-content/uploads/2018/09/960-e1538273942244.jpg',
    'Owen Lars': 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-1_9b5ac94f.jpeg?region=1%2C0%2C1278%2C719&width=960',
    'Beru Whitesun lars': 'https://i2.wp.com/thefutureoftheforce.com/wp-content/uploads/2018/01/aunt-beru-header.jpg?resize=672%2C372&ssl=1',
    'R5-D4': 'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960',
    'Biggs Darklighter': 'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=960',
    'Obi-Wan Kenobi': 'https://cdn1.thr.com/sites/default/files/imagecache/768x433/2019/08/ewan_mcgregor-star_wars_revenge_of_the_sith-photofest_still-h_2019.jpg',
    'Darth Vader': 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960',
  }


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
      this.character.image = this.images[this.character.name]
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

      console.log(this.films)
    });
  }

  ngOnInit() {}
}
