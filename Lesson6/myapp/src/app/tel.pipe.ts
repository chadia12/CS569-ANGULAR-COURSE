import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tel'
})
export class TelPipe implements PipeTransform {

  transform(value: string): string {
    return "+1" +value;
  }

}
