import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) 
export class CountriesService {

  constructor(private http: HttpClient) { }
  configUrl = '/json/country.json';
    getCountry(){
    return this.http.get(this.configUrl);
  }
 
}
