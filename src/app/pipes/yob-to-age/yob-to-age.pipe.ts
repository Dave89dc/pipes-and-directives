import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yobToAge'
})
export class YobToAgePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const age = actualYear - value;
    return age;
  }

}
