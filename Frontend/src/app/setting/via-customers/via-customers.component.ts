import { ApplicationRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { DualListComponent } from 'src/app/Administration/users/Dual-List/dual-list.component';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import { UsersService } from 'src/app/shared/Services/users.service';
import { MainHeaderComponent } from 'src/app/shared/main-header/main-header.component';
import { BasicParams, PagingConfig } from 'src/app/shared/models/app';
import { User } from 'src/app/shared/models/auth.model';
import { TranslateText } from 'src/app/shared/models/i18n';
import { ViaCustomer } from 'src/app/shared/models/reports';
import { TranscodingFileTypes } from 'src/app/shared/models/transcoding';

@Component({
  selector: 'app-via-customers',
  templateUrl: './via-customers.component.html',
  styleUrls: ['./via-customers.component.scss']
})
export class ViaCustomersComponent implements OnInit {
  @Input() hasActionColedit = true;
  @Input() otherFilters: any;  
  @ViewChild(MainHeaderComponent, { static: false }) childC: MainHeaderComponent;  
  selection:SelectionType;
  checkboxcheck:boolean;
  search='';  
  element: any = document.getElementsByClassName("datatable-body-row").item(0);
  searchText: any;
  tableSize: number[] = [5, 10, 15, 20];
  tableRows: ViaCustomer[];
  selectedSession: ViaCustomer[]=[];
  selectedSessionId: number;
  totalRows: number=9;
  tableColumns = [];
  dataObject = [];
  colMinWidth = 180;
  colHeaderTranslateKeyPrefix = 'userColumns';
  pagingConfig: PagingConfig = {} as PagingConfig;  
  currentPage:number  = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  pagination: number = 0;
  userTableFilters: any = {};
  userId:number;
  geoPoleTableFilters: any = {};
  basicParams: BasicParams = {};
  filteredArray;
  showPagination = false;
  breadcrumbs: TranslateText[]  = [
    
    { key: 'nav.setting', defaultText: 'Setting' },
    { key: 'nav.Viacustomer', defaultText: 'Via customers' },
  ];


  constructor(
    private usersService: UsersService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
    private appref:ApplicationRef,
    private router: Router,
    private route: ActivatedRoute
  ) { 
  
   this.selection=SelectionType.single;
   this.pagingConfig = {
    itemsPerPage: this.itemsPerPage,
    currentPage: this.currentPage,
    totalItems: this.totalItems
  }
    
  }

 

  /*
    change other filters when search is triggered, so that the user table can be refreshed
   */
  onSearchTable(searchText: string) {
    this.otherFilters = { ...this.otherFilters, name: searchText };
  }
    onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    //this.getUsers();
  }
  onTableSizeChange(event:any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getUsers();
  }

  tab = 1;
  keepSorted = true;
  key: string;
  keyplatform:string;
  display: string;
  displayplatform:string;
  filter = false;
  countryadd:any[];
  source: Array<any>;
  platform:Array<any>;
  confirmed: Array<any>;
  platformconfirmed:Array<any>;
  afterswap:Array<any>;
  missing:Array<any>;
  missingplatform:Array<any>;
  Addcomparedata:Array<any>;
  compareplatformdata:Array<any>;
  addeddata:any[];
  platformaddeddata:any[];
  removeddata:any[];
  removeplatformdata:any[];
  userAdd = '';
  disabled = false;
 
   listFavoritesDefaultParameters = {
    orderBy: 'updated',
    directionStr: 'desc' as "desc" | "asc" | undefined,
    
  }

  sourceLeft = true;
  format: any = DualListComponent.DEFAULT_FORMAT;

  private sourceStations: Array<any>;
  private sourcePlatform: Array<any>;
  private confirmedStations: Array<any>;
  private stations: Array<any>;
  private Platformcountry: Array<any>;
  private Platformnoncountry: Array<any>;
  private Nonstations: Array<any>;
                  
pageSize = 10;

  

  ngOnInit() {
   
   
    this.tableColumns =[ 
            
      { name: 'Brand', prop: 'brand',sortable: false  },        
      { name: 'CustomerGroup', prop: 'customerGroup',sortable: false  },        
      { name: 'MarketLine', prop: 'marketLine',sortable: false  },        
    ];
    this.tableColumns = [...this.tableColumns ];
       this.getUsers();
   
  }
 
  downloadFile() {
    //const fileType = TranscodingFileTypes.WMI;

    const modalRef = this.modalsService.downloadConfirmation();

    modalRef.componentInstance.headerTitle = {
      key: 'Info',
      defaultText: 'Info'
    };

    modalRef.componentInstance.confirmationTxt = {
      key: 'Export To Excel',
      defaultText: 'Export to Excel'
    };

    modalRef.componentInstance.confirmBtnTxt = { key: 'buttons.downloadXlsx', defaultText: 'Download XLSX' };
    modalRef.componentInstance.confirmBtnIconUrl = 'assets/icons/download.svg';
    modalRef.componentInstance.confirmBtnClass = 'btn-download';

    modalRef.result.then(response => {
      // if modal closes with confirm message then start the download
      if (response === 'confirm') {
        this.loaderService.addRequest(this.usersService.exportclick())
        .subscribe(response => {-
          console.log(response);         
      });
      }
    });
  }
 
  onSelected(event)
  {


  }
  saverange()
  {
    this.onTableDataChange(1)
  }
 
  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.tableRows.filter = filterValue;
  }
  
  getUsers(resetParams = false) {
    if (resetParams) {
      this.basicParams = {};
    }
  
    this.loaderService.addRequest(this.usersService.getAllGetAllViaCustomers())
      .subscribe(
        (data:any) => {
        
          this.tableRows = data;
          this.totalRows = data.length;          
          console.log("vallue", data);
         
        }
      
      );
  }
  renderPage(event: number) {
    this.pagination = event;
    this.getUsers();
  }

  /*
    on any page or sort event get the data with the new params
   */
  onPageSort(newParams: BasicParams) {
    this.basicParams = { ...this.basicParams, ...newParams };
    this.getUsers();
  }


  private useStations() {
    this.key = 'countryId';
    this.keyplatform='platformId';
    this.displayplatform='platformCode';
    this.display = 'countryCode'; // [ 'station', 'state' ];
    this.keepSorted = true;
    this.source =[...this.sourceStations, ...this.Nonstations];
    this.confirmed = this.Nonstations;
    this.afterswap=this.sourceStations;
    this.platform=[...this.sourcePlatform, ...this.Platformnoncountry];
    this.platformconfirmed=this.Platformnoncountry;
   
  }
  
  doReset() {
    this.sourceStations = JSON.parse(JSON.stringify(this.stations));
    this.sourcePlatform=JSON.parse(JSON.stringify(this.Platformcountry));
    // this.confirmedStations = new Array<any>();
    // this.confirmedStations= JSON.parse(JSON.stringify(this.Nonstations));
    //this.confirmedStations = new Array<any>();
    this.useStations();
  }



  filterBtn() {
    return (this.filter ? 'Hide Filter' : 'Show Filter');
  }

  doDisable() {
    this.disabled = !this.disabled;
  }

  disableBtn() {
    return (this.disabled ? 'Enable' : 'Disabled');
  }

  swapDirection() {
    this.doReset();
    this.sourceLeft = !this.sourceLeft;
    this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
  }

}
