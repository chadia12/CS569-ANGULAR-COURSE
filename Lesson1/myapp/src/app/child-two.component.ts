import { Component} from '@angular/core';
@Component({
    selector:'app-child-two',
    template: `<p>{{data.name}}</p>`,
    styles: [``]
})
export class ChildTwoComponent{
constructor(){}
data: {name:string} = {name:'Child Two'}
}