import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from './user.interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpClient = inject(HttpClient);
  constructor() {}
    getData(){
return this.httpClient.get<IUser>(`https://randomuser.me/api/?results=10`);
    }
 
}
