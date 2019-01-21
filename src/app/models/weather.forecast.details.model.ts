export class WeatherForecastDetailsModel {


    
    constructor(public time: Date,
        public temp: string,
        public temp_min: string,
        public temp_max: string,
        public humidity: number,
        public pressure: number,
        public sea_level: number,
        public grnd_level: number,
        public wind: string, 
        public description: string) { }


}