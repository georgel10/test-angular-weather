import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CitiesComponent } from 'src/app/pages/cities/cities.component';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnChanges {

  @Input() city: any;
  constructor() { }

  ngOnChanges() {
    console.log(this.city)

  }

}
