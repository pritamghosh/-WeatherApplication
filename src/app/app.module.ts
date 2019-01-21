import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WeatherService } from './services/weather.service';
import { HttpModule } from '@angular/http';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:city', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [WeatherService,D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
