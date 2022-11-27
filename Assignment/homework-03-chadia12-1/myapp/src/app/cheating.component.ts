import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cheating',
  template: `
    <div class="divcheat">
      <h3>Cheating</h3>
      <p>
        Current computer choice is <span class="comp">{{ computer }}</span>
      </p>
    </div>
  `,
  styles: [
    `
      .divcheat {
        margin: auto;
        margin-bottom: 30px;
        width: 50%;
        border: 2px solid black;
        padding: 10px;
        text-align: center;
      }
    `,
    `
      .comp {
        font-size: 20px;
        font-weight: bold;
      }
    `,
  ],
})
export class CheatingComponent {
  @Input() computer: string = '';
}
