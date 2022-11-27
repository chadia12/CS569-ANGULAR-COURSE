import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  
  <nav>
    <a [routerLink]="['','word']">Words Game</a>
    <a [routerLink]="['','history']">History</a>
    <a [routerLink]="['','setting']">Settings</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: [`
  *{
    margin:20px
  }
  `]
})
export class AppComponent {
  title = 'gameApp';
}
