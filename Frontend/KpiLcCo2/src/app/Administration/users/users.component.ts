import { ApplicationRef, Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { TranslateText } from 'src/app/shared/models/i18n';
import { DualListComponent } from 'src/app/Administration/users/Dual-List/dual-list.component';
import { HttpClient } from '@angular/common/http';


import { ApiService } from "src/app/shared/Services/api.service";
import { IPosts } from "src/app/shared/models/posts";
import { BasicParams, PagingConfig, SortTypes } from 'src/app/shared/models/app';
import { SelectionType, id } from '@swimlane/ngx-datatable';
import { Platformdata, User,countrydata } from 'src/app/shared/models/auth.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import { updateArrAtIndex } from 'src/app/utils/utility';
import { SaveUserModalComponent } from './save-user-modal/save-user-modal.component';
import * as _ from 'lodash';
import { FilterPipe } from 'src/app/shared/Pipes/filter.pipe';

import { CellTemplates } from 'src/app/shared/ngx-table-wrapper/ngx-table-wrapper.component';
import { TranscodingFileTypes } from 'src/app/shared/models/transcoding';
import { MainHeaderComponent } from 'src/app/shared/main-header/main-header.component';
import { getFromStorage } from 'src/app/utils/storage';




/*
  users configuration page
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  //styles: ['.form-group { margin-bottom: 16px; }', '.checkbox { margin-top: inherit }'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  
  @Input() hasActionCol = true;
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
  selectedSession: User[]=[];
 
  selectedSessionId: number;
  totalRows: number=9; 
  tableColumns = [];
  dataObject = [];
  colMinWidth =150;
  colHeaderTranslateKeyPrefix = 'userColumns';
  //basicParams: BasicParams = {};
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
  totalPages = 1;
  showPagination = false;
  breadcrumbs: TranslateText[]  = [
    
    { key: 'nav.administration', defaultText: 'Administration' },
    { key: 'nav.Usermange', defaultText: 'User Management' },    
  ];

  // otherFilters: any = {};

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
      { name: 'First Name', prop: 'firstName' ,sortable: false },
      { name: 'Last Name', prop: 'lastName',sortable: false  },
      { name: 'Access Key', prop: 'accessKey',sortable: false},
      { name: 'Email', prop: 'email', innerWidth:150, sortable: false},
       { name: 'Role', prop: 'role' },
      { name: 'Profile', prop: 'profileName',sortable: false },
    ];
       this.getUsers();
    this.doReset();
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
  onSelectSession(selectedSession: User[]) {
    this.selectedSession = [ ...selectedSession];
    if (this.selectedSession.length > 0) {
      const { id } = this.selectedSession[0];
      this.userTableFilters = { ...this.userTableFilters, id };
      this.loaderService.addRequest(this.usersService.getUser(this.userTableFilters.id))
      .subscribe(
        (data:any) => {
        
          this.stations = data.userCountries;
         
          this.Nonstations=data.userNorCountries;
         
          this.doReset();
         
         
        }
      
      );
     
     }
     this.loaderService.addRequest(this.usersService.getUserPlatformCountry(this.userTableFilters.id))
     .subscribe(
       (data:any) => {
       
         this.Platformcountry = data.userPlatforms;
        
         this.Platformnoncountry=data.userNorPlatforms;
        
         this.doReset();
        
        
       }
     
     );
    //this.selectedSessionId = this.selectedSession.length > 0 ? this.selectedSession[0].id : undefined;
  }
  onSelected(event)
  {


  }
  saverange()
  {
    this.onTableDataChange(1)
  }
  UpdateCountry()
  {
    this.missing = this.source.filter(item => this.sourceStations.indexOf(item) < 0);
     this.removeddata=this.missing.filter(item => this.confirmed.indexOf(item) < 0);
     if(this.removeddata.length>0)
     {
      this.countrydat.listToAdd = this.removeddata.map(a => a.countryCode);
     }
     else
     {
       this.countrydat.listToAdd  = null;
     }
    this.Addcomparedata=this.source.filter(item => this.confirmed.indexOf(item) < 0);
    this.addeddata=this.sourceStations.filter(item => this.Addcomparedata.indexOf(item) < 0);
    if(this.addeddata.length>0)
    {
      this.countrydat.listToDelete  = this.addeddata.map(a => a.countryCode);
    }
    else
    {
      this.countrydat.listToDelete  = null;
    }
    this.countrydat.Userid=this.userTableFilters.id;
    this.loaderService.addRequest(this.usersService.savecountry(this.countrydat))
    .subscribe(response => {-
      console.log(response);
     
  });

  this.missingplatform=this.platform.filter(item => this.sourcePlatform.indexOf(item) < 0);
  this.removeplatformdata=this.missingplatform.filter(item => this.platformconfirmed.indexOf(item) < 0);
  if(this.removeplatformdata.length>0)
  {
   this.platformdata.listToAdd = this.removeplatformdata.map(a => a.platformCode);
  }
  else
  {
    this.platformdata.listToAdd  = null;
  }
  this.compareplatformdata=this.platform.filter(item => this.platformconfirmed.indexOf(item) < 0);
  this.platformaddeddata=this.sourcePlatform.filter(item => this.compareplatformdata.indexOf(item) < 0);
  if(this.platformaddeddata.length>0)
  {
    this.platformdata.listToDelete  = this.platformaddeddata.map(a => a.platformCode);
  }
  else
  {
    this.platformdata.listToDelete  = null;
  }
  this.platformdata.Userid=this.userTableFilters.id;
  this.loaderService.addRequest(this.usersService.saveplatform(this.platformdata))
  .subscribe(response => {-
    console.log(response);
   
});

    

  }
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
//   getUsers(resetParams = false) {
//     if (resetParams) {
//       this.basicParams = {};
//     }
//     const userdata= getFromStorage('userwer');
//       if(userdata !=null)
//       {
//     this.loaderService.addRequest(this.usersService.getUsers())
//       .subscribe(
//         (data:any) => {
        
//           this.tableRows = data;
//           this.totalRows = data.length;
         
//           console.log("vallue", data);
//           for (var val of this.tableRows) {
//              if(val.roleId==1)
//              {
//               val.role="Administrator";
//              }
//              if(val.roleId==2)
//              {
//               val.role="Reader";
//              }
//           }
//             this.onSelectSession(this.tableRows.length > 0 ? [this.tableRows[0]] : []);
//         }
      
//       );
//   }
// }
   
getUsers(resetParams = false) {
  if (resetParams) {
    this.basicParams = {};
  }

  this.loaderService.addRequest(this.usersService.getUsers(this.basicParams))
    .subscribe(
      (data:any) => {
      
        this.tableRows = data;
        this.totalRows = data.length;
       
        console.log("vallue", data);
        for (var val of this.tableRows) {
           if(val.roleId==1)
           {
            val.role="Administrator";
           }
           if(val.roleId==2)
           {
            val.role="Reader";
           }
           if(val.roleId==4)
           {
            val.role="NotAllowed";
           }
        }
          this.onSelectSession(this.tableRows.length > 0 ? [this.tableRows[0]] : []);
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
  showAddEditModal(editRow?: any) {

    const editMode = !_.isUndefined(editRow);
    const modalRef = this.modalsService.addEditEntity(SaveUserModalComponent, { windowClass: 'save-user-modal' });

    modalRef.componentInstance.headerTitle = {
      key: `modals.user.${editMode ? 'edit' : 'add'}Title`,
      defaultText: `${editMode ? 'Edit' : 'Add'} User`
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
          this.getUsers();
           this.tableRows = updateArrAtIndex(this.tableRows, editRow.index, newRowObj);
        } else {
          this.getUsers();
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
  deleteUser(editRow: any) {
    const headerTitle = { key: 'modals.user.deleteTitle', defaultText: 'Delete UsersService' };
    const entityName = { key: 'entities.user', defaultText: 'User' };
  //  const {rowinfo}=
    let use = this.tableRows.filter(x=>x.id==editRow.id);
     const entityValue = use[0].firstName + ' ' + use[0].lastName;

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
