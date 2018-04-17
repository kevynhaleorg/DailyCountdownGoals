import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizefirst'
})
export class CapitalizefirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) return null;
    console.log(value)
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
