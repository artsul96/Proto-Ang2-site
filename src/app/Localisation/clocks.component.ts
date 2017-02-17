import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-clocks',
  template: `
  {{myCity}} + {{refCity}}
`,
})
export class ClocksComponent {
  @Input() myCity;
  @Input() refCity;

}
