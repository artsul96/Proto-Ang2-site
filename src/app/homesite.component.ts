import { Component, Input } from '@angular/core';

@Component({
  selector: 'homesite',
  template: `
 {{myCity}} i tekst i coś tam {{refCity}}
 `,
})
export class HomeComponent {
  @Input() myCity;
  @Input() refCity;


}
