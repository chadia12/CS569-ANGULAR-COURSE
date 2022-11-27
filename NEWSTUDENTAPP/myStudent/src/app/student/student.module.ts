import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { ListComponent } from './list.component';
import { StudentComponent } from './student.component';
import { UpdateComponent } from './update.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const MY_ROUTES: Routes = [
  { path: '', component: ListComponent, title: 'Students' },
  { path: 'add', component: AddComponent, title: 'add new student' },
  { path: 'update/:std_id', component: UpdateComponent, title: 'update student' },
];
@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    StudentComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule, RouterModule.forChild(MY_ROUTES)
  ]
})
export class StudentModule { }
