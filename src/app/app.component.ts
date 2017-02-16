import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<localisation (myCity)="getmyCity($event)" (refCity)="getrefCity($event)"></localisation>`,
  // templateUrl:'./app.component.template.html',
  styleUrls: ['./app.component.styles.css']
})
export class AppComponent {

@Input() myCity; 
@Input() refCity;
getmyCity($event){
  this.myCity=($event);
};
getrefCity($event){
  this.refCity=($event);
  console.log("Parent : "+this.myCity+ "-->"+this.refCity);
};

ngOnInit(){

}
}
