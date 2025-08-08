import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekPipe'
})
export class WeekPipe implements PipeTransform {

  constructor(private dp: DatePipe){

  }
  transform(value: unknown): string {
    let _date: Date;
    if(value instanceof Date ) {
      _date = value;
    }
    else {
      _date = new Date();
    }
    const _week = this.dp.transform(_date, 'w');
    const _year = _date.getFullYear()
    return `${_year}/W${_week}`;

  }

}
