import { Directive, HostBinding, OnDestroy } from '@angular/core';

@Directive({
  selector: '[colorize]',
})
export class ColorizeDirective implements OnDestroy {
  colors = ['red', 'blue', 'green', 'yellow', 'maroon'];
  @HostBinding('style.color') parColor: string = 'black';
  constructor() {
    this.changeColor();
  }

  changeColor() {
    setInterval(() => {
      this.parColor =
        this.colors[Math.floor(Math.random() * this.colors.length)];
    }, 1000);
  }
  ngOnDestroy(){
     this.changeColor();
  }
}
