import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <header>
    <h1>Assignment 7</h1>
  </header>
  <nav>
    <a [routerLink]="['','home']">Home</a>
    <a [routerLink]="['users']">users</a>
  
    </nav>
    <router-outlet></router-outlet>
    <footer>© 2022 Assignement 7 </footer>
  `,
  styles: [`
  
  * {
        margin: 20px;
      }
      
  `]
})
export class AppComponent {
 
}
