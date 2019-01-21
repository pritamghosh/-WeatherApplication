
export class CurrentWeather{

    constructor( public sunrise:Date,
        public sunset:Date,
        public city_name:string,
        public temp:string,
        public temp_min:string,
        public temp_max:string,
        public humidity : number,
        public pressure : number,
        public wind : string,
        public id:number,
        public description:string){}

}