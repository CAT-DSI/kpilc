import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { KPILCLoginModel, loginModel, requestReset,User } from '../models/auth.model';
import { getFromStorage, removeFromStorage, saveToStorage } from '../Util/storage';
import { LOGGED_IN_USER_KEY, ACCESS_TOKEN_KEY } from 'src/config';
import { catchError, map } from 'rxjs/operators';
import { AnyAaaaRecord } from 'dns';
import { MatSnackBar } from '@angular/material/snack-bar';
import { localstoarage } from '../Util/localstorage';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from './data.service';
import { Globals } from '../models/Global';

//const API_BASE_URL = "http://frgnbbir01.cat.groupecat.com:88/co2api/api";
//const API_BASE_URL= 'http://localhost:11515/api'
const API_BASE_URL  ="http://freqxwsqlr7.cat.groupecat.com/api";
//const API_BASE_URL  ="http://freqxwsql04.cat.groupecat.com/api";
 //const API_BASE_URL  ="http://kpilc.groupecat.com/api";
//const API_BASE_URL = "http://113.96.6.90/CATLCR/api";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageSub= new Subject<string>();
  constructor(private _httpClient: HttpClient,private _snackBar: MatSnackBar, private globals: Globals,private dataservice:DataService,public _localstorag: localstoarage,
     private router: Router) { }
     watchStorage(): Observable<any> {
      return this.storageSub.asObservable();
    }
    setItem(key: string, data: any) {
      localStorage.setItem(key, data);
      this.storageSub.next('added');
    }
  logout(redirectToLogin = true) {
    // removeFromStorage("user");

    // if (redirectToLogin) {
    //   this.router.navigate(['/login']);
    // }
  }
  ngOnInit() {
    removeFromStorage('userwer');    
  }
  authenticate = (login: loginModel): Observable<any> => {
    const href = API_BASE_URL + '/auth/Authenticate';
    let isAuth = new Subject<any>();
    this._httpClient.post(href, login).subscribe((data:any) => {
      if(data) {
        saveToStorage("user", data, true);
        isAuth.next(true);
      } else {
        isAuth.next(false);
      }
    },  error => {
        isAuth.next(error);
    },);
    return isAuth;
  }

  get(): Observable<any> {
    console.log('Calling getUser');
    const href = API_BASE_URL + '/auth/WindAuthenticate';
    let isAuth = new Subject<any>();

    return this._httpClient.post(href,null)
      .pipe(map((rslt: any) =>{
       saveToStorage("userwer", rslt);
        isAuth.next(true);
        return rslt;
      })
      ).pipe(catchError((error: Response) =>{  
        
       removeFromStorage('userwer');    
        this._snackBar.open("You are not authorized to access the Application  please contact to System Administator", '', { duration: 600000,  panelClass: ['mycsssnackbartest'] });
        return throwError(error);       
      }));
  }

  sendInitPass(value: requestReset): Observable<boolean> {
    const href = API_BASE_URL + '/auth/send';
    let result = new Subject<boolean>();
    this._httpClient.post(href, value).subscribe((sent:any) => {
      result.next(sent);
    });
    return result;
  }
   /**
   * returns if any user is logged in or not
   */
   isLoggedIn(): boolean {
    return !!getFromStorage(LOGGED_IN_USER_KEY);
  }

/**
   * get logged in user details
   */
getUser(): User {
  return this.isLoggedIn() ? getFromStorage(LOGGED_IN_USER_KEY) : null;
}
// get():Observable<string>{
//   const href = API_BASE_URL + '/auth/GetsUser';
// return this._httpClient.get(href,{responseType:"text"});
// }
// get = (): Observable<any> => {
//   const href = API_BASE_URL + '/auth/WindAuthenticate';
//   let isAuth = new Subject<any>();
//   this._httpClient.post(href,null).subscribe((data:any) => {
//     if(data) {
//       saveToStorage("user", data, true);
//       isAuth.next(true);
//     } else {
//       isAuth.next(false);
//     }
//   },  error => {
//       isAuth.next(error);
//   },);
//   return isAuth;
// }

  



  initPass(value: any): Observable<boolean> {
    const href = API_BASE_URL + '/auth/init';
    let result = new Subject<boolean>();
    this._httpClient.post(href, value).subscribe((sent:any) => {
      result.next(sent);
    });
    return result;
  }
}
