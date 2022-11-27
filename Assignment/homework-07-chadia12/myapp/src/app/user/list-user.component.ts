import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Component({ 
  selector: 'app-list-user',
  template: `
  <button (click)="add()" >Add new user</button>
    <div class="d-flex flex-wrap">
    
      <app-user *ngFor="let user of users" [user]="user"></app-user>
      
    </div>
  `,
  styles: [],
})
export class ListUserComponent {
  users: IUser[] = [];
  addedUser!: IUser;
  private userService = inject(UserService);
  
  constructor(private router: Router) {
   this.addedUser= this.router.getCurrentNavigation()?.extras.state as IUser; 
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response.data;
      if(this.addedUser) this.users = [...this.users, this.addedUser]
    });
  }
  add(){
    this.router.navigate(['','users','add'])
  }
}
