import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    <p>{{data}} - 
      child-one works!
    </p>
  `,
  styles: [
  ],
 
})
export class ChildOneComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked {
data: string = 'Hello'
  constructor() {
  setTimeout(() => {
    this.data = 'Hello changed to Welcom'
     console.log(this.data) 
  }, 5000);
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child 1: OnChange');
  };
  ngDoCheck(): void {
    console.log('Child 1: DoCheck');
  };
  ngAfterViewInit(): void {
    console.log('Child 1: AfterViewInit');
  };
  ngAfterViewChecked(): void {
    console.log('Child 1: AfterViewChecked');
  };

  ngOnInit(): void {
    console.log('Child 1: OnInit')
  };

}
