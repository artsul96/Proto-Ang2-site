import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({ 
  selector: 'localisation',
  template: `
  <div class="location" >
  <div>
  <p>Twoje miejsce pobytu</p>
  <input type="text" #myCityInput>
  </div>
  <div>
  <p>Miejsce odniesienia</p>
  <input type="text" #refCityInput>
  </div>
  <button (click)="onSubmit(myCityInput, refCityInput)">Pobierz czas!</button>
  </div>


  `,
  styleUrls: ['./localisation.styles.css']
})
export class LocalisationComponent {
  // public CityArrayExport: any;
  @Output() myCity = new EventEmitter<{}>();
  @Output() refCity = new EventEmitter<{}>();

onSubmit(myCityInput, refCityInput)
{ 
   this.myCity.emit(myCityInput.value);
   this.refCity.emit(refCityInput.value);
}

}
 