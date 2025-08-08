import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { autoCompleteModel } from '../models/Referential.Model';
import { option } from '../Util/criteria-base';
import { HttpHelperService } from './http-helper.service';


@Injectable({
  providedIn: 'root'
})
export class ReferentialService {

  constructor(private httpHelper: HttpHelperService) { }
  getOptions(params: autoCompleteModel|any): Observable<option[]> {
    return this.httpHelper.post('/referential/options', params);
  }

//   saveplatform(user: Platformdata|any): Observable<void> {
//     return this.httpHelper.post('/Users/UpdatePlateformesByUser', user);
// }
  // getCountry(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Country>> {
  //   const aggrParams = {
  //     ...params,
  //     ...otherFilters
  //   };

  //   return this.httpHelper.get('/Master', { params: aggrParams });
  // }
  
  
}
