import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData} from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeFr from '@angular/common/locales/fr'; 
registerLocaleData(localeFr);
 

@NgModule({
  declarations: [
    AppComponent,
    
    WeatherWidgetMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 
    HttpClientModule
  ],
  // providers: [],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
