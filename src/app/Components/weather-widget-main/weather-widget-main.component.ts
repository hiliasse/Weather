import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWeather } from 'src/app/model/weather.model';
import { WeatherService } from 'src/app/service/service';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit,OnDestroy {

  WeatherData:any;
  ForecastData:any = {city: "",list : ""};
  test: any []  = ["name","prenom"];
 
  // weather : IWeather [] = [] ;
  weather : IWeather []= [];
  array = [];

  datePrecedent : string = "";
  DateAujoudhui : Date = new Date();
  dateToday : string = "";
  dateTodayFinal : string = "";
  listDateTemp = [{ date : "", tmin : "" , tmax : ""}];

  city: string;
  code: string;
  isDay: true;
  tmpMax : string = "0";
  tmpMin : string = "0";
  isClear: boolean = false;
  isRain: boolean= false;
  isClouds: boolean= false;
  private sub: Subscription;
  alive: boolean = true
  

  constructor(private serviceWeather : WeatherService) { }
  ngOnDestroy(): void {
   
    // this.sub.unsubscribe();
    console.log("unsubscribe" );
    
    this.alive = false;
  }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      weather : {},
      wind : {}
    };
    this.city = "Paris";
    this.getWeatherData( );
    this.getForecastData();
    
   
  }

  getWeatherData( ){

    // fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=ff1bc4683fc7325e9c57e586c20cc03e&lang=fr')
    // .then(response=>response.json())
    // .then(data=>{this.setWeatherData(data)})
    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
    console.log("ville " + this.city);
    this.serviceWeather.weatherServiceByCity(this.city).subscribe(data=>this.setWeatherData(data) );
  }

  setWeatherData(data){
    this.WeatherData = data;
    console.log("setWeatherData");
    console.log(data);
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    let sunriseTime = new Date(this.WeatherData.sys.sunrise * 1000);
    // console.log(" sunsetTime : " + sunsetTime);
    // console.log(" sunriseTime : " + sunriseTime);

    this.WeatherData.sunrise_time = sunriseTime.toLocaleTimeString();
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    // console.log(" sunset_time localtime : " + this.WeatherData.sunset_time );
    // console.log(" sunrise_time localtime : " + this.WeatherData.sunrise_time );

    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.wind.speed = (this.WeatherData.wind.speed *3.6).toFixed();
    this.WeatherData.weather.main = this.WeatherData.weather[0].main;
    this.WeatherData.weather.description = this.WeatherData.weather[0].description;
    switch (this.WeatherData.weather.main) {
      case "Clear" :
        this.isClear = true;
        this.isClouds = false;
        this.isRain = false;
      break;
      case "Rain" :
        this.isRain = true;
        this.isClouds = false;
        this.isClear = false;
      break;
      case "Clouds" :
        this.isClouds = true;
        this.isRain = false;
        this.isClear = false;
      break;
    }
  }

  getForecastData ()  {
    console.log("test")
    this.sub = this.serviceWeather.forcecastServiceByCity(this.city).subscribe(data=> this.setForcecastData(data))
    // this.serviceWeather.getForcecastService()
    //   .subscribe(
    //     data => {  
          
    //         console.log(data);
    //           for (let i = 0 ; i<40; i++){
    //             if (i == 0){
    //               this.dateToday = data.list[0].dt_txt.slice(0,10);
    //               this.tmpMin = (data.list[0].main.temp_min- 273.15).toFixed()
 
    //             }
    //             if (this.dateToday == data.list[i].dt_txt.slice(0,10) ) {
 
    //               if (this.tmpMax <= (data.list[i].main.temp_max- 273.15).toFixed()){
    //                 this.tmpMax = (data.list[i].main.temp_max- 273.15).toFixed();
 
                    
    //                 this.listDateTemp.push({
    //                   date: this.dateToday,
    //                   tmin: this.tmpMin,
    //                   tmax: this.tmpMax
    //                 })
 
                    
    //               }
 
    //             }else {
    //               this.dateToday = data.list[i].dt_txt.slice(0,10);
    //               this.tmpMax = (data.list[i].main.temp_max- 273.15).toFixed();
    //               this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed();
 
    //             }
    //             if( this.datePrecedent != data.list[i].dt_txt.slice(0,10)){               
    //               console.log("diff")
 
    //               this.weather.push({
    //                 name: data.city.name,
 
    //                 dt_txt: data.list[i].dt_txt.slice(0, 10),
    //                 date: formatDate(data.list[i].dt_txt.slice(0, 10), 'dd/MM/yyyy', 'en-FR'),
    //                 humidity: data.list[i].main.humidity,
 
    //                 temp_max: this.tmpMax,
    //                 temp_min: this.tmpMin,
    //                 weather_main: data.list[i].weather[0].main,
    //                 weather_description: data.list[i].weather[0].description,
    //                 wind: data.list[i].wind.speed,
    //                 isClear: false,
    //                 isClouds: false,
    //                 isRain: false
    //               })
    //             }
    //               this.datePrecedent = data.list[i].dt_txt.slice(0,10);
    //           }   
    //            console.log(this.weather);
 
    //            console.log(this.listDateTemp);
    //            this.datamatch();
    //     }
    //   )
   
  }

  setForcecastData(data) {

  // this.array = JSON.parse(JSON.stringify(data));
    console.log(data);
      for (let i = 0 ; i<40; i++){
        if (i == 0){
          this.dateToday = data.list[0].dt_txt.slice(0,10);
          this.tmpMin = (data.list[0].main.temp_min- 273.15).toFixed()
          // console.log("boucle 0");
        }
        if (this.dateToday == data.list[i].dt_txt.slice(0,10) ) {
          // this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed(1);
          if (this.tmpMax <= (data.list[i].main.temp_max- 273.15).toFixed()){
            this.tmpMax = (data.list[i].main.temp_max- 273.15).toFixed();
            // if (this.tmpMin >= (data.list[i].main.temp_min- 273.15).toFixed(1))
            // { this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed(1); }
            
            this.listDateTemp.push({
              date: this.dateToday,
              tmin: this.tmpMin,
              tmax: this.tmpMax
            })
            // console.log("dateToday :" + this.dateToday);
            // console.log("tmpmax :" + this.tmpMax);
            // console.log("tmpmin :" + this.tmpMin);
            
          }
          // else if (this.tmpMin) {
              
          // }
        }else {
          this.dateToday = data.list[i].dt_txt.slice(0,10);
          this.tmpMax = (data.list[i].main.temp_max- 273.15).toFixed();
          this.tmpMin = (data.list[i].main.temp_min- 273.15).toFixed();
          // console.log("dateToday else :" + this.dateToday);
          // console.log("tmpmax else:" + this.tmpMax);
          // console.log("tmpmin else:" + this.tmpMin);
        }
        if( this.datePrecedent != data.list[i].dt_txt.slice(0,10)){               
          console.log("diff")
          // console.log(this.weather[i].temp_max )
          this.weather.push({
            name: data.city.name,
            // dt_txt: data.list[i].dt_txt, 
            dt_txt: data.list[i].dt_txt.slice(0, 10),
            date: formatDate(data.list[i].dt_txt.slice(0, 10), 'dd/MM/yyyy', 'en-FR'),
            humidity: data.list[i].main.humidity,
            // temp_max: data.list[i].main.temp_max,
            // temp_min: data.list[i].main.temp_min,
            // temp_max: (data.list[i].main.temp_max- 273.15).toFixed(),
            // temp_min: (data.list[i].main.temp_min - 273.15).toFixed(),
            // temp_max: this.tmpMax.slice(0, 2),
            // temp_min: this.tmpMin.slice(0, 2),
            temp_max: this.tmpMax,
            temp_min: this.tmpMin,
            weather_main: data.list[i].weather[0].main,
            weather_description: data.list[i].weather[0].description,
            wind: data.list[i].wind.speed,
            isClear: false,
            isClouds: false,
            isRain: false
          })
        }
          this.datePrecedent = data.list[i].dt_txt.slice(0,10);
      }   
        console.log(this.weather);
      //  console.log(this.weather[i].weather);
        console.log(this.listDateTemp);
        this.datamatch();
  }

  datamatch(){
    // console.log("datamatch")
    for (let w of this.weather){
      switch (w.weather_main) {
        case "Clear" :
          w.isClear = true;
          w.isClouds = false;
          w.isRain = false;
        break;
        case "Rain" :
          w.isRain = true;
          w.isClouds = false;
          w.isClear = false;
        break;
        case "Clouds" :
          w.isClouds = true;
          w.isRain = false;
          w.isClear = false;
        break;
      }
      console.log(w);  
      for (let j = 0; j < this.listDateTemp.length;j++){
        if (w.dt_txt == this.listDateTemp[j].date){
          // console.log("same date :" + w.date)
          // w.temp_max = this.listDateTemp[j].tmax.slice(0,2);
          w.temp_max = this.listDateTemp[j].tmax;
          // w.temp_max = this.listDateTemp[j].tmax.replace(".","");
        }
      }
    }
    for( let i = 0; i<1 ; i++){
      this.weather[i].temp_min = this.WeatherData.temp_min;
    }
  }


  // saveForm(){
  //   let location = {
  //     city: this.city,
  //     state: this.code
  //   };
  //   localStorage.setItem('location', JSON.stringify(location));
  //   console.log("search");   
  //   console.log(event);  
  //   console.log(location);   
 
  // }

  getForcecastServiceByCity (){
 
    /* on reinitialise tableau weather*/
    this.weather = [];
    
    console.log("getForcecastServiceByCity");
    console.log(this.city);
    // console.log(event.target);
    this.getWeatherData( );

    this.serviceWeather.forcecastServiceByCity(this.city).subscribe(
      data => {console.log(data),
      this.setForcecastData(data)}
    )
  }
}
