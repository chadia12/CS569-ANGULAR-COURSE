import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  template: `
    <h3>List of Users</h3>
    <app-user *ngFor="let user of users" [user]="user"></app-user>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  constructor(private userService: UserService) {
    this.userService.getData().subscribe((response) => {
      this.users = response.results;
    });
  }

  ngOnInit(): void {}
}
