import { Injectable } from '@angular/core';
import { IWeather } from './iWeather';
import { DaysInWeek,WeatherStatus } from './Enums'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherData : IWeather[] = [
    {
      day: DaysInWeek.MONDAY,
      status: WeatherStatus.SUNNY,
      temperature: 17
    },
    {
      day: DaysInWeek.TUESDAY,
      status: WeatherStatus.CLOUDY,
      temperature: 10
    },
    {
      day: DaysInWeek.WEDNESDAY,
      status: WeatherStatus.SUNNY,
      temperature: 17
    },
    {
      day: DaysInWeek.THURSDAY,
      status: WeatherStatus.SUNNY,
      temperature: 25
    },
    {
      day: DaysInWeek.FRIDAY,
      status: WeatherStatus.SUNNY,
      temperature: 20
    },
    {
      day: DaysInWeek.SATURDAY,
      status: WeatherStatus.CLOUDY,
      temperature: 10
    },
    {
      day: DaysInWeek.SUNDAY,
      status: WeatherStatus.RAINY,
      temperature: 10
    },
  ]

  constructor() { }

  public GetData() : Promise<IWeather[]>  {
    return new Promise( resolve =>
       setTimeout(() => resolve(this.weatherData), 3000)
    )
  }
}
