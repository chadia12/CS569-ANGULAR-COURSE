import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Choices } from './choice';

@Component({
  selector: 'app-choose-option',
  template: `
    <div class="divoption">
      <h3>Choose an option</h3>
      <p>
        <button (click)="rockChange()">Rock</button> &nbsp;
        <button (click)="paperChange()">Paper</button>&nbsp;
        <button (click)="scissorschoiceChange()">Scissors</button>
      </p>
    </div>
  `,
  styles: [
    `
      .divoption {
        margin: auto;
        margin-bottom: 30px;
        width: 50%;
        border: 2px solid black;
        padding: 10px;
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseOptionComponent {
  @Output() choiceChange: EventEmitter<number> = new EventEmitter();

  rockChange() {
    this.choiceChange.emit(Choices.rock);
  }
  paperChange() {
    this.choiceChange.emit(Choices.paper);
  }

  scissorschoiceChange() {
    this.choiceChange.emit(Choices.scissors);
  }
}
