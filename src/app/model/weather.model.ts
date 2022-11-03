export interface IWeather  {
    name:string
    dt_txt : string
    date : string
    humidity : number
    temp_max : string
    temp_min : string
    weather_main:string
    weather_description :string
    wind : number
    isClear :boolean;
    isClouds :boolean;
    isRain :boolean;
}