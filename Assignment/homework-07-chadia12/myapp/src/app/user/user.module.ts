import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user.component';
import { AddUserComponent } from './add-user.component';
import { UpdateUserComponent } from './update-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail.component';

const routes: Routes = [
  // { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '', component: ListUserComponent, title: 'list of user' },
  { path: 'add', component: AddUserComponent, title: 'Add user' },
  { path: 'user/:user_id', component: UserDetailComponent, title: 'user' },
  {
    path: 'updateUser/:user_id',
    component: UpdateUserComponent,
    title: 'list of user',
  },
];

@NgModule({
  declarations: [
    ListUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
})
export class UserModule {}
