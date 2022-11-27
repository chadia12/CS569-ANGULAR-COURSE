import {
  Directive,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[cheatDirective]',
})
export class CheatDirectiveDirective  {
 @Input('cheatDirective') mycolor: string="#ffffff";
 @HostListener('dblclick') message(){
  alert(this.mycolor);
 }
  constructor() {}

}
