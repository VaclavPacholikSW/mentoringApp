# mentoringApp
Muster for mentoring sessions.

Goal is to create an app displaying weather. Here are tasks which you should do to finish our app.
![image](https://user-images.githubusercontent.com/79636138/114690254-cf700b00-9d16-11eb-8c8b-c49e36ecad96.png)

First of all, download the project, run **npm install** and **investigate files and file structure**. 
In folder **src/app/** you will find everything what you should use.
- app.component.html is base page.
- watch following video to see what should be the result
https://user-images.githubusercontent.com/79636138/114690469-0514f400-9d17-11eb-9d80-ddbc73dce380.mp4




## Tasks TODO
**1) update angular.json**
- Muster is compilable but Im using LESS for styling so first of all 
you need to update your angular.json to use LESS extensions (see angular schematics)


**2) update package.json**
- update package.json so user can run command **npm run dev**   instead of ng serve –open


**3) investigate app.component.html**
- Create component for header, body and footer and connect all via modules with app.component.html


**4) create weatherComponent**
- Create component to display weather and connect it with header and body via module. 
- As you can see, this is shared component which should have input/output bindings.

- Add method to fetch weather data
  - (keep it simple, just fill some variable with mocked array of objects for one week)
  - method should be called just after component initialize and fill data after 3seconds delay (to simulate slow request)
  - during "3s loading" busyState should be visible (ngIf+template)
  - use interfaces
  - use enums to prevent duplicate of statuses


**5) implement interactions**
- Header should request a single Day -> weather should display corresponding data to desired day
- Body should display all days available and expect output message -> weather should display all days and pass message if requested.


**6) bodyComponent interactions**
- create button with click function to reload weatherData 
  - button should change label to "refreshing" while data are loading
  - after data are "reloaded" weather should emit message back to bodyComponent



