import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { catchError, skipWhile } from 'rxjs/operators';
import * as _ from 'lodash';
import { NAVIGATION_MENU, I18N_LANGUAGES } from 'src/config';
import { I18nLang, CCCategory } from 'src/app/shared/models/i18n';
import { KPILCLoginModel, UserRoles } from 'src/app/shared/models/auth.model';
import { CategorizedReport } from 'src/app/shared/models/reports';
import { I18nService } from 'src/app/shared/Services/i18n.service';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { ReportsService } from 'src/app/shared/Services/reports.service';
import { ReportService } from 'src/app/shared/Services/report.service';
import { ReportsComponent } from 'src/app/reporting/reports/reports.component';
import { getFromStorage, saveToStorage } from 'src/app/shared/Util/storage';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { categoryModel, categoryModel1, reportModel } from 'src/app/shared/models/report.model';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { DataService } from '../Services/data.service';
import { truncateSync } from 'fs';
import { AppComponent } from 'src/app/app.component'
import { ErrorHandlerService } from '../Services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHelperService } from '../Services/http-helper.service';
import { NgbDropdown, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../Services/loader.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Globals } from '../models/Global';



/*
  main header component with navigation
 */
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
 
})
export class MainHeaderComponent implements OnInit, AfterViewInit {

  subscription = new Subscription();
  subNavLeft: string = '0px';
  subNavTop: string = '0px';
  @ViewChild('subNavWrapper', { static: false }) subNavWrapper: ElementRef;
  @ViewChild('menu', { static: false }) menu: ElementRef;
  windowsCurrentuser: string;
  errorMessage: string = '';
  dynamicPlacement: string = 'right-top';

  navigationMenu = NAVIGATION_MENU;
  i18nLanguages: I18nLang[] = I18N_LANGUAGES;
  currentLanguage: I18nLang;
  loggedInUserRoleId: number;
  showroleid = [];
  Navmenuaccess = [];
  loadhash = _;
  loggedInUsername: [];
  login: KPILCLoginModel;
  categories: categoryModel[];
  report: reportModel;
  username: string;
  data: MatTableDataSource<reportModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  mySubscription;
  
  //subNavIcon: string = 'assets/icons/RightArrow.jpg';
  hoveredSubNav: string | null = null;

  constructor(
    private httpHelper: HttpHelperService,
    private i18nService: I18nService,
    private authService: AuthService,
    private reportsService: ReportsService,
    private rs: ReportService,
    private router: Router,
    private authservice: AuthService,
    private dataService: DataService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private storage: LocalStorageService,
    private globals: Globals,
    private cdr: ChangeDetectorRef

  ) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        localStorage.removeItem('foo')

      }
    });
    const userdata = getFromStorage('userwer');
    if (userdata != null) {
      this.loaderService.addRequest(this.rs.getHeaderMenu(userdata.id)).subscribe(data => {
        // this.showroleid = data.menuSeq;

        data.forEach((menuSeq) => {
          this.showroleid.push(menuSeq.menuSeq);
        });
        debugger
        //this.showroleid.push(27);
        console.log("  this.categories[0].MenuSeq " + this.showroleid);
        error: (err: HttpErrorResponse) => {

        }

      });
    }



    {
      authservice.get().subscribe(username => {
        if (userdata != null || userdata != undefined) {
          this.username = username.userName;
        }
        else {


          location.reload()


        }

        catchError((error: Response) => {


          //removeFromStorage('isauth');    
          //this._snackBar.open("You are not authorized to access the Application please contact to System Administator", '', { duration: 6000, panelClass: ['alert-red'] });
          return throwError(error);
        });
      });

      // this.errors = err.error.message;
      // console.log(this.errors);

    }
  }

  ngAfterViewInit(): void {
   
  }
 
  adjustSubNavPosition(subNavWrapper: ElementRef): void {
    const subNavItem = subNavWrapper.nativeElement.closest('.sub-nav-item');
    const rect = subNavItem.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Get the current width of the subNavWrapper (super-sub-nav)
    const subNavWidth = subNavWrapper.nativeElement.offsetWidth;

    // Calculate if the submenu will overflow the viewport
    const subNavRight = rect.right + subNavWidth; // Right edge of the submenu
    const subNavLeft = rect.left; // Left edge of the submenu

    const isOverflowingRight = subNavRight > viewportWidth;
    const isOverflowingLeft = subNavLeft < 0;

    // Adjust the submenu position based on the available space
    if (isOverflowingRight && !isOverflowingLeft) {
      // If the submenu overflows on the right, move it to the left
      subNavWrapper.nativeElement.classList.add('custome-super-sub-nav-left');
      subNavWrapper.nativeElement.classList.remove('custome-super-sub-nav');
    } else if (isOverflowingLeft) {
      // If the submenu overflows on the left, move it to the right
      subNavWrapper.nativeElement.classList.add('custome-super-sub-nav');
      subNavWrapper.nativeElement.classList.remove('custome-super-sub-nav-left');
    } else {
      // Default case: submenu opens to the right
      subNavWrapper.nativeElement.classList.add('custome-super-sub-nav');
      subNavWrapper.nativeElement.classList.remove('custome-super-sub-nav-left');
    }

    // Positioning the subNavWrapper based on the submenu's position (left and top)
    this.subNavLeft = `${rect.left}px`; // Submenu left position based on current item
    this.subNavTop = `${rect.bottom + 10}px`; // Position just below the submenu item with a 10px offset

    // Apply dynamic positioning styles to the submenu
    if (this.subNavWrapper) {
      this.subNavWrapper.nativeElement.style.setProperty('position', 'absolute', 'important');
      this.subNavWrapper.nativeElement.style.setProperty('left', `${this.subNavLeft}`, 'important');
      this.subNavWrapper.nativeElement.style.setProperty('top', `${this.subNavTop}`, 'important');
      this.subNavWrapper.nativeElement.style.setProperty('z-index', '1000', 'important');
      this.subNavWrapper.nativeElement.style.setProperty('transform', 'none', 'important'); // Clear any existing transforms
      this.subNavWrapper.nativeElement.style.setProperty('will-change', 'transform', 'important');
    }
  }


  onIconClick(iconContainer: HTMLDivElement, event: MouseEvent) {
    debugger;
    const iconPosition = iconContainer.getBoundingClientRect();
    event.preventDefault();

    // Get the x, y, width, and height of the icon-container
    const iconX = iconPosition.left;
    const iconY = iconPosition.bottom;  // This is where you want the dropdown to be placed

    console.log("Icon X:", iconX, "Icon Y:", iconY);  // Debugging position values

    // Set dynamic position for subNavWrapper
    this.subNavLeft = `${iconX}px`;  // Set left to icon's X position
    this.subNavTop = `${16}px`;  // Set top just below the icon, with some offset (19px)

    // Apply the position to your dropdown
    if (this.subNavWrapper) {
      // Apply the dynamic styles for positioning
      this.subNavWrapper.nativeElement.style.setProperty('position', 'absolute', 'important');

      // Set left and top properties with !important
      this.subNavWrapper.nativeElement.style.setProperty('left', `${this.subNavLeft}`, 'important');
      this.subNavWrapper.nativeElement.style.setProperty('top', this.subNavTop, 'important');

      // Forcefully reset any `transform` property with !important to override any existing styles
      this.subNavWrapper.nativeElement.style.setProperty('transform', 'none', 'important'); // Clear transform

      // Set will-change to prevent automatic transformations
      this.subNavWrapper.nativeElement.style.setProperty('will-change', 'transform', 'important');

      // Set zIndex for stacking above other elements
      this.subNavWrapper.nativeElement.style.setProperty('z-index', '1000', 'important');
    }

  }

  ngOnInit() {
    
    const loggedInUser = getFromStorage('userwer');

    if (loggedInUser != null) {
      const { roleId, name, lastName } = loggedInUser;

      this.loggedInUserRoleId = roleId;
      console.log("loggedInUserRoleId" + this.loggedInUserRoleId);

    } else {
      this.authService.logout();
    }

debugger
    // get the current language of the user
    const sub1 = this.i18nService.currentLangId.subscribe(langId => this.currentLanguage = _.find(this.i18nLanguages, { id: langId }));

    // configure reports nav which has an index of 2 in navigationMenu
    // reports menu has a second level of navigation
    this.reportsService.categorizedReports.pipe(
      skipWhile((reports => !reports))
    )
      .subscribe((reportCategories: CategorizedReport[]) => {
        this.navigationMenu = _.map(this.navigationMenu, (nav, i) => {
          debugger
          if (i !== 10) {
            console.log("nav items is:", nav);
            return nav;
          }
          // else {
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

  out(drop: NgbDropdown,subNavKey: string) {   
   if (this.hoveredSubNav === subNavKey) {
    this.hoveredSubNav = null;  // Reset the hovered sub-nav index
  }
    drop.close()
  }
  over(drop: NgbDropdown, subNavKey: string) {   
   this.hoveredSubNav = subNavKey;
      drop.open()    
  }
isMenuOpen : boolean = false;

  toggleSubMenu(drop: NgbDropdown, subNavKey: string){
    if(!this.isMenuOpen){
      this.isMenuOpen = true;
      this.hoveredSubNav = subNavKey;
      drop.open();     
    }else{
      this.isMenuOpen = false;
      this.hoveredSubNav = null;
      drop.close();    
    } 
  }

  getSubNavIcon(subNav: any): string {
    
    return this.hoveredSubNav === subNav ? 'assets/icons/DownArrow.png' : 'assets/icons/RightArrow.jpg';
  }

  searchfix(event: any) {
    console.log("mainheader event", event);
    this.router.navigate(['/reports']);
    //this.dataService.setDataObs(event.value);
  }

  // set new i18n language
  setLanguage(langId: string) {    
    this.i18nService.setLanguage(langId);
    localStorage.setItem('Currentlanguage', langId);
  }

  // logout
  logout() {
    this.authService.logout();
  }

}
