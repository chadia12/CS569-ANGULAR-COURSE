import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[makeBigger]',
})
export class MakeBiggerDirective implements OnInit {
  @Input('makeBigger') n!: number;
  @HostBinding('style.font-size.px') parSize = 16;
  @HostListener('dblclick') increaseSize() {
    this.parSize = this.parSize * this.n;
  }
  constructor() {}
  ngOnInit() {
    this.n;
  }
}
