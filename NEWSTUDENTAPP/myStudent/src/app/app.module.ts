import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckTokenGuard } from './attach-token.guard';
import { StateService } from './state.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AttachTokenInterceptor } from './attach-token.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

const refreshToken = (stateService: StateService) => {
  return () => {
    const stored_state = localStorage.getItem('STATE');
    if (stored_state) {
      stateService.state.next(JSON.parse(stored_state));
    }
  };
};

const MY_ROUTES: Routes = [
  { path: '', component: HomeComponent, title: 'Welcome' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  {
    path: 'studs',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
    canActivate: [CheckTokenGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule ,
    ReactiveFormsModule, 
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(MY_ROUTES),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [StateService],
      useFactory: refreshToken,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AttachTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
