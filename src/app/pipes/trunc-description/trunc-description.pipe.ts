import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncDescription'
})
export class TruncDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    // if(value.length > 30){
    //   const truncDescription = value.slice(0, 30) + '...';
    //   return truncDescription;
    // }
    // return value;
    const numberOfChars = args[0] ? args[0] : 30
    return value.length > numberOfChars ? value.slice(0, numberOfChars) + '...' : value;
  }
}
