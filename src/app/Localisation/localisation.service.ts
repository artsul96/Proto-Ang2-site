import {Injectable} from '@angular/core';
import {myCity,refCity} from './localisation.component';
@Injectable()

export class LocService {
//@Input myCity, refCity;

    getLoc() {
      // return Promise.resolve(myCity,refCity);
       //console.log("service: "+ myCity + " " + refCity)
    }
}