import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const firstChar = value[0];
    const firstCharToUpper = firstChar.toUpperCase();
    const restOfTheString = value.slice(1);
    const result = firstCharToUpper + restOfTheString;
    return result;
  }

}
