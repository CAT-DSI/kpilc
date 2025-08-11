import { AuthService } from 'src/app/shared/Services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { getFromStorage, removeFromStorage, saveToStorage } from '../Util/storage';
import { HttpErrorResponse } from '@angular/common/http';
import { ClientError } from '../models/auth.model';
import { truncate } from 'fs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { localstoarage } from '../Util/localstorage';
import { LocalStorageService } from 'ngx-webstorage';
import { Globals } from '../models/Global';
@Injectable({
  providedIn: 'root'
})
export class ReportGuard  {
  reporturl:any;
  authenticate:boolean;
  
  
  constructor(
    private globals: Globals,
    private storage:LocalStorageService,
    private router: Router,public _localstorag: localstoarage
    , private _snackBar: MatSnackBar,private authService:AuthService
  ) { }

  /*
    to see if the given route can be activated,
    this one here is checking if a user can activate authenticated routes
   */
    canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //  const user = getFromStorage('userwer');
    // // for any other URL if user is logged-in then continue
    //  if (user && user.isAuthenticated) return true;

   // return true;
    // // if(state.url === '/login' || state.url.split('/').indexOf('initpass') !== -1) return true;
     // this.router.navigate(['/reports/All']);
    
     
      this.authService.get().subscribe(username=>{
         this.reporturl=username;
         if(username)
         {
         saveToStorage("userwer",  this.reporturl, true);
         this.authenticate=true;
         return true;
         }
         else
         {
           removeFromStorage("userwer");
          return false;
         }
    }),
    catchError((error) => {
      removeFromStorage("userwer");
      //this.isLoadingResults = false;
      // Catch if the GitHub API has reached its rate limit. Return empty data.
     // this.isRateLimitReached = true;
     this.authenticate=false;
     this._snackBar.open(error.error, '', { duration: 6000, panelClass: ['alert-red'] });
      return throwError(error); 
    }) 

  

    

     }
  
    
  


  /*|
    to check if the child routes can be activated,
    in this case it is providing role guard service
   */
  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const user = getFromStorage('user');
  //   if(user) {
  //     // the admin role can access all routes while the other users can only access dashboard route
  //     if (!user.isAdmin && state.url === '/ReportConfiguration') {
  //       this.router.navigate(['/reports']);
  //       return false;
  //     }
  //     return true;
  //   } else {
  //     // if user is not loggedn in delete storage and navigate to login page
  //     this.authService.logout();
  //   }
  //   return false;
  // }  
}
