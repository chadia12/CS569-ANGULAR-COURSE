import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()"> - </button>
    {{init}}
    <button (click)="increment()"> + </button>
  `,
  styles: [
  ],

})
export class CounterComponent {
@Input() init!: number;
@Output() counterChange: EventEmitter<number> = new EventEmitter();


decrement(){
  this.counterChange.emit(this.init = this.init - 1)
}
increment(){
this.counterChange.emit(this.init = this.init + 1);
}

}
