import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>List of users</h1>
  <button (click) = "display = !display">show/hidde</button>
  <app-users *ngIf="display"> </app-users>
  `,
  styles: [``]
})
export class AppComponent {
 display= false 
}
