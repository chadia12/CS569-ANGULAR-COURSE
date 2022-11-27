import { Component, inject,ViewEncapsulation } from '@angular/core';
import { IUser } from './user.interface';
import {UserService} from './user.service'

@Component({
  selector: 'app-users',
  template: `
   <app-user *ngFor="let user of data.results" [info]="user"> </app-user>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent {
   data!:IUser;
   private userService = inject(UserService)
  constructor() {
this.userService.getData().subscribe(response =>{
  this.data = response;
})
   }

  

}
