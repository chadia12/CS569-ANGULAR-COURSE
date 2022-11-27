import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>Welcom to Assignment 6</h1>
    </header>
    <nav>
      <a [routerLink]="['', 'home']">Home</a>
      <a [routerLink]="['', 'users']">Users</a>
    </nav>
    <router-outlet></router-outlet>
    <footer>© 2022 Assignement 6</footer>
  `,
  styles: [
    `
    h1{
text-align: center;
    },
      * {
        margin: 20px;
      }
      ,
      footer {
        display: flex;
        justify-content: center;
        padding: 5px;
        background-color: #45a1ff;
        color: #fff;
      }
    `,
  ],
})
export class AppComponent {}
