import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: WelcomeComponent, title:'Home'},
  {path:'users', loadChildren:() => import('./user/user.module').then((mv) => mv.UserModule)},
  // { path: '**', redirectTo: 'home' }

];
@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule,BrowserAnimationsModule,ToastrModule.forRoot(), HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
