import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CurrentWeather } from '../models/current.weather.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currWeatherList : CurrentWeather[] = []

  constructor(private service:WeatherService) { }

  ngOnInit() {
    this.service.getCities().subscribe(
      (data : Response) =>{
        this.currWeatherList = JSON.parse(data.text());
      }
    );
  }

}
