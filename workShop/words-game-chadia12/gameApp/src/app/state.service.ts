import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INITIAL_STATE, IState } from './helper.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state: BehaviorSubject<IState> = new BehaviorSubject<IState>(INITIAL_STATE);
  constructor(private http: HttpClient) {}

  checkWord(word: string) {
    return this.http.get<{valid:boolean}>('http://localhost:3000/check/'+word)
  }
}
