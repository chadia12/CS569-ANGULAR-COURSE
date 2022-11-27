import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IStud } from './student.interface';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  getAllStds() {
    return this.httpClient.get<{success:number, data:IStud[]}>(environment.server+'/stds');
  }
  getStd(id:string) {
    return this.httpClient.get<{success:number, data:IStud}>(environment.server+`/stds/${id}`);
  }
  addStd(formData: FormData) {
    return this.httpClient.post<{success:number, data:IStud}>(environment.server+`/stds`, formData);
  }

  updateStd(student:IStud, id:string) {
    return this.httpClient.patch<{success:number, data:IStud}>(environment.server+`/stds/${id}`, student);
  }

  deleteStd(id:string) {
    return this.httpClient.delete<{success:number, data:IStud}>(environment.server+`/stds/${id}`)
  }
}
