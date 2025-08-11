import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


/*
  custom date pipe which returns the transformed value in current browser locale
 */
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, format = 'shortDate'): any {
    return new DatePipe('fr').transform(value, format);
  }

}
