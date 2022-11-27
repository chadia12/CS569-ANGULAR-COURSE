import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IState } from './helper.interface';
import { StateService } from './state.service';

@Component({
  selector: 'app-settings',
  template: `
    <h4>Change the game complexity by changing the number</h4>
    <form [formGroup]="form" >
      <input type="number" formControlName="complexity" (change)="change_complexity()"/>
      <div *ngIf="complexity.errors?.['negative']">Number must be 3 or more</div>
      <div *ngIf="complexity.errors?.['overflow']">Number must be less than 26</div>
</form>
  `,
  styles: [
  ],

})
export class SettingsComponent implements OnInit, OnDestroy{
form = inject(FormBuilder).nonNullable.group({
  complexity:[0, Validators.required]
})
get complexity(){ return this.form.get('complexity') as FormControl;}
subscription!: Subscription;
  constructor(private stateService: StateService) { 
this.subscription = this.stateService.state.subscribe((state:IState) =>{
  this.form.get('complexity')?.patchValue(state.complexity)
})
  }

  change_complexity(){
if(this.form.value.complexity! < 3){
  this.complexity.setErrors({negative:true})
}else if(this.form.value.complexity! > 26){
  this.complexity.setErrors({overflow:true})
}else{
  this.complexity.setErrors(null)
  const new_state ={
    ...this.stateService.state.value,
    complexity: this.form.value.complexity as number
  }
  this.stateService.state.next(new_state)
  localStorage.setItem('APP_STATE', JSON.stringify(new_state))
}
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
