import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { WeatherForecastModel } from '../models/weather.forecast.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  forecastDetails : WeatherForecastModel;
  constructor(private route: ActivatedRoute,private service:WeatherService) {
    this.route.params.subscribe(params => {
      let city = params['city']
      this.service.getDetials(city).subscribe(data=>{
        this.forecastDetails = JSON.parse(data.text());
      })
    });
  }

  ngOnInit() {
  }

}
