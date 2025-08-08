import { categoryModel } from './../../shared/models/report.model';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit, ViewChild, ViewChildren ,ChangeDetectorRef,  
  ChangeDetectionStrategy,
  Input} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { reportModel } from 'src/app/shared/models/report.model';
import { ReportService } from 'src/app/shared/Services/report.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getFromStorage, removeFromStorage } from 'src/app/shared/Util/storage';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { TranslateText } from 'src/app/shared/models/i18n';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicParams } from 'src/app/shared/models/app';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/shared/Services/error-handler.service';
import { Globals } from 'src/app/shared/models/Global';
import { HostListener } from '@angular/core';





type NewType = reportModel;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent implements OnInit {
  tableRows:NewType[];
  totalRows: number;
  breadcrumbs: TranslateText[]  = [
    { key: 'nav.configuration', defaultText: 'Configuration' },
    { key: 'nav.geoPole', defaultText: 'Geo Pole' }
  ];
  displayedColumns: string[] = ['name', 'label', 'category', 'scheduled', 'updatedOn', 'status'];

  tableColumns = [
    { name: 'name', prop: 'name' },
    { name: 'label', prop: 'label' },
    { name: 'category', prop: 'category' },
    { name: 'scheduled', prop: 'scheduled' },
    { name: 'updatedOn', prop: 'updatedOn' },
    { name: 'status', prop: 'status' }
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @HostListener('window:unload', ['$event'])
  
  isLoadingResults: boolean;
  isRateLimitReached: boolean;
  resultsLength: any;
  reporturl:string;
  data: MatTableDataSource<reportModel>;
  dataSource: any;
  emp1: any;
  errorMessage: string = '';
  userid:number;
  
  categories: categoryModel[];
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();
  geoPoleTableFilters: any = {};
  colMinWidth = 200;
  basicParams: BasicParams = {};
  @Input() hasActionCol = true;



  www: MatTableDataSource<reportModel>;
  user = getFromStorage('userwer');
 
  constructor(private rs: ReportService, private _snackBar: MatSnackBar,
    
    private route: ActivatedRoute,private globals: Globals, private router: Router, private authservice:AuthService, private loaderService: LoaderService,private errorHandler: ErrorHandlerService) {
      
      const userdata= getFromStorage('userwer');
      if(userdata !=null)
      {
    this.loaderService.addRequest(rs.getCategoriesbasedonid(userdata.id)).subscribe(data => {
      this.categories = data;
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      }
   
    });
  }

  }

  ngOnInit() {
    
    this.route.params.subscribe(data => {
      this.search(data.category ?? '');
    });
    
   
    
    console.log("report is",this.reporturl);

  }
  onPageSort(newParams: any) {
    this.basicParams = { ...this.basicParams, ...newParams };
    this.ngOnInit();
  }

  ngOnDestroy() {
  // removeFromStorage("userwer");
    // your logic to clean up session
  }
  unloadHandler(event) {
   // removeFromStorage("userwer");
}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    if(this.sort!=undefined)
    {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    }
   
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.rs!.getReports(this.user.id);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;
          console.log("map", data);
          return data;
        }),
        catchError((error) => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
         // this._snackBar.open(error.error, '', { duration: 6000, panelClass: ['alert-red'] });
          return of([]);
        })
      ).subscribe(data  => {
        this.data = new MatTableDataSource(data);
        console.log("subscribe", this.data);
        this.dataSource=new MatTableDataSource(data);
        
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
        this.data.filterPredicate = (el: reportModel, filter: string) => {
          console.log("filter data", this.data);
          console.log("filter data predicate", this.data.filterPredicate);
          return el.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0 || el.category?.id == filter;
         };
      });
    }
      
  
  

  ID: string;
  disabled = true;
  target: string = "";
  targetConfig: string = "";

highlight(row){
  debugger
    this.ID = row.id;
    this.disabled = this.ID == '';
    this.target = "/report/" + this.ID;
    this.targetConfig = "/ReportConfiguration/" + this.ID;
}
search1(event: any) {
this.search(event);
}
search(value: any) {
  
  const filterValue = value;
  if(this.data!=undefined)
  {
    this.data.filter = filterValue == 'ALL'? '':filterValue.trim().toLowerCase();
  }
  
 
}
searchcharacter(value: string) {
  this.geoPoleTableFilters = { ...this.geoPoleTableFilters, name: value };
  if(value == undefined) value = (value as unknown as MatSelectChange).value; 
  if(value == undefined) return;

  const filterValue = value;
  this.data.filter = filterValue.trim().toLowerCase();

  if (this.data.paginator) {
    this.data.paginator.firstPage();
  }
}
}


