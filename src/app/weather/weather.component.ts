import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { WeatherService } from "../weather.service"
import { IWeather } from "../iWeather"
import { DaysInWeek } from '../Enums';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {

  @Input() simpleView : boolean = false
  @Output() isBusyEvent = new EventEmitter<boolean>();
  isBusy : boolean = false;
  data: IWeather[];
  
  constructor(
    private weatherService: WeatherService) {
   }

  ngOnInit(): void {
    this.refreshData()
  }

  private setIsBusy(state: boolean) {
    this.isBusyEvent.emit(state)
    this.isBusy = state;
  } 


  public refreshData() {
    this.setIsBusy(true)
    this.weatherService.GetData().then((data) => this.dataReceived(data))
  }

  private dataReceived(weatherData : IWeather[]) {
    this.data = weatherData
    this.setIsBusy(false)
  }

  private currentDayWeather() : IWeather {
    if (this.data.length === 0)
      return undefined
    
    return this.data.find( v => v.day === DaysInWeek.TUESDAY)  
  }
}
