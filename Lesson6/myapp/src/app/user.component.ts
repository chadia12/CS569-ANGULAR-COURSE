import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
     <div class="card">
      <img src="{{ user.picture.large }}" alt="Avatar" style="width:10%" />
      <div class="container">
        <h4>
          <b>{{ user.name.first }} {{ user.name.last }}</b>
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
        <span>phone: {{ user.phone | tel}}</span>
      </div>
    </div>
  `,
  styles: [` .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 2px 16px;
    width: 200px;
  }`
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent  {
  @Input('info') user!:{
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: {
        number: number;
        name: string;
      };
      city: string;
      state: string;
      country: string;
      postcode: number;
      coordinates: {
        latitude: string;
        longitude: string;
      };
      timezone: {
        offset: string;
        description: string;
      };
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    dob: {
      date: string;
      age: number;
    };
    registered: {
      date: string;
      age: number;
    };

    phone: string;
    cell: string;
    id: {
      name: string;
      value?: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  }

  constructor() { }

  

}
