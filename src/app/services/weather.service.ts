import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpService:Http) { }


  getCities(){
    return this.httpService.get('http://localhost:3000');
  }

  getDetials(city:string){
    return this.httpService.get('http://localhost:3000/details?city='+city);
  }
}
