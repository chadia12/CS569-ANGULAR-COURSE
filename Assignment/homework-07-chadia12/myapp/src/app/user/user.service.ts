import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  getAllUsers(){
  return  this.httpClient.get<{data:IUser[]}>(environment.server+'/users')
  }
  getUserById(user_id: number){
  return  this.httpClient.get<{data:IUser}>(environment.server+`/users/${user_id}`)
  }
  addUser(user:IUser){
  return  this.httpClient.post<IUser>(environment.server+'/users',user)
  }
  updateUser( user:IUser){
return this.httpClient.patch<IUser>(environment.server+`/users/${user.id}`, user)
  }

  deleteUser(user_id:number){
    return this.httpClient.delete(environment.server+`/users/${user_id}`)
  }
}


