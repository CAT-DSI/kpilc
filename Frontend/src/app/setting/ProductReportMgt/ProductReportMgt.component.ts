import { ApplicationRef, Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { TranslateText } from 'src/app/shared/models/i18n';
import { DualListComponent } from 'src/app/Administration/users/Dual-List/dual-list.component';
import { HttpClient } from '@angular/common/http';


import { ApiService } from "src/app/shared/Services/api.service";
import { IPosts } from "src/app/shared/models/posts";
import { BasicParams, PagingConfig, SortTypes } from 'src/app/shared/models/app';
import { SelectionType, id } from '@swimlane/ngx-datatable';
import { Hometab, Hometab2, Platformdata, User,countrydata } from 'src/app/shared/models/auth.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import { updateArrAtIndex } from 'src/app/utils/utility';

import * as _ from 'lodash';
import { FilterPipe } from 'src/app/shared/Pipes/filter.pipe';

import { CellTemplates } from 'src/app/shared/ngx-table-wrapper/ngx-table-wrapper.component';
import { TranscodingFileTypes } from 'src/app/shared/models/transcoding';
import { MainHeaderComponent } from 'src/app/shared/main-header/main-header.component';
//import { SaveUserModalComponent } from 'src/app/Administration/save-user-modal/save-user-modal.component';
import { ReportmodalComponent } from 'src/app/Administration/users/reportmodal/reportmodal.component';
import { ProductReportModalHome } from '../ProductReportModalHome/ProductReportModalHome.component';
import { ProductReportModalParametrage } from '../ProductReportModalParametrage/ProductReportModalParametrage.component';
import { ProductReportModalParametragesecond } from '../ProductReportModalParametragesecond/ProductReportModalParametragesecond.component';




/*
  users configuration page
 */
@Component({
  selector: 'app-users',
  templateUrl: './ProductReportMgt.component.html',
  styleUrls: ['./ProductReportMgt.component.scss'],
  //styles: ['.form-group { margin-bottom: 16px; }', '.checkbox { margin-top: inherit }'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class ProductReportMgtComponent implements OnInit {
  
  @Input() hasActionCol = true;
  @Input() hasActionColdelete = true;
  @Input() otherFilters: any;
  @ViewChild('chkboxColHeaderTmpl',{static:true}) chkboxColHeaderTmpl: TemplateRef<any>;
  @ViewChild('chkboxColCellTmpl', {static:true}) chkboxColCellTmpl: TemplateRef<any>;
  @ViewChild('roleColCellTmpl') roleColCellTmpl: TemplateRef<any>;
  @ViewChild(MainHeaderComponent, { static: false }) childC: MainHeaderComponent;
  // currentPage:number  = 1;
  // itemsPerPage: number = 5;
  // totalItems: number = 0;
  selection:SelectionType;
  checkboxcheck:boolean;
  search='';
  
  element: any = document.getElementsByClassName("datatable-body-row").item(0);
  searchText: any;
  tableSize: number[] = [5, 10, 15, 20];

  tableRows: User[];
  tableRows1: Hometab[];
  tableRows2: Hometab2[];
  selectedSession: User[]=[];
   //countrydata1:countrydata;
   
  
 
  selectedSessionId: number;
  totalRows: number=9;
  totalRows1: number=9;
  totalRows2: number=9;
  tableColumns = [];
  tableColumns1 = [];
  tableColumns2 = [];
  dataObject = [];
  colMinWidth = 110;
  colHeaderTranslateKeyPrefix = 'userColumns';
  pagingConfig: PagingConfig = {} as PagingConfig;
  countrydat:countrydata={} as countrydata;
  platformdata:Platformdata={} as Platformdata;
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
    { key: 'nav.Productreportmgt', defaultText: 'Product Report Management' },
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
  @Input() updateinfo="12";
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
    // const checkboxColConfig = {
    //   name: 'Is_Delay_Report', prop: 'isAssociated', minWidth: 40, width: 125, canAutoResize: true,
    //   headerTemplate: this.chkboxColHeaderTmpl, cellTemplate: this.chkboxColCellTmpl
    // };
   
    this.tableColumns =[ 
      { name: 'Product', prop: 'product' ,sortable: false },
      { name: 'Regime', prop: 'regime',sortable: false  },
      { name: 'KPI', prop: 'kpi',sortable: false},
    ];
    this.tableColumns = [...this.tableColumns ];
    this.tableColumns1 =[ 
      { name: 'Regime', prop: 'regime' ,sortable: false },
    ];
    this.tableColumns1 = [...this.tableColumns1 ];
    this.tableColumns2 =[ 
      { name: 'Name', prop: 'name' ,sortable: false },
      { name: 'KPi', prop: 'kpi' ,sortable: false },
    ];
    this.tableColumns2 = [...this.tableColumns2 ];
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
         
        // ()=> error => this.saveError = getErrorMessage(error)
      });
           
          // ()=> error => this.saveError = getErrorMessage(error)
        // });
        // );
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
//   UpdateCountry()
//   {
//     this.missing = this.source.filter(item => this.sourceStations.indexOf(item) < 0);
//      this.removeddata=this.missing.filter(item => this.confirmed.indexOf(item) < 0);
//      if(this.removeddata.length>0)
//      {
//       this.countrydat.listToAdd = this.removeddata.map(a => a.countryCode);
//      }
//      else
//      {
//        this.countrydat.listToAdd  = null;
//      }
//     this.Addcomparedata=this.source.filter(item => this.confirmed.indexOf(item) < 0);
//     this.addeddata=this.sourceStations.filter(item => this.Addcomparedata.indexOf(item) < 0);
//     if(this.addeddata.length>0)
//     {
//       this.countrydat.listToDelete  = this.addeddata.map(a => a.countryCode);
//     }
//     else
//     {
//       this.countrydat.listToDelete  = null;
//     }
//     this.countrydat.Userid=this.userTableFilters.id;
//     this.loaderService.addRequest(this.usersService.savecountry(this.countrydat))
//     .subscribe(response => {-
//       console.log(response);
     
//   });

//   this.missingplatform=this.platform.filter(item => this.sourcePlatform.indexOf(item) < 0);
//   this.removeplatformdata=this.missingplatform.filter(item => this.platformconfirmed.indexOf(item) < 0);
//   if(this.removeplatformdata.length>0)
//   {
//    this.platformdata.listToAdd = this.removeplatformdata.map(a => a.platformCode);
//   }
//   else
//   {
//     this.platformdata.listToAdd  = null;
//   }
//   this.compareplatformdata=this.platform.filter(item => this.platformconfirmed.indexOf(item) < 0);
//   this.platformaddeddata=this.sourcePlatform.filter(item => this.compareplatformdata.indexOf(item) < 0);
//   if(this.platformaddeddata.length>0)
//   {
//     this.platformdata.listToDelete  = this.platformaddeddata.map(a => a.platformCode);
//   }
//   else
//   {
//     this.platformdata.listToDelete  = null;
//   }
//   this.platformdata.Userid=this.userTableFilters.id;
//   this.loaderService.addRequest(this.usersService.saveplatform(this.platformdata))
//   .subscribe(response => {-
//     console.log(response);
   
// });

    

  //}
  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.tableRows.filter = filterValue;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.otherFilters) {

      const oldFilters = changes.otherFilters.previousValue;
    
         const newFilters = changes.otherFilters.currentValue;

      //if this is not he first time filters have changed and pgeo is different then reset basic params
      if (!oldFilters || oldFilters.pgeo !== newFilters.pgeo) {
        this.getUsers(true);
      } else {
        //if only search text has changed then just reset pageIndex
        this.basicParams = { ...this.basicParams, pageIndex: 1 };
        this.getUsers();
      }
    }
  }
  getUsers(resetParams = false) {
    if (resetParams) {
      this.basicParams = {};
    }
  
    this.loaderService.addRequest(this.usersService.getProductReport(this.basicParams))
      .subscribe(
        (data:any) => {
        debugger
          this.tableRows = data;
          this.totalRows = data.length;

          this.tableRows.filter(item => item.isDelayReport);
         
          console.log("vallue", data);
         
        }
      
      );
      this.loaderService.addRequest(this.usersService.getVersion())
      .subscribe(
        (data:any) => {
        
         //this.versionInfo=data.;
         this.updateinfo=data.kpilcRefreshDate;
         console.log("dats "+data);
         
        },
        err => {
          if(err.status=="200")
          {
            //this.updateinfo=err.error.text;
          }
         
         });



      this.loaderService.addRequest(this.usersService.getRegime(this.basicParams))
      .subscribe(
        (data:any) => {
        
          this.tableRows1 = data;
          this.totalRows1 = data.length;
        }
      
      );
      this.loaderService.addRequest(this.usersService.GetAllKpiSetting(this.basicParams))
      .subscribe(
        (data:any) => {
        
          this.tableRows2 = data;
          this.totalRows2 = data.length;
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

  /*
    show the add/edit user modal
    if editRowIndex is defined that means it is edit else its add
   */
    showAddEditModal2(editRow?: any) {

      const editMode = !_.isUndefined(editRow);
      const modalRef = this.modalsService.addEditEntity(ProductReportModalParametragesecond, { windowClass: 'save-user-modal' });
  
      modalRef.componentInstance.headerTitle = {
        key: `modals.user.${editMode ? 'edit' : 'add'}`,
        defaultText: `${editMode ? 'Edit' : 'Add'}`
      };
     
      modalRef.componentInstance.formData = editMode ? editRow : {};
     
      modalRef.componentInstance.inEditMode = editMode;
  
      // if the modal is closed with response as a non-string means it was a success
      // and the new object is passed as response,
      // if we are in edit mode we just update the table else we reload the page
      modalRef.result.then(response => {
        if (typeof response !== 'string') {
          console.log("response is"+response);
          if (editMode) {
            const newRowObj = { ...editRow, ...response };
            //location.reload();
            this.getUsers();
            this.tableRows = updateArrAtIndex(this.tableRows, editRow.index, newRowObj);
          } else {
           // this.getUsers();
          }
        }
      });
      
  
    }
  showAddEditModal(editRow?: any) {

    const editMode = !_.isUndefined(editRow);
    const modalRef = this.modalsService.addEditEntity(ProductReportModalHome, { windowClass: 'save-user-modal' });

    modalRef.componentInstance.headerTitle = {
      key: `modals.user.${editMode ? 'edit' : 'add'}`,
      defaultText: `${editMode ? 'Edit' : 'Add'}`
    };
   
    modalRef.componentInstance.formData = editMode ? editRow : {};
   
    modalRef.componentInstance.inEditMode = editMode;

    // if the modal is closed with response as a non-string means it was a success
    // and the new object is passed as response,
    // if we are in edit mode we just update the table else we reload the page
    modalRef.result.then(response => {
      if (typeof response !== 'string') {
        console.log("response is"+response);
        if (editMode) {
          const newRowObj = { ...editRow, ...response };
          //location.reload();
          this.getUsers();
          this.tableRows = updateArrAtIndex(this.tableRows, editRow.index, newRowObj);
        } else {
         // this.getUsers();
        }
      }
    });
    

  }
  showAddEditModal1(editRow?: any) {

    const editMode = !_.isUndefined(editRow);
    const modalRef = this.modalsService.addEditEntity(ProductReportModalParametrage, { windowClass: 'save-user-modal' });

    modalRef.componentInstance.headerTitle = {
      key: `modals.user.${editMode ? 'edit' : 'add'}`,
      defaultText: `${editMode ? 'Edit' : 'Add'}`
    };
   
    modalRef.componentInstance.formData = editMode ? editRow : {};
   
    modalRef.componentInstance.inEditMode = editMode;

    // if the modal is closed with response as a non-string means it was a success
    // and the new object is passed as response,
    // if we are in edit mode we just update the table else we reload the page
    modalRef.result.then(response => {
      if (typeof response !== 'string') {
        console.log("response is"+response);
        if (editMode) {
          const newRowObj = { ...editRow, ...response };
         // location.reload();
          this.getUsers();
          this.tableRows = updateArrAtIndex(this.tableRows, editRow.index, newRowObj);
        } else {
         // this.getUsers();
        }
      }
    });
    

  }

  /*
    add new user, this just shows the modal
   */
  addUser() {
    this.showAddEditModal();
  }
  addUser1() {
    this.showAddEditModal1();
  }
  deleteUser1(editRow: any) {
    const headerTitle = { key: 'modals.user.deleteTitle', defaultText: 'Delete UsersService' };
    const entityName = { key: 'entities.user', defaultText: 'User' };
  //  const {rowinfo}=
   // let use = this.tableRows.filter(x=>x.id==editRow.id);
     const entityValue = editRow.regime;

    const modalRef = this.modalsService.deleteConfirmation(headerTitle, entityName,entityValue);

    // listen to delete confirmation so that the delete service may be called
    modalRef.componentInstance.deleteConfirmed.subscribe(() => {
      const userId = editRow.id;

      this.loaderService.addRequest(this.usersService.deleteUser1(userId))
      .subscribe(response => {
        console.log(response);
        this.getUsers();
      // ()=> error => this.saveError = getErrorMessage(error)
    },
    err => {
      if(err.status=="200")
      {
         modalRef.close();
         this.getUsers();
      }
   
   
    });

    })
   }
  deleteUser(editRow: any) {
    const headerTitle = { key: 'modals.user.deleteTitle', defaultText: 'Delete UsersService' };
    const entityName = { key: 'entities.user', defaultText: 'User' };
  //  const {rowinfo}=
    let use = this.tableRows.filter(x=>x.id==editRow.id);
     const entityValue = editRow.product;

    const modalRef = this.modalsService.deleteConfirmation(headerTitle, entityName,entityValue);

    // listen to delete confirmation so that the delete service may be called
    modalRef.componentInstance.deleteConfirmed.subscribe(() => {
      const userId = use[0].id;

      this.loaderService.addRequest(this.usersService.deleteUser(userId))
      .subscribe(response => {
        console.log(response);
        this.getUsers();
      // ()=> error => this.saveError = getErrorMessage(error)
    },
    err => {
      if(err.status=="200")
      {
         modalRef.close();
         this.getUsers();
      }
   
   
    });

    })
   } /*
    edit a user, this just opens the modal with the user's data,
    rowIndex is the index in tableRows which is being edited
   */
  editUser(editRow: any) {
  
    this.showAddEditModal(editRow);
  }

  editUser1(editRow: any) {
  
    this.showAddEditModal1(editRow);
  }
  editUser2(editRow: any) {
  
    this.showAddEditModal2(editRow);
  }
  /*
    delete user, this just opens the delete confirmation modal,
    it is deleted after confirmation from modal
   */
  // deleteUser(rowIndex: number) {
  //   const headerTitle = { key: 'modals.user.deleteTitle', defaultText: 'Delete UsersService' };
  //   const entityName = { key: 'entities.user', defaultText: 'User' };
  //   const { firstName, lastName } = this.tableRows[rowIndex];
  //   const entityValue = firstName + ' ' + lastName;
  //   const modalRef = this.modalsService.deleteConfirmation(headerTitle, entityName, entityValue);
  

   

  //   // // listen to delete confirmation so that the delete service may be called
  //   modalRef.componentInstance.deleteConfirmed.subscribe(() => {
  //     const userId = this.tableRows[rowIndex].id;
  //     this.loaderService.addRequest(this.usersService.deleteUser(userId))
  //       .subscribe(
  //         () => {
  //           modalRef.close();
  //           this.getUsers();
  //         },
  //         error => modalRef.componentInstance.deleteError = getErrorMessage(error)
  //       );
  //   });

  // }


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
