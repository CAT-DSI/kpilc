import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { I18nService } from 'src/app/shared/Services/i18n.service';
import { AuthService } from './shared/Services/auth.service';
import { Console } from 'console';
import { ReportsService } from './shared/Services/reports.service';
import { KPILCLoginModel } from './shared/models/auth.model';
import { LoaderService } from './shared/Services/loader.service';
import { removeFromStorage } from './utils/storage';
import {  HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  isLoading: Observable<boolean>;
  logins: KPILCLoginModel;
   windowsCurrentuser!:string;
  constructor(
    private i18nService: I18nService,
    private authservice:AuthService,
    private reports:ReportsService,
    private loaderService: LoaderService
   
  ) {
    window.addEventListener('beforeunload', function (event) {
      event.stopImmediatePropagation();
    });
 
    //this.authservice.get().subscribe();

    // authservice.get().subscribe(username=>{
    //   this.windowsCurrentuser="Sumit.Dongre";
      
    // }); 
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    //  if (!localStorage.getItem('foo')) { 
    //   localStorage.setItem('foo', 'no reload') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('foo') 
    // }
   // removeFromStorage('userwer');    
    // Do more processing...
    event.returnValue = false;
}
  ngOnInit() {
  
    // init user language
    this.i18nService.initLanguage();
    //this.reports.getReports();
    this.isLoading = this.loaderService.isLoading;
  }
 
}
