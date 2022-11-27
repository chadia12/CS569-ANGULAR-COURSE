
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    <p>
      {{data.name}}
    </p>
  `,
  styles: [`
    p{color: #037d50;
    font-size: 32px
  }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class ChildOneComponent  {
  constructor() { }
  data: {name: string} = {name:"Child One"}

}
