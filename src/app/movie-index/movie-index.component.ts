import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {

  movies = [];
  constructor(private swapiService: SwapiService){
    this.swapiService.getFilsm().subscribe( data => {
      this.movies = data['results'];
      this.movies[0].image = 'https://live.staticflickr.com/1749/41594967495_9acc828571_b.jpg'
      this.movies[1].image = 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/271253/271253._SX1600_QL80_TTD_.jpg'
      this.movies[2].image = 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
      this.movies[3].image = 'https://images-na.ssl-images-amazon.com/images/I/71MKj4j-isL._SY679_.jpg'
      this.movies[4].image = 'https://images-na.ssl-images-amazon.com/images/I/51UdiBUkerL.jpg'
      this.movies[5].image = 'https://images-na.ssl-images-amazon.com/images/I/814Cbv8EftL._SY679_.jpg'
      this.movies[6].image = 'https://images-na.ssl-images-amazon.com/images/I/71rZtELyYzL._SY741_.jpg'
      for (let index = 0; index < this.movies.length; index++) {
        this.movies[index].url = this.movies[index].url.replace("https://swapi.co/api/", "");
      }
      console.log(data);
    }
    )
  }

  ngOnInit() {
  }

}
