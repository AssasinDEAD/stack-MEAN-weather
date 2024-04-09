import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent {
   city: string = "";
   weatherData: any;

   constructor(private http: HttpClient) {}
   searchWeather() {
      this.http.get<any>(`http://localhost:3000/weather/${this.city}`)
        .subscribe(data => {
          this.weatherData = data;
        }, error => {
          console.error('Error fetching weather data:', error);
        });
    }
} 