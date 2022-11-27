import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapLetter',
})
export class SwapLetterPipe implements PipeTransform {
  transform(value: string, text: string, repl: string): string {
    let newString: string = '';
    for (let i = 0; i < value.length; i++) {
      if (value[i].match(text)) {
        newString += repl;
      } else {
        newString += value[i];
      }
    }
    return newString;
  }
}
