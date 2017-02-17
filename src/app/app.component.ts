import { Component, Input, OnInit } from '@angular/core';
import {CityService} from './Localisation/city.service';
@Component({
  selector: 'app-root',
  template:`
  <header>
  <localisation (myCity)="getmyCity($event)" (refCity)="getrefCity($event)"></localisation>
  <nav>
    <a routerLink="/homesite" routerLinkActive="active">Główna</a>
    <a routerLink="/my-clocks" routerLinkActive="active">Zegary</a>
  </nav>
  <my-clocks [myCity]="myCity" [refCity]="refCity"></my-clocks>
  </header>
  <body>
  <router-outlet></router-outlet>
  </body>
  `,
  // templateUrl:'./app.component.template.html',
  styleUrls: ['./app.component.styles.css']
})
export class AppComponent {
constructor(private cityService: CityService) { };

@Input() myCity; 
@Input() refCity;

getmyCity(): void {
    this.myCity = this.cityService.getmyCity();
  }
  
// getmyCity($event){
// this.myCity=($event);
// };
getrefCity($event){
  this.refCity=($event);
  console.log("Parent : "+this.myCity+ "-->"+this.refCity);
};

}
