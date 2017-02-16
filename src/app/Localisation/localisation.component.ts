import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({ 
  selector: 'localisation',
  template: `
  <div>
  <p>Twoje miejsce pobytu</p>
  <input type="text" #myCityInput>
  </div>
  <div>
  <p>Miejsce odniesienia</p>
  <input type="text" #refCityInput>
  </div>
  <button (click)="onSubmit(myCityInput, refCityInput)">Pobierz czas!</button>


  `,
  styles:[`
  div {line-height:10px;}
  div p {
    display: inline-block;
    width: 150px;}
  `]
})
export class LocalisationComponent {
  // public CityArrayExport: any;
  public myCityExport;
  public refCityExport;
  @Output() myCity = new EventEmitter<{}>();
  @Output() refCity = new EventEmitter<{}>();

onSubmit(myCityInput, refCityInput)
{ 
   this.myCityExport = myCityInput;
   this.refCityExport = refCityInput;
   this.myCity.emit(this.myCityExport.value);
   this.refCity.emit(this.refCityExport.value);
   console.log("Child: "+this.myCityExport.value +" + "+this.refCityExport.value);
}

}
 