import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard.component';
import { ChooseOptionComponent } from './choose-option.component';
import { CheatingComponent } from './cheating.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    ChooseOptionComponent,
    CheatingComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
