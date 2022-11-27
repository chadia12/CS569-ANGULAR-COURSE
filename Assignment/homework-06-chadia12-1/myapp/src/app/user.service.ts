import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isEmail = true;
  constructor(private httpclient: HttpClient) {}
  getData() {
    return this.httpclient.get<{ results: IUser[] }>(
      'https://randomuser.me/api/?results=10'
    );
  }
}
