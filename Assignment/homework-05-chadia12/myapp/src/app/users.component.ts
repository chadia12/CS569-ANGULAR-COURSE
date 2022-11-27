import { Component, inject, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  template: `
    <app-user *ngFor="let user of users" [user]="user"></app-user>
  `,
  styles: [],
})
export class UsersComponent implements OnInit {
   users: IUser[] = [];
  private userService = inject(UserService);
  constructor() {
    this.userService.getData().subscribe((response) => {
       this.users = response.results;
      console.log(this.users);
    });
  }

  ngOnInit(): void {}
}
