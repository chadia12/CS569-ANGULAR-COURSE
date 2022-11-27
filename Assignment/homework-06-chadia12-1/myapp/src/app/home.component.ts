import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      <img src="./assets/back2.jpg" />
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
