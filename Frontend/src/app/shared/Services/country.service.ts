import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { GenericApiResponse, BasicParams } from '../models/app';
import { Country, CountryForm, PF } from '../models/country';
import { HttpHelperService } from './http-helper.service';
import { ReportsParamsModel, UserForm } from '../models/auth.model';
import { CountryEx } from '../models/report.model';


/*
  service for managing countries
 */
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private httpHelper: HttpHelperService
  ) { }


  /*
    get countries
   */
  getCountries(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };

    return this.httpHelper.get('/Master', { params: aggrParams });
  }
  getCountriesEx(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };

    return this.httpHelper.get('/DelayReport/GetAllCountriesEx', { params: aggrParams });
  }

  getAllReportForEmails(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    return this.httpHelper.get('/EmailAdministration/GetAllReportForEmails', { params: aggrParams });
  }
  
  getAllProductRegimes(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    return this.httpHelper.get('/EmailAdministration/GetAllProductRegimes', { params: aggrParams });
  }

  getProfiles(params?: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get('/Administration/GetAllProfiles', { params: aggrParams });
  }
  getPlateformesByUserCategoryReport(categoryId:number,country:string, userId: number,params?: string): Observable<GenericApiResponse<Country>> {
   debugger
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/MonthlyPlatformReport/GetPlateformesByUserCategoryReport?categoryID=${categoryId} &country=${country} &userId=${userId}`, { params: aggrParams });
  }

  GetPendingProductsToParams(params?: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,
     
    };

    return this.httpHelper.get('/DelayReport/GetPendingProductsToParams', { params: aggrParams });
  }
  GetRegime(params?: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,
     
    };

    return this.httpHelper.get('/DelayReport/GetRegimes', { params: aggrParams });
  }
  getProduct(params?: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,
     
    };

    return this.httpHelper.get('/DelayReport/GetPendingProductsToParams', { params: aggrParams });
  }
  GetRegimes(params?: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,
     
    };

    return this.httpHelper.get('/DelayReport/GetRegimes', { params: aggrParams });
  }
  getAllUpletByCountryForBrands(params: string, type: number): Observable<GenericApiResponse<CountryEx>> {
    const aggrParams = {
      params,
     
    };
 
    return this.httpHelper.get(`/DelayReport/GetAllUpletByCountryForBrands?country=${params} &type=${type}`, { params: aggrParams });
  }
  getAllMajorMarqueByCountryOutOfTable(params: string): Observable<GenericApiResponse<CountryEx>> {
    const aggrParams = {
      params,     
    }; 
    return this.httpHelper.get(`/DelayReport/GetAllMajorMarqueByCountryOutOfTable?country=${params}`, { params: aggrParams });
  }
  getAllPlateformesWithoutName(params: string, type: number): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/DelayReport/GetAllPlateformesWithoutName/?type=${type} &country=${params}`, { params: aggrParams });
  }

  getAllEmailsReportsItemByIDForEditing(type: string, params?: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/EmailAdministration/GetAllEmailsReportsItemByIDForEditing/?id=${type}`, { params: aggrParams });
  }

  getUserProductsByCountryForInserting(params: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/EmailAdministration/GetUserProductsByCountryForInserting/?country=${params}`, { params: aggrParams });
  }
  getUserProductsByCountryBrandForInserting(params: string, marque: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/EmailAdministration/GetUserProductsByCountryBrandForInserting/?country=${params}&marque=${marque}`, { params: aggrParams });
  }

  getAllWebFrequencies(params?: BasicParams,): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/EmailAdministration/GetAllWebFrequencies`, { params: aggrParams });
  }

  getUserMarqueByCountryForInserting(params: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/EmailAdministration/GetUserMarqueByCountryForInserting/?country=${params}`, { params: aggrParams });
  }

  saveProductWithKpi(user: ReportsParamsModel, userId?: number): Observable<void> {
 
    return _.isUndefined(userId) ?
      this.httpHelper.post('/DelayReport/AddUpdateReportParams', user) :
      this.httpHelper.post('/DelayReport/AddUpdateReportParams', user);
  }

  getAllCountries(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<CountryEx>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    const href = '/DelayReport';
    return this.httpHelper.get('/DelayReport/GetAllCountriesEx', { params: aggrParams });
  }

  

  
  /*
    get a country by its id
   */
  getCountry(countryId: number): Observable<Country> {
    return this.httpHelper.get(`/country/${countryId}`);
  }

  /*
    delete a country by id
   */
  deleteCountry(countryId: number): Observable<void> {
    return this.httpHelper.delete(`/country/${countryId}`);
  }
  

  /*
    create/update a country
    its update if the countryId is passed, otherwise its create new
   */
  saveCountry(country: CountryForm, countryId?: number): Observable<void> {
    return _.isUndefined(countryId) ?
      this.httpHelper.post('/country', country) :
      this.httpHelper.put(`/country/${countryId}`, country);
  }
 
  Getpf(country: UserForm|any, countryId?: number): Observable<void> {
    debugger
    return _.isUndefined(countryId) ?
    this.httpHelper.post('/Master/getAllPlatformesByListOfCountries', country):   this.httpHelper.put('/country', country) ;
     
  }
  getallupdatebycountrgetProduct(params: string, type: number): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,
     
    };
    return this.httpHelper.get(`/DelayReport/GetAllUpletByCountry/?country=${params} &type=${type}`, { params: aggrParams });
  }
  getRefSupplierForDelayReports(params: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/DelayReport/GetRefSupplierForDelayReports?country=${params}`, { params: aggrParams });
  }
  getAllRegimes(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };

    return this.httpHelper.get('/Management/GetAllRegimes', { params: aggrParams });
  }

 getRefDealerCodes(params: string, brands: string): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      params,     
    };
    return this.httpHelper.get(`/DelayReport/GetRefDealerCodes?country=${params}&brand=${brands}`, { params: aggrParams });
  }

  getYears(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Country>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };
    return this.httpHelper.get('/DelayReport/GetAllYears', { params: aggrParams });
  }
}
