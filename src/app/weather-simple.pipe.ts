import { Pipe, PipeTransform } from '@angular/core';
import { IWeather } from "../app/iWeather"

@Pipe({
  name: 'weatherSimple'
})
export class WeatherSimplePipe implements PipeTransform {
  transform(value: IWeather): any {
    if (value === undefined)
      return
    return `${value.day} | ${value.status} | ${value.temperature} °C`
  }
}
