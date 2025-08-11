//import { Component, OnInit } from '@angular/core';
//import { NavigationEnd, Router } from '@angular/router';
//import { filter } from 'rxjs/operators';
//import { AuthService } from '../Services/auth.service';
//import { getFromStorage } from '../Util/storage';

//@Component({
//  selector: 'app-layout',
//  templateUrl: './layout.component.html',
//  styleUrls: ['./layout.component.scss']
//})
//export class LayoutComponent implements OnInit {
//  notHome: boolean = true;
//  user = getFromStorage('user');
//  currentRoute: string;

//  constructor(private router: Router, private auth: AuthService){
//    this.notHome = (router.url.indexOf('/reports') === -1 || '/' !== router.url[router.url.length -1]);
//    }

//  ngOnInit(): void {
//  }

//  logout = () => {
//    this.auth.logout();
//  }

//}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import * as _ from 'lodash';




import { NAVIGATION_MENU, I18N_LANGUAGES } from 'src/config';
import { I18nLang, CCCategory } from 'src/app/shared/models/i18n';
/*import { UserRoles } from 'src/app/shared/models/auth.model';*/
import { CategorizedReport } from 'src/app/shared/models/reports';
import { I18nService } from 'src/app/shared/Services/i18n.service';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { ReportsService } from 'src/app/shared/Services/reports.service';
import { getFromStorage } from '../Util/storage';
import { environment } from 'src/environments/environment';
import { UsersService } from '../Services/users.service';
import { LoaderService } from '../Services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';




/*
  main header component with navigation
*/
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  subscription = new Subscription();
  versionInfo:string;
  updateinfo:string;
  navigationMenu = NAVIGATION_MENU;
  i18nLanguages: I18nLang[] = I18N_LANGUAGES;
  currentLanguage: I18nLang;
  loggedInUserRoleId: number;
  loggedInUsername: string;
  mySubscription;
  user=getFromStorage('user');



  constructor(
    private usersService: UsersService,
    private loaderService: LoaderService,
    private i18nService: I18nService,
    private authService: AuthService,
    private reportsService: ReportsService,
    private router: Router,
    private translate: TranslateService, private dateAdapter: DateAdapter<Date>
  ) { 

    //  if (!localStorage.getItem('foo')) { 
    //   localStorage.setItem('foo', 'no reload') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('foo') 
    // }

  }



  ngOnInit() {
    //const loggedInUser = this.authService.getUser();
    const loggedInUser = getFromStorage('user');

debugger

    if (loggedInUser) {
      const { roleId, firstName, lastName } = loggedInUser;



      this.loggedInUserRoleId = roleId;
      this.loggedInUsername = firstName + ' ' + lastName;
    } else {
      this.authService.logout();
    }
    

    // this.loaderService.addRequest(this.usersService.getVersion())
    //   .subscribe(
    //     (data:any) => {
        
    //      this.versionInfo=data.version;
    //      this.updateinfo=data.date;
         
         
    //     }
      
    //   );

debugger
    // get the current language of the user
    const sub1 = this.i18nService.currentLangId.subscribe(langId => this.currentLanguage = _.find(this.i18nLanguages, { id: langId }));



    // configure reports nav which has an index of 2 in navigationMenu
    // reports menu has a second level of navigation
    this.reportsService.categorizedReports.pipe(
      skipWhile((reports => !reports))
    )
      .subscribe((reportCategories: CategorizedReport[]) => {
        // @ts-ignore
        this.navigationMenu = _.map(this.navigationMenu, (nav, i) => {
         
          if (i !== 10) {
            return nav;
           }
          //  else {
          //   const reportSubNav = _.map(reportCategories, reportCat => ({
          //     key: '$$_$$',
          //     ccCode: reportCat.categoryId,
          //     ccCategory: CCCategory.REPORT_CATEGORY,
          //     superSubNav: _.map(reportCat.reports, report => ({
          //       key: '$$_$$',
          //       defaultText: report.name,
          //       route: `/reports/${report.id}`
          //     }))
          //   }));



          //   return { ...nav, subNav: reportSubNav };
          // }
        });
      });
  }




  // set new i18n language
  setLanguage(langId: string) {
    this.i18nService.setLanguage(langId);
   
  }
 


  // logout
  logout() {
    this.authService.logout();
  }



}
