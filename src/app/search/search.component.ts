import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Replace } from "../Replace";
import { SwapiService } from "../swapi.service";
import data from './imagesMock.json';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  response: any = [];
  image: any = [];
  searchForm;
  images: any = data
  nrSelect: string = "films"
  api = "https://swapi.co/api/";

  constructor(
    private formBuilder: FormBuilder,
    private swapiService: SwapiService,
  ) {
    this.searchForm = this.formBuilder.group({
      category: '',
      search: ''
    });
  }
  onSubmit(Data) {
    this.response = new Array();
    if (typeof this.images[Data.category] === 'string') {
      this.images[Data.category] = JSON.parse(this.images[Data.category])
    }
    const url = Data.category + "/?search=" + Data.search
    this.swapiService.getSearch(url).subscribe(data => {
      data = Replace.format(data, this.api, "", true, true)
      for (let [key, value] of Object.entries(data)) {
        if (Data.category == "films") {
          value['name'] = value['title']
        }
        value['image'] = this.images[Data.category][value['name']]
        if (value['image'] === undefined) {
          this.swapiService.getImage(value['name']).subscribe(data => {
            this.image = data
            value['image'] = this.image
          });
          value['image'] = this.image
        }
        this.response.push(value);
      }


    });
    console.warn('Your order has been submitted', Data);

  }

  ngOnInit() {
  }

}
