import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { UsersComponent } from './users.component';
import { TelPipe } from './tel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    TelPipe
  ],
  imports: [
    BrowserModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
