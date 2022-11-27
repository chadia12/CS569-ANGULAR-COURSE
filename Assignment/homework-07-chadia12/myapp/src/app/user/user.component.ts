import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-md-9 col-lg-7 col-xl-5" style="width:100% ;">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-4">
              <div class="d-flex text-black">
                <div class="flex-shrink-0">
                  <img
                    src="{{ user.avatar }}"
                    alt="Generic placeholder image"
                    class="img-fluid"
                    style="width: 180px; border-radius: 10px;"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h5 class="mb-1">
                    {{ user.first_name }} - {{ user.last_name }}
                  </h5>
                  <p class="mb-2 pb-1" style="color: #2b2a2a;">
                    {{ user.email }}
                  </p>
                  <div class="d-flex pt-1">
                    <button
                      type="button"
                      class="btn btn-outline-primary me-1 flex-grow-1"
                      (click)="handleUserId()"
                    >
                      Detail
                    </button>
                    <button type="button" class="btn btn-primary flex-grow-1" (click)="handleDelete(user.id)">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class UserComponent implements OnInit {
  @Input() user!: IUser;
  constructor(private router: Router, private userService: UserService) {}
  handleUserId() {
    this.router.navigate(['', 'users','user', this.user.id]);
  }
  handleDelete(user_id: number){

this.userService.deleteUser(user_id)
.subscribe(() =>{
  //  this.user = this.user.filter( (user) => user.id !== user_id)
  console.log('user is deleted');
})
  }
  ngOnInit(): void {}
}
