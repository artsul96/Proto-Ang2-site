import { Component, Input, OnInit } from '@angular/core';

@Component({ 
  selector: 'localisation',
  template: `
        <label>Twoje miejsce pobytu</label>
        <input type="text" #myCityInput><br>
        <label>Miejsce odniesienia</label>
        <input type="text" #refCityInput ><br>
        <button (click)="onSubmit(myCityInput, refCityInput)">Pobierz czas!</button>


  `,
})
export class LocalisationComponent {
    public myCity: any;
    public refCity: string;
 // @Input() myCity;

onSubmit(myCityInput, refCityInput)
{
   this.myCity=myCityInput.value;
   this.refCity=refCityInput.value;
   console.log(this.myCity + " + " + this.refCity);
}

}
 