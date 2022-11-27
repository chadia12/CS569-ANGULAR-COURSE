import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { INITIAL_STATE, IState, ITry } from './helper.interface';
import { StateService } from './state.service';

@Component({
  selector: 'app-history',
  template: `
    <table *ngIf="logs.length; else play">
      <tr>
        <th>Word</th>
        <th>Result</th>
        <th>Date</th>
</tr>
<tr *ngFor="let log of logs" [appColor]="log.result">
  <td >{{log.word}}</td>
  <td>{{log.result}}</td>
  <td>{{log.timestamp}}</td>
</tr>
      </table>
      <ng-template #play>
        <p>Click <a [routerLink]="['','word']">here </a> to play</p>
        </ng-template>
        <button (click)="clear()">Clear History</button>
  `,
  styles: [
  ],

})
export class HistoryComponent implements OnInit, OnDestroy {
subscription!: Subscription;
logs:ITry[] = [];
  constructor(private stateSevirce: StateService) {
    this.subscription = this.stateSevirce.state.subscribe((state: IState) =>{
      this.logs = state.logs;
    })
   }
   clear(){
    this.stateSevirce.state.next(INITIAL_STATE)
    localStorage.clear()
   }
  ngOnDestroy(): void {
   this.subscription.unsubscribe()
  }

  ngOnInit(): void {
  }

}
