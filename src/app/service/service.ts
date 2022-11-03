import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { IWeather } from "../model/weather.model";

@Injectable({
    providedIn: 'root'
  })
  export class WeatherService {

     url : string = 'https://api.openweathermap.org/data/2.5/forecast?q=Paris&cnt=40&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr';
     url_forecast_api : string = 'https://api.openweathermap.org/data/2.5/forecast?q=';
     url_forecast_city : string = 'Paris';
     url_forecast_cle: string = '&cnt=40&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr';
     
     url_weather_api : string = 'https://api.openweathermap.org/data/2.5/weather?q='
     url_weather_city : string = 'Paris'
     url_weather_cle: string = '&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr'

    constructor (private http :  HttpClient) {}

    weatherServiceByCity  (city:String)  :Observable<any  >{
        return this.http.get<any >(this.url_weather_api + city + this.url_weather_cle);
    }

    forcecastServiceByCity (city:String)  :Observable<any  >{
      // return this.http.get<any >(this.url_start + this.url_city + this.url_end)
      return this.http.get<any >(this.url_forecast_api + city + this.url_forecast_cle);
  }
  }