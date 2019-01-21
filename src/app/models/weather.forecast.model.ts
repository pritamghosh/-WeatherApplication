import { CurrentWeather } from "./current.weather.model";
import { WeatherForecastDetailsModel } from "./weather.forecast.details.model";

export class WeatherForecastModel {

    constructor(public city_name: string,
        public id: number,
        public currentWeather: CurrentWeather | undefined,
        public forecast: WeatherForecastDetailsModel[] = [] ) {
    }




}