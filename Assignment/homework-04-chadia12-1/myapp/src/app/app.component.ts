import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p colorize>This text will change color every second</p>
    <p [makeBigger]="size1">
      The size of this paragraph will be increased by 2px
    </p>
    <p [makeBigger]="size2">
      The size of this paragraph will be increased by 6px
    </p>
    <p>{{ name | swapLetter: 'a':'@' }}</p>
  `,
  styles: [``],
})
export class AppComponent {
  size1: number = 2;
  size2: number = 6;
  name: string = 'chadia';
}
