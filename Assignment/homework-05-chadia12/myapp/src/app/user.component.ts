import { Component, Input, OnInit } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-user',
  template: `
    <div class="card">
      <img src="{{ user.picture.large }}" alt="Avatar" style="width:10%" />
      <div class="container">
        <h4>
          <b>{{user.name.first}} {{ user.name.last }}</b>
        </h4>
        <p>
          address: {{ user.location.street.number }}
          {{ user.location.street.name }}
          {{ user.location.city }}
          {{ user.location.state }}
          {{ user.location.country }}
          {{ user.location.postcode }}
        </p>
        <span>Dod: {{ user.dob.date | date: 'MM/dd/YY' }} </span><br />
        <span>phone: {{ user.phone | tel }}</span> -->
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .container {
        padding: 2px 16px;
        width: 200px;
      }
    `,
  ],
})
export class UserComponent implements OnInit {
  @Input() user!: IUser;
  constructor() {}

  ngOnInit(): void {}
}
