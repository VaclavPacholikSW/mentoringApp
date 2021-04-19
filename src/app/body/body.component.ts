import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit {

  private buttonText: string;
  private static buttonTextRefresh = "Refresh"
  private static buttonTextRefreshing = "Refreshing"
  
  @ViewChild(WeatherComponent) weatherChild:WeatherComponent;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = BodyComponent.buttonTextRefresh
  }

  private refreshData() {
    this.buttonText = BodyComponent.buttonTextRefreshing
    this.weatherChild.refreshData();
  }

  isBusy(state: boolean) {
    if (state === false) {
      this.buttonText = BodyComponent.buttonTextRefresh
    }
  }
}
