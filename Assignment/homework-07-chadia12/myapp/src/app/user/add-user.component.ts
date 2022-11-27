import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-add-user',
  template: `
    <form [formGroup]="formUser" (ngSubmit)="handleAddUser()">
      <div class="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Add new user!</div>
        <div class="input-container ic2">
          <input
            id="avatar"
            class="input"
            type="text"
            placeholder="Email "
            formControlName="email"
          />
        </div>

        <div class="input-container ic1">
          <input
            id="firstname"
            class="input"
            type="text"
            placeholder="first name "
            formControlName="first_name"
          />
        </div>
        <div class="input-container ic2">
          <input
            id="lastname"
            class="input"
            type="text"
            placeholder="last name "
            formControlName="last_name"
          />
        </div>

        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="text"
            placeholder="picture "
            formControlName="avatar"
          />
        </div>

        <button type="submit" class="submit">Save User</button>
      </div>
    </form>
  `,
  styles: [
    `
      .form {
        background-color: #15172b;
        border-radius: 20px;
        box-sizing: border-box;
        height: 600px;
        padding: 20px;
        width: 320px;
      }

      .title {
        color: #eee;
        font-family: sans-serif;
        font-size: 36px;
        font-weight: 600;
        margin-top: 30px;
      }

      .subtitle {
        color: #eee;
        font-family: sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-top: 10px;
      }

      .input-container {
        height: 50px;
        position: relative;
        width: 100%;
      }

      .ic1 {
        margin-top: 40px;
      }

      .ic2 {
        margin-top: 30px;
      }

      .input {
        background-color: #303245;
        border-radius: 12px;
        border: 0;
        box-sizing: border-box;
        color: #eee;
        font-size: 18px;
        height: 100%;
        outline: 0;
        padding: 4px 20px 0;
        width: 100%;
      }

      .cut {
        background-color: #15172b;
        border-radius: 10px;
        height: 20px;
        left: 20px;
        position: absolute;
        top: -20px;
        transform: translateY(0);
        transition: transform 200ms;
        width: 76px;
      }

      .cut-short {
        width: 50px;
      }

      .input:focus ~ .cut,
      .input:not(:placeholder-shown) ~ .cut {
        transform: translateY(8px);
      }

      .placeholder {
        color: #65657b;
        font-family: sans-serif;
        left: 20px;
        line-height: 14px;
        pointer-events: none;
        position: absolute;
        transform-origin: 0 50%;
        transition: transform 200ms, color 200ms;
        top: 20px;
      }

      .input:focus ~ .placeholder,
      .input:not(:placeholder-shown) ~ .placeholder {
        transform: translateY(-30px) translateX(10px) scale(0.75);
      }

      .input:not(:placeholder-shown) ~ .placeholder {
        color: #808097;
      }

      .input:focus ~ .placeholder {
        color: #dc2f55;
      }

      .submit {
        background-color: #08d;
        border-radius: 12px;
        border: 0;
        box-sizing: border-box;
        color: #eee;
        cursor: pointer;
        font-size: 18px;
        height: 50px;
        margin-top: 38px;

        text-align: center;
        width: 100%;
      }

      .submit:active {
        background-color: #06b;
      }
    `,
  ],
})
export class AddUserComponent implements OnInit {
  formUser = this.formBuilder.nonNullable.group({
    email: 'bella@miu.edu',
    first_name: 'Bella',
    last_name: 'keza',
    avatar: 'picture',
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
     private toster: ToastrService

  ) {}

  handleAddUser() {
    this.userService
      .addUser(this.formUser.value as IUser)
      .subscribe((response) => {
        this.toster.success('User is added successful')
        // console.log('user is added');
        this.router.navigate(['','users'],{state: response})
      });
  }

  ngOnInit(): void {}
}
