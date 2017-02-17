import { Injectable, Input } from '@angular/core';

@Injectable()

export class CityService {
@Input() myCity;
@Input() refCity;

getmyCity($event){
this.myCity=($event);
};

getrefCity($event){
  this.refCity=($event);

  console.log("Service: "+this.myCity+ "-->"+this.refCity);
}
}