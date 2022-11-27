import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-user',
  template: `
    <p>
      list-user works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
