import { CriteriaTextbox } from './../Util/criteria-textbox';
import { Injectable } from '@angular/core';
import { CriteriaDropdown } from '../Util/criteria-dropdown';
import { CriteriaBase, option } from '../Util/criteria-base';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { referentialModel } from '../models/Referential.Model';
import { criteriaModel, paramValue } from '../models/criteria.model';
import { CriteriaDate } from '../Util/criteria-date';
import { HttpHelperService } from './http-helper.service';
import { CriteriaMonth } from '../Util/criteria-month';
import { CriteriaWeek } from '../Util/criteria-week';
import { CriteriaNumeric } from '../Util/criteria-numeric';
import { BrandModelParams, ReportLog, ReportUserMrNumbers, ReportUserParams, ReportUserProduct, ReportUserStatus, UserCountriesModel, UserMarquesModel, UserRegimesModel } from '../models/report.model';
import { getFromStorage } from '../Util/storage';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {


  saveSearchCriterias(params: paramValue[]) : Observable<boolean> {
    return this.httpHelper.post('/criteria/saveValues', params);
  }
  saveproductlist(product: ReportUserProduct) : Observable<void> {
     return this.httpHelper.post('/Master/UpdateProductUser', product);
   }
   savelog(ReportLog: ReportLog) : Observable<void> {
    return this.httpHelper.post('/Master/Log', ReportLog);
  }
   savebrandlist(product: BrandModelParams) : Observable<void> {
    return this.httpHelper.post('/Master/UpdateBrandsForCurrentUser', product);
  }
   saveregimelist(product: ReportUserParams) : Observable<void> {
    return this.httpHelper.post('/Master/UpdateUserParams', product);
  }
  updateUserParamCountries(product: UserCountriesModel) : Observable<void> {
    return this.httpHelper.post('/Master/UpdateUserParamCountries', product);
  }
  updateUserRegimes(product: UserRegimesModel) : Observable<void> {
    return this.httpHelper.post('/Master/UpdateUserRegimes', product);
  }
  updateUserMarques(product: UserMarquesModel) : Observable<void> {
    return this.httpHelper.post('/Master/UpdateUserMarques', product);
  }
  updateMarqueAndRegime(product: ReportUserStatus) : Observable<void> {
    return this.httpHelper.post('/Master/UpdateMarqueAndRegime', product);
  }
   saveMrnumberlist(product: ReportUserMrNumbers) : Observable<void> {
    return this.httpHelper.post('/Master/UpdateMrNumberForCurrentUser', product);
  }

  loadDataToGraphe(Country:string, Start: Date, End: Date, ReportId: number) : Observable<void> {
    const href = '/Master';
    return this.httpHelper.get(`/Master/LoadDataToGraphe?country=${Country}&start=${Start}&end=${End}&idReport=${ReportId}`);
  }
  
  constructor(private httpHelper: HttpHelperService) {

    const brand=getFromStorage('brand');
   }


  getCriteriaReferentials(): Observable<referentialModel[]> {
    return this.httpHelper.get('/referential');
  }

  updateCriterias(criterias: criteriaModel[]): Observable<boolean> {
    return this.httpHelper.put('/criteria/bulkupdate', criterias);
  }

   // TODO: get from a remote source of question metadata
   getCriterias(actualCriterias: criteriaModel[]) {
    const crits:CriteriaBase<string>[] = [];

    actualCriterias.forEach((criteria,  index) => {
      switch(criteria.controlType){
        case 1: 
        crits.push(new CriteriaDate({
          Report_ID:criteria.reportID,
          CategoryID:criteria.CategoryID,
          key:criteria.name,
          label:criteria.label,
          required:criteria.required,
          order: index,
          value: criteria.defaultValue,
          id: criteria.id,
          IsoCodeLang:"en-US"

        }));
        break;
        case 2: 
        crits.push(new CriteriaTextbox({
          Report_ID:criteria.reportID,
          CategoryID:criteria.CategoryID,
          key:criteria.name,
          label:criteria.label,
          required:criteria.required,
          order: index,
          value: criteria.defaultValue,
          id: criteria.id,
          IsoCodeLang:"en-US"

        }));
        break;
        case 3:
          crits.push(new CriteriaDropdown({
            Report_ID:criteria.reportID,
            CategoryID:criteria.CategoryID,
            key:criteria.name,
            label:criteria.label,
            required:criteria.required,
            order: index,
            value: criteria.defaultValue,
            referential: criteria.referential,
            options: criteria.options,
            multiple: criteria.multiple,
            id: criteria.id,
            IsoCodeLang:"en-US"
          }));
        break;
        case 4:
          crits.push(new CriteriaMonth({
            Report_ID:criteria.reportID,
            CategoryID:criteria.CategoryID,
            key: criteria.name,
            label:criteria.label,
            required:criteria.required,
            order: index,
            id: criteria.id,
            IsoCodeLang:"en-US",
            value: new Date().toLocaleDateString()
          }));
        break; 
        case 5:
            crits.push(new CriteriaWeek({
              Report_ID:criteria.reportID,
              CategoryID:criteria.CategoryID,
            key: criteria.name,
            label:criteria.label,
            required:criteria.required,
            order: index,
            id: criteria.id,
            IsoCodeLang:"en-US"
        }));
        break;
        case 6:
            crits.push(new CriteriaNumeric({
              Report_ID:criteria.reportID,
              CategoryID:criteria.CategoryID,
            key: criteria.name,
            label:criteria.label,
            required:criteria.required,
            order: index,
            id: criteria.id,
            value: '2',
            IsoCodeLang:"en-US"

        }));
        break;
      }
      
    });

    //CriteriaBase<string>
    // const criterias: CriteriaBase<string>[] = [

    //   new CriteriaDropdown({
    //     key: 'brave',
    //     label: 'Bravery Rating',
    //     options: [
    //       {key: 'solid',  value: 'Solid'},
    //       {key: 'great',  value: 'Great'},
    //       {key: 'good',   value: 'Good'},
    //       {key: 'unproven', value: 'Unproven'}
    //     ],
    //     order: 3
    //   }),

    //   new CriteriaTextbox({
    //     key: 'firstName',
    //     label: 'First name',
    //     value: 'Bombasto',
    //     required: true,
    //     order: 1
    //   }),
    // ];

    return crits.sort((a, b) => a.order - b.order);
  }
}
