import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  public apiUrl = environment.apiUrl;
  public key = environment.apiKey;

  constructor(private http: HttpClient) { }

  getCityByName(name): Observable<any>{
    return this.http.get(`${this.apiUrl}/weather?q=${name}&appid=${this.key}`);
  }

}