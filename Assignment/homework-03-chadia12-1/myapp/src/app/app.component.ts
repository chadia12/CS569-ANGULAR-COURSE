import { Component, DoCheck } from '@angular/core';
import { Choices } from './choice';
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Rock Paper Scissos Game</h1>
      <app-scoreboard [data]="state"> </app-scoreboard>
      <app-choose-option (choiceChange)="handleChanges($event)">
      </app-choose-option>
      <app-cheating [computer]="state.computerChoise"> </app-cheating>
    </div>
  `,
  styles: [
    `
      h1 {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements DoCheck {
  state: {
    winCount: number;
    lossCount: number;
    tieCount: number;
    computerChoise: string;
  } = { winCount: 0, lossCount: 0, tieCount: 0, computerChoise: '' };

  computerChoose() {
    this.state.computerChoise = Choices[Math.floor(Math.random() * 3)];
  }
  ngDoCheck(): void {
    this.computerChoose();
  }

  handleChanges(e: number) {
    // console.log("player",Choices[e]);
    // console.log("computer",this.state.computerChoise);
    this.compare(Choices[e], this.state.computerChoise);
  }

  compare(playerChoice: string, computerChoice: string) {
    //Checking for a tie
    if (playerChoice === computerChoice) {
      this.state.tieCount = this.state.tieCount + 1;
      return 'It is a tie';
    }

    //Check for Rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        this.state.winCount = this.state.winCount + 1;
        return 'Player Wins';
      } else {
        this.state.lossCount = this.state.lossCount + 1;
        return 'Computer Wins';
      }
    }
    //Check for Paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        this.state.lossCount = this.state.lossCount + 1;
        return 'Computer Wins';
      } else {
        this.state.winCount = this.state.winCount + 1;
        return 'Player Wins';
      }
    }
    //Check for Scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        this.state.lossCount = this.state.lossCount + 1;
        return 'Computer Wins';
      } else {
        this.state.winCount = this.state.winCount + 1;
        return 'Player Wins';
      }
    }
    return;
  }
}
