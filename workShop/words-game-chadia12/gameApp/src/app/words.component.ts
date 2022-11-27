import { NodeWithI18n, ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { GUESS_RESULT, IState } from './helper.interface';
import { StateService } from './state.service';

@Component({
  selector: 'app-words',
  template: `
    <div>
      <div class="scoreContainer">
        <p>
          Scoreboard = Correct:{{ win_count }} - Incorrect:
          {{ loss_count }}
        </p>
      </div>
      <div class="testDisplay">
        <p *ngFor="let charletter of solution_array; let i=index" (clik)="remove_letter(i)">{{ charletter }}</p>
        <button (click)="clear_Solution()">Clear</button>
      </div>
      <div>
        <div class="textConte">
          <span>
            <button (click)="initGame()">Shuffle</button>
            <button
              *ngFor="let letter of arrayLetter"
              class="textp"
              (click)="pick_Letter(letter)"
            >
              {{ letter }}</button
            >&nbsp; &nbsp;
            <button (click)="check_solution()">Check</button>
</span>
          &nbsp; &nbsp;
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .scoreContainer {
        width: 50%;
        background-color: #eeeeee;
        border: 2px solid black;
        padding: 20px;
        margin: 30px;
      }
      .textConte {
        width: 50%;
        padding: 20px;
        margin: 30px;
      }
      .textp {
        font-size: 20px;
        padding: 10px;
        margin-left: 10px;
      }
      .testDisplay {
        width: 50%;
        border: 2px solid black;
        padding: 20px;
        margin: 30px;
      }
    `,
  ],
})
export class WordsComponent implements OnDestroy {
  arrayLetter: string[] = [];
  complexity: number = 0;
  win_count: number = 0;
  loss_count: number = 0;
  solution_array: string[] =[];
  subscription !: Subscription
  constructor(private stateService: StateService) {
    
   this.subscription = this.stateService.state.subscribe((state: IState) => {
      this.complexity = state.complexity,
        this.win_count = state.win_count,
        this.loss_count = state.loss_count;
        this.initGame()
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
  check_solution(){
this.stateService.checkWord(this.solution_array.join(""))
.subscribe(response =>{
  if(response.valid){
this.stateService.state.next({
  ...this.stateService.state.value,
  win_count: this.stateService.state.value.win_count + 1,
  logs:[
    ...this.stateService.state.value.logs,
    {
      word: this.solution_array.join(""),
      result: GUESS_RESULT.Correct,
      timestamp:Date.now()
    }
  ]
})
  }else{
    this.stateService.state.next({
      ...this.stateService.state.value,
      loss_count: this.stateService.state.value.loss_count +1 ,
      logs:[
        ...this.stateService.state.value.logs,
        {
          word: this.solution_array.join(""),
          result: GUESS_RESULT.Incorrect,
          timestamp:Date.now()
        }
      ]
    })
  }
  localStorage.setItem('@GAME', JSON.stringify(this.stateService.state.value))
})
  }

  clear_Solution() {
    this.solution_array = [];
  }
  pick_Letter(e: string) {
    this.solution_array.push(e);
  }

  remove_letter(i:number){
this.solution_array = this.solution_array.filter((l,index) =>index!== i)
  }
  initGame(){
    this.arrayLetter = this.getRandomLettersArrayOf(this.complexity);
    this.clear_Solution()
  }
  private getRandomLettersArrayOf(length: number): string[] {
    let result: string[] = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (result.length < length) {
      const letter = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      if (!result.includes(letter)) result.push(letter);
    }
    return result;
  }
}
