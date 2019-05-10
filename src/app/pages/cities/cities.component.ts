import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { WebService } from '../../service/web.service';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  city: any;
  form = new FormGroup({
    name: new FormControl(''),
  });
  notFound = false;

  constructor(private _webService: WebService) { }

  ngOnInit() {
  }

  search(){
    this._webService.getCityByName(this.form.controls['name'].value).subscribe(
      resp => {
        console.log(resp)
        this.city = resp;
        this.notFound = false;
      }, 
      error => {
        console.log(error)
        if(error.error.cod === '404')
          this.notFound = true;
      }

    )
  }

}
