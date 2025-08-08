import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoryModel, reportModel } from '../models/report.model';
import { HttpHelperService } from './http-helper.service';
  
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpHelper: HttpHelperService) {}

  updateReport(report: reportModel) {
    return this.httpHelper.post(`/report/update`, report);
  }

  getReports(userid : number): Observable<reportModel[]> {
    return this.httpHelper.get(`/report/GetAllSupportedReports/${userid}`);
  }


  getCategories(userid : number) :  Observable<categoryModel[]> {
     return this.httpHelper.get(`/report/GetAllSupportedReportsall/${userid}`);
  }
  getCategoriesbasedonid(userid : number) :  Observable<categoryModel[]> {
    return this.httpHelper.get(`/report/GetAllSupportedReports/${userid}`);
 }

  
  getHeaderMenu(userid : number) :  Observable<categoryModel[]> {
    return this.httpHelper.get(`/report/ShowmenuOnProfile/${userid}`);
 }

  
  

  getReport(id: string | any,userid: string | any, country?:string |any, ChargingType?:string|any,majorCustomer?:string|any, brand?:string|any,forConfig: boolean = false) : Observable<reportModel> {
    //getReport(id: string | any,forConfig: boolean = false) : Observable<reportModel> {
    debugger
    // if(country){
    //   country = country.filter(item => item!== -1);
    // }
     const href = `/report/ID/${id}/UserId/${userid}/country/${country}/ChargingType/${ChargingType}/majorCustomer/${majorCustomer}/brand/${brand}/forConfig/${forConfig}`;
    //const href = `/report/ID/${id}/forConfig/${forConfig}`;
     return this.httpHelper.get(href);
  }
}
 