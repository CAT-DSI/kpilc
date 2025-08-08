import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';

import { BasicParams, DownloadFileFormats } from '../models/app';
import { ReportQueryResponse } from '../models/reports';
import { HttpHelperService } from './http-helper.service';
import { Report, CategorizedReport } from '../models/reports';
import { SessionsService } from './sessions.service';
import { CustomDatePipe } from 'src/app/shared/Pipes/custom-date.pipe';
import { environment as env } from 'src/environments/environment';


/*
  service to handle reportss
 */
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  categorizedReports = new BehaviorSubject<CategorizedReport[]>([]);
  reports = new BehaviorSubject<Report[]>([]);

  constructor(
    private httpHelper: HttpHelperService,
    private sessionsService: SessionsService,
    private datePipe: CustomDatePipe
  ) { }

  /*
    categorize reports by reportCategory
   */
  categorizeReports(reports: Report[]): CategorizedReport[] {
    return _.map(
      _.groupBy(reports, 'reportCategory'),
        (value, key) => ({
        categoryId: _.toNumber(key),
        reports: value
      })
    );
  }


  /*
    get all reports
   */
  getReports(categorize = true): Observable<Report[] | CategorizedReport[]> {
    return this.httpHelper.get('/report').pipe(
      map((reports: Report[]) => {
        this.reports.next(reports);
        return categorize ? this.categorizeReports(reports) : reports;
      })
    );
  }


  /*
    get report query for a report and for a particular session
   */
  getReportQuery(reportId: number, sessionId: number, params?: BasicParams): Observable<ReportQueryResponse> {
    const aggrParams = {
      inventorySessionId: sessionId,
      ...params
    };

    return this.httpHelper.get(`/report/${reportId}/query`, { params: aggrParams });
  }


  /*
    export/download report
   */
  exportReport(reportId: number, inventorySessionId: number, format: DownloadFileFormats, reportName: string) {
    const requestOptions = {
      params: {
        format,
        inventorySessionId
      },
      responseType: 'blob',
      observe: 'response'
    };

    //return this.httpHelper.get(`/report/${reportId}/download`, requestOptions)
    //  .subscribe(response => {
    //    const sessionName = _.find(this.sessionsService.sessionsList.value, { id: inventorySessionId }).name;
    //    const date = this.datePipe.transform(new Date(), env.exportReportName.dateFormat);
    //    const time = this.datePipe.transform(new Date(), env.exportReportName.timeFormat);

    //    const fileName = env.exportReportName.template
    //                      .replace('{reportName}', reportName)
    //                      .replace('{sessionName}', sessionName)
    //                      .replace('{date}', date)
    //                      .replace('{time}', time);

    //    const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    //    saveAs(response.body, `${fileName}.${format === 'CSV' ? 'csv' : 'xlsx'}`, { type: contentType });
    //  });
  }
}
