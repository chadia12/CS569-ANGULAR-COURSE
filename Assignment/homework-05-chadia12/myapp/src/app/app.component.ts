import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>List of Users</h1>
    <button (click)="display = !display">show/hidder</button>
    <br />
    <app-users *ngIf="display"></app-users> `,
  styles: [``],
})
export class AppComponent {
  display = false;
}
