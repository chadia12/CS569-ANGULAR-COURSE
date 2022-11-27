import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { GUESS_RESULT } from './helper.interface';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit{
@Input('appColor') status:string =''
@HostBinding('style.background-color') color: string ='';
  constructor() { }
  ngOnInit(): void {
    this.color = this.status === GUESS_RESULT.Correct? 'green':'red'
  }

}
