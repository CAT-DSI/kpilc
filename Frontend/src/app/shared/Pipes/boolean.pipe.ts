import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanPipe'
})
export class BooleanPipe implements PipeTransform {

  transform(value: boolean): unknown {
    return value? 'Yes' : 'No';
  }

}
