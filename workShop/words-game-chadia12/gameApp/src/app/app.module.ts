import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordsComponent } from './words.component';
import { HistoryComponent } from './history.component';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ColorDirective } from './color.directive';
import { StateService } from './state.service';

const routes: Routes=[
  {path:'word' , component:WordsComponent},
  {path:'history', component:HistoryComponent},
  {path:'setting', component:SettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    HistoryComponent,
    SettingsComponent,
    ColorDirective,
   
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
    , ReactiveFormsModule],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory:(stateService: StateService)=>{
return () =>{
  const stored_state = localStorage.getItem('@GAME')
  if(stored_state){
    stateService.state.next(JSON.parse(stored_state))
  }
}
    },
    deps:[StateService],
    multi: true
  }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
