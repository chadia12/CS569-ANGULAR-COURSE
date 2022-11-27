import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { TelPipe } from './tel.pipe';
import { UserComponent } from './user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserDetailsComponent } from './user-details.component';
import { CheckEmailGuard } from './check-email.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'users', component: UsersComponent, title: 'Users' },
  {path:'user/:email', component: UserDetailsComponent, title:'user Email', canActivate:[CheckEmailGuard]},
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    TelPipe,
    HomeComponent,
    UserDetailsComponent,
   
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
