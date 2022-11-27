import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hex Color Guessing Game</h1>
    <p>Scoreboard: wins: {{ data.wins }} - Losses: {{ data.losses }}</p>
    <div
      class="divcolor"
      [ngStyle]="{ 'background-color': computerColor }" [cheatDirective]="computerColor"
    ></div>
    <button (click)="check(colors[0])" #button>{{ colors[0] }}</button
    >&nbsp;&nbsp;
    <button (click)="check(colors[1])" #button>{{ colors[1] }}</button
    >&nbsp;&nbsp;
    <button (click)="check(colors[2])" #button>{{ colors[2] }}</button>
    <!-- <button (click)="check(colors[0])" [disabled]="disbtn"]>{{ colors[0] }}</button
    >&nbsp;&nbsp;
    <button (click)="check(colors[1])" [disabled]="disbtn"]>{{ colors[1] }}</button
    >&nbsp;&nbsp;
    <button (click)="check(colors[2])" [disabled]="disbtn"]>{{ colors[2] }}</button> -->
    <p #result></p>
    <p #interval></p>
    <!-- <p>{{result}}</p>
    <p>{{interval}}</p> -->
  `,
  styles: [
    `
      .divcolor {
        width: 30%;
        border: 2px solid black;
        padding: 30px;
        margin-bottom: 20px;
      }
    `,
  ],
})
export class AppComponent implements AfterViewInit {
 

  data = { wins: 0, losses: 0 };
  computerColor = '#00ffff';
  colors = ['#00ffff', '#00ffff', '#00ffff'];
  disbtn = false;
  // time = 5;
  // result!:string;
  // interval!:string;

  @ViewChild('result') result!: ElementRef<HTMLParagraphElement>;
  @ViewChild('interval') interval!: ElementRef<HTMLParagraphElement>;
   @ViewChildren('button') buttons!: QueryList<ElementRef>;
  
  interval_id!: ReturnType<typeof setInterval>;
  ngAfterViewInit(){
    const store=  localStorage.getItem('@GAME')
    if(store){
      this.data = JSON.parse(store);
    }
    setTimeout(() => this.reset(),0)
   
  }
  check(userColor: string) {
     this.buttons.forEach((button) => (button.nativeElement.disabled = true));
    // this.disbtn = true;
    if (userColor === this.computerColor) {
      this.result.nativeElement.innerHTML = 'You won!!';
      // this.result= "You won!!";
      this.data.wins++;
    } else {
      this.result.nativeElement.innerHTML =
        'You lost!! the correct color was: ' + this.computerColor;
      // this.result="You lost!! the correct color was: " + this.computerColor;
      this.data.losses++;
    }
    localStorage.setItem('@GAME', JSON.stringify(this.data));
   let time = 5;
    this.interval_id = setInterval(() => {
      this.interval.nativeElement.innerHTML =
        'Resetting in ' + time + 'seconds...';
      // this.interval ="Resetting in " + this.time + "seconds...";
    time--;
      if (time < 0) {
        this.reset();
        clearInterval(this.interval_id);
      }
    }, 1000);
  }

  private reset() {
    this.colors = Array.from({ length: 3 }, this.generateRandomHexColor);
    this.computerColor = this.getRandomItemFromArray(this.colors);
    this.result.nativeElement.innerHTML = '';
    this.interval.nativeElement.innerHTML = '';
    // this.result ='';
    // this.interval ='';
    this.buttons.forEach((button) => (button.nativeElement.disabled = false));
    // this.disbtn = false;
  }

  private generateRandomHexColor(): string {
    return (
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  }

  private getRandomItemFromArray(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
