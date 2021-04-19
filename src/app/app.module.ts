import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { BodyComponent } from './body/body.component';
import { WeatherSimplePipe } from './weather-simple.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WeatherComponent,
        BodyComponent,
        WeatherSimplePipe,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
