import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  template: ` <div class="container">
    <h3>Scoreboard</h3>
    <p>
      Wins {{ data.winCount }} - Losses {{ data.lossCount }} - Ties
      {{ data.tieCount }}
    </p>
  </div>`,
  styles: [
    `
      .container {
        margin: auto;
        margin-bottom: 30px;
        width: 50%;
        border: 2px solid black;
        padding: 10px;
        text-align: center;
      }
    `,
  ],
})
export class ScoreboardComponent {
  @Input() data: {
    winCount: number;
    lossCount: number;
    tieCount: number;
    computerChoise: string;
  } = { winCount: 0, lossCount: 0, tieCount: 0, computerChoise: '' };
}
