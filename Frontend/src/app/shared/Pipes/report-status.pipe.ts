import { Pipe, PipeTransform } from '@angular/core';
import { reportStatus } from '../models/report.model';

@Pipe({
  name: 'reportStatusPipe'
})
export class ReportStatusPipe implements PipeTransform {


  transform(value: number): string {
    return reportStatus[value];
  }

}
