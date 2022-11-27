import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> my counter</h1>
 <app-counter [init]="countValue" (counterChange)="handleChange($event)"> </app-counter>
  `,
  styles: [`
  h1 {color: red}
  `]
})
export class AppComponent {
  countValue: number = 5;
  handleChange(e:number){
console.log(e);
  }
  
}
