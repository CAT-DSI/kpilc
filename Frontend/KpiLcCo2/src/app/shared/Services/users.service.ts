import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { BasicParams, DownloadFileFormats, GenericApiResponse, PagingConfig } from '../models/app';
import { Center, CustomerCountriesModel, EmailModel, KpiSettingModel, MajorCustomerModel, OpenDaysDetModel, PlateformesModel, Platformdata, Productreport, ProfileModel, ReportCategoriesPfsModel, ReportOpenDaysModel, ReportsParamsModel, User, UserForm, countrydata, delayreport } from 'src/app/shared/models/auth.model';
import { HttpHelperService } from './http-helper.service';
import { Country } from '../models/country';
import { saveAs } from 'file-saver';
import { TranscodingFileTypes } from '../models/transcoding';
import { autoCompleteModel } from '../models/Referential.Model';
import { RefTranscoFpWex } from '../models/reports';


//const API_BASE_URL = "http://frgnbbir01.cat.groupecat.com:88/co2api/api";
//const API_BASE_URL = "http://localhost:11515/api";
const API_BASE_URL  ="http://freqxwsqlr7.cat.groupecat.com/api";
//const API_BASE_URL  ="http://freqxwsql04.cat.groupecat.com/api";
 //const API_BASE_URL  ="http://kpilc.groupecat.com/api";
/*
  to manage users operations
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpHelper: HttpHelperService
  ) { }


  /*
    get users,with basic query parameters
   */
  // getUsers(id: string | any, sort: string | any, pagination:string|any, params?: BasicParams, otherFilters?: any): Observable<Array<User>> {
  //   const aggrParams = {
  //     ...params,
  //     ...otherFilters
  //   };
  //  // http://localhost:11515/api/Users?userID=6BF01FAD-B9DA-4F6D-8B23-8ABD22C4D9D3&sortBy=desc
  //   const href = '/Users?userID=5cfcbc59-3b08-4b25-be8b-f8806d1afdec&sortBy=desc';
  //   return this.httpHelper.get(href,{ params: aggrParams });
  // }


  // getUsers(): Observable<void> {
  //   // const aggrParams = {
  //   //   ...params,
  //   //   ...otherFilters
  //   // };
  //   //const href = '/Users';
  //   // const href = `/Administration/GetAllProfiles`;
  //   // return this.httpHelper.get(href);
  //   const href = `/Users/GetAllUsers`;
  //   return this.httpHelper.get(href);
  // }
  getAllUplet(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/Management';
    return this.httpHelper.get(`/Management/GetAllUplet`);   
  }
  getUsers(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/Users';
    return this.httpHelper.get('/Users', {params});
  }
  getAllGetAllViaCustomers(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get(`/DelayReport/GetAllGetAllViaCustomers`, {params});   
  }

  getMajorCustomerCountries(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get(`/DelayReport/GetMajorCustomerCountries`, {responseType: 'blob'});   
  }
  getAllCategoriesPFByCategory(type:number,params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get(`/DelayReport/GetAllCategoriesPFByCategory?type=${type}`, {params});   
  }
  getMajorCustomers(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get(`/DelayReport/GetMajorCustomers`);   
  }
  updateMajorCustomerCountry(user: CustomerCountriesModel, userId?: number): Observable<void> {

    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/UpdateMajorCustomerCountry', user) :
      this.httpHelper.post('/DelayReport/UpdateMajorCustomerCountry', user);
  }

  updateRefTranscoFpWex(user: RefTranscoFpWex, userId?: number): Observable<void> {
    return _.isUndefined(userId) ?
      this.httpHelper.post('/Management/UpdateRefTranscoFpWex', user) :
      this.httpHelper.post('/Management/UpdateRefTranscoFpWex', user);
  }

  insertDealerShipmentParam(user: delayreport, userId?: number): Observable<void> {
    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/insertDealerShipmentParam', user) :
      this.httpHelper.post('/DelayReport/insertDealerShipmentParam', user);
  }

getRefSupplierForDelayReports(params: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/DelayReport/GetRefSupplierForDelayReports?country=${params}`, { params: aggrParams });
  }

 getRefDealerCodes(params: string, brands: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/DelayReport/GetRefDealerCodes?country=${params}&brand=${brands}`, { params: aggrParams });
  }


 getAllDealerShipmentCodes(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get(`/DelayReport/GetAllDealerShipmentCodes`, {params});   
  }

  getAllReportParamsByCountryReport(country:string) : Observable<GenericApiResponse<User>> {
    debugger
    const href = '/DelayReport';
    return this.httpHelper.get(`/DelayReport/GetAllReportParamsByCountryReport/${country}`);
  }

deleteDealerShipmentParam(userId: number): Observable<void> {
    return this.httpHelper.get(`/DelayReport/DeleteDealerShipmentParam/${userId}`);
  }
  deleteEmailById(userId: string): Observable<void> {
    return this.httpHelper.get(`/EmailAdministration/DeleteEmailById/${userId}`);
  }

  deleteMajorCustomer(userId: string): Observable<void> {
    return this.httpHelper.get(`/DelayReport/DeleteMajorCustomer/${userId}`);
  }
  getDelayReport(type:number,params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get(`/DelayReport/GetAllReportParamsByReport/${type}`, {params});
   
  }
  
  getAllEmailtemForListing(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/EmailAdministration';
    return this.httpHelper.get(`/EmailAdministration/GetAllEmailtemForListing/`, {params});
   
  }

  getProductReport(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get('/DelayReport/GetAllProductWithKpi', {params});
  }
  getRegime(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get('/DelayReport/GetRegimes', {params});
  }
  GetAllKpiSetting(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get('/DelayReport/GetAllKpiSetting', {params});
  }
  getProfile(): Observable<void> {
   
    const href = `/Administration/GetAllProfiles`;
    return this.httpHelper.get(href);
   
  }

  downloadFile(fileType: TranscodingFileTypes, format = DownloadFileFormats.EXCEL) {
    const requestOptions = {
      params: { format },
      responseType: 'blob'
    };

    return this.httpHelper.get(`/transcoding/${fileType}/download`, requestOptions)
      .subscribe(response => {
        const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        saveAs(response, `${fileType}.xlsx`, { type: contentType });
      });
  }

 
  getCountry(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };

    return this.httpHelper.get('/Master', { params: aggrParams });
  }
  addMajorCustomer(user: MajorCustomerModel, userId?: number): Observable<void> {     
    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/AddMajorCustomer', user) :
      this.httpHelper.post('/DelayReport/AddMajorCustomer', user);
  }
   /*
    get a user by its id
   */
  getUser(userId: number): Observable<User> {
    return this.httpHelper.get(`/Users/GetCountryByUser/${userId}`);
  }
  getReport(userId: number): Observable<User> {
    return this.httpHelper.get(`/Administration/GetReportsNorService/${userId}`);
  }
  getProfileReport(profileId: number): Observable<User> {
    return this.httpHelper.get(`/Administration/GetProfileReports/${profileId}`);
  }
  GetReportsNorProfile(profileId: number): Observable<User> {
    return this.httpHelper.get(`/Administration/GetReportsNorProfile/${profileId}`);
  }
  getVersion(): Observable<void> {
    return this.httpHelper.get(`/Master/GetVersion`);
  }
  getUserPlatformCountry(userId: number): Observable<User> {
    return this.httpHelper.get(`/Users/GetPlatformByUser/${userId}`);
  }
  getOpenDaysByCountryAndYear(country:string,year:number,params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };    
    return this.httpHelper.get(`/DelayReport/GetOpenDaysByCountryAndYear?codeCountry=${country}&year=${year}`, {params});   
  }
 
  
  exportclick():Observable<void> {
  
    return this.httpHelper.get(`/Users/ExportClick`);
  }

  /*
    delete a user by id
   */
  deleteUser(userId: number): Observable<void> {
    return this.httpHelper.get(`/Users/DeleteUser/${userId}`);
  }
  deleteReportParams(paramId: number): Observable<void> {
    return this.httpHelper.get(`/DelayReport/DeleteReportParams/${paramId}`);
  }
  deletedealyreportUser(userId: number): Observable<void> {
    return this.httpHelper.get(`/DelayReport/DeleteUser/${userId}`);
  }
  deleteUser1(userId: number): Observable<void> {
    return this.httpHelper.get(`/DelayReport/DeleteProductRegime/${userId}`);
  }
  deleteReportWeb_CategoryPF(user: ReportCategoriesPfsModel|any, userId?: number): Observable<void> {  
     
    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/DeleteReportWeb_CategoryPF', user) :
      this.httpHelper.post('/DelayReport/DeleteReportWeb_CategoryPF', user);    
  }

  getAccessKey(email: string): Observable<void> {
    return this.httpHelper.get(`/Users/GetAccessKey/${email}`);
  }

  /*
    create/update a user
    its update if the userId is passed, otherwise its create new
   */

    saveProfile(user: ProfileModel|any): Observable<void> {
      return this.httpHelper.post('/Administration/CreateProfile', user);
  }
    savecountry(user: countrydata|any): Observable<void> {
        return this.httpHelper.post('/Users/UpdateCountriesByUser', user);
    }
    saveplatform(user: Platformdata|any): Observable<void> {
      return this.httpHelper.post('/Users/UpdatePlateformesByUser', user);
  }
  updateOpenDays(user: ReportOpenDaysModel, userId?: number): Observable<void> {
     
    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/UpdateOpenDays', user) :
      this.httpHelper.post('/DelayReport/UpdateOpenDays', user);
  }
  updatePlateForme(user: PlateformesModel, userId?: number): Observable<void> {
     
    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/UpdatePlateForme', user) :
      this.httpHelper.post('/DelayReport/UpdatePlateForme', user);
  }
  saveUser(user: UserForm, userId?: number): Observable<void> {

    return _.isUndefined(userId) ?
      this.httpHelper.post('/Users/SaveUser', user) :
      this.httpHelper.post('/Users/UpdateUser', user);
  }
  saveProductWithKpi(user: delayreport, userId?: number): Observable<void> {

    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/AddUpdateReportParams', user) :
      this.httpHelper.post('/DelayReport/AddUpdateReportParams', user);
  }

  updateEmailItem(user: EmailModel, userId?: string): Observable<void> {
debugger
console.log("InsertEmailItem", user);
    return userId == null ?
      this.httpHelper.post('/EmailAdministration/InsertEmailItem', user) :
      this.httpHelper.post('/EmailAdministration/UpdateEmailItem', user);
  }

  saveProductWithKpiwaybill(user: ReportsParamsModel, userId?: number): Observable<void> {
 
    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/AddUpdateReportParams', user) :
      this.httpHelper.post('/DelayReport/AddUpdateReportParams', user);
  }
  AddUpdateProductWithKpi(user: Productreport, userId?: number): Observable<void> {

    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/AddUpdateProductWithKpi', user) :
      this.httpHelper.post('/DelayReport/AddUpdateProductWithKpi', user);
  }
  UpdateKpiSetting(user: KpiSettingModel, userId?: number): Observable<void> {

    return this.httpHelper.post('/DelayReport/UpdateKpiSetting', user);
      
  }
  
  InsertPRoductRegime(user: Productreport, userId?: number): Observable<void> {

    return _.isUndefined(userId) || userId==null ?
      this.httpHelper.post('/DelayReport/InsertPRoductRegime', user) :
      this.httpHelper.post('/DelayReport/UpdateProductRegime', user);
  }
  getOpenDaysDetByCountryAndYear(country:string,year:number,params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    debugger
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get(`/DelayReport/GetOpenDaysDetByCountryAndYear?codeCountry=${country}&year=${year}`, {params});   
  }

  getPlateformesUCountry(country:string,params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<User>> {
    debugger
    const aggrParams = {
      ...params,
      ...otherFilters
    };    
    return this.httpHelper.get(`/DelayReport/GetPlateformesUCountry?codeCountry=${country}`,{params});   
  }

  addReportWeb_CategoryPF(user: ReportCategoriesPfsModel, userId?: number): Observable<void> {

    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/AddReportWeb_CategoryPF', user) :
      this.httpHelper.post('/DelayReport/AddReportWeb_CategoryPF', user);
  }
  deleteFromWeb_OpenDaysDet(id:number):Observable<void> {
    
    return this.httpHelper.get(`/DelayReport/DeleteFromWeb_OpenDaysDet/${id}`);
  }

  insertOpenDaysDet(user: OpenDaysDetModel, userId?: number): Observable<void> {
     
    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/InsertOpenDaysDet', user) :
      this.httpHelper.post('/DelayReport/InsertOpenDaysDet', user);
  }
}

