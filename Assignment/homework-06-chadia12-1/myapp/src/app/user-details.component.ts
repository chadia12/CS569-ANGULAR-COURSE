import { Component, inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './user.interface';

@Component({
  selector: 'app-user-details',
  template: `
    <section class="vh-100" style="background-color: #f4f5f7;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-6 mb-4 mb-lg-0">
            <div class="card mb-3" style="border-radius: .5rem;">
              <div class="row g-0">
                <div
                  class="col-md-4 gradient-custom text-center text-white"
                  style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;"
                >
                  <img
                    src="{{ user.picture.large }}"
                    alt="Avatar"
                    class="img-fluid my-5"
                    style="width: 80px;"
                  />
                  <h5>{{ user.name.first }} {{ user.name.last }}</h5>
                  <p><button (click)="onUsers()">Back To Users List</button></p>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4">
                    <h6>Information</h6>
                    <hr class="mt-0 mb-4" />
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Email</h6>
                        <p class="text-muted">{{ user.email }}</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Phone</h6>
                        <p class="text-muted">{{ user.phone | tel }}</p>
                      </div>
                    </div>
                    <h6>Address</h6>
                    <hr class="mt-0 mb-4" />
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>street: {{ user.location.street.number }}</h6>
                        <p class="text-muted">
                          {{ user.location.street.name }} -
                          {{ user.location.city }} - {{ user.location.state }} -
                          {{ user.location.country }} - zipcode:
                          {{ user.location.postcode }}
                        </p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Date of Birth</h6>
                        <p class="text-muted">
                          {{ user.dob.date | date: 'MM/dd/YY' }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .gradient-custom {
        background: #f6d365;

        background: -webkit-linear-gradient(
          to right bottom,
          rgba(246, 211, 101, 1),
          rgba(253, 160, 133, 1)
        );

        background: linear-gradient(
          to right bottom,
          rgba(246, 211, 101, 1),
          rgba(253, 160, 133, 1)
        );
      }
    `,
  ],
})
export class UserDetailsComponent implements OnInit {
  user!: IUser;
  private router = inject(Router);
  constructor() {
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
  }
  onUsers() {
    this.router.navigate(['', 'users']);
  }
  ngOnInit(): void {}
}
