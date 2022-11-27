import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-two',
  template: `
    <p>
    {{data}} - child-two works!
    </p>
  `,
  styles: [
  ],
 
})
export class ChildTwoComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked {
data: string ='Hello'
  constructor() { console.log('Child 2: constructor')}
  ngAfterViewChecked(): void {
    console.log('Child 2: AfterViewChecked')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child 2: OnChanges')
  }
  ngDoCheck(): void {
    console.log('Child 2: Docheck');
  }
  ngAfterViewInit(): void {
    console.log('Child 2: AfterViewInit');
  }

  ngOnInit(): void {
    console.log('Child 2: onInit')
  }

}
