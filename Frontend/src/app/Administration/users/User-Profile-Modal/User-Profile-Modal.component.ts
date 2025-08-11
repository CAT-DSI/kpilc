import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import * as _ from 'lodash';
//import { ReportmodalComponent } from '../reportmodal/reportmodal.component';
import { Profile, ProfileModel } from 'src/app/shared/models/auth.model';
import { BasicParams, PagingConfig } from 'src/app/shared/models/app';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/shared/Services/error-handler.service';
import { TranslateText } from 'src/app/shared/models/i18n';
import { ActivatedRoute } from '@angular/router';
import { profile } from 'src/app/shared/models/country';
import { SelectionType, id } from '@swimlane/ngx-datatable';
import { getFromStorage } from 'src/app/utils/storage';
import { FormControl } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { option } from 'src/app/shared/Util/criteria-base';
import { ReportService } from 'src/app/shared/Services/report.service';
import { autoCompleteModel } from 'src/app/shared/models/Referential.Model';
import { Observable, zip } from "rxjs";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-createprofilenuinop',
  templateUrl: './User-Profile-Modal.component.html',
  styleUrls: ['./User-Profile-Modal.component.scss']
})
export class UserProfileModalcomponent implements OnInit  {
  myControl = new FormControl('');
  @Input() hasActionCol = true;
  @Input() otherFilters: any;
  @ViewChild('chkboxColHeaderTmpl',{static:true}) chkboxColHeaderTmpl: TemplateRef<any>;
  @ViewChild('chkboxColCellTmpl', {static:true}) chkboxColCellTmpl: TemplateRef<any>;
  @ViewChild('roleColCellTmpl') roleColCellTmpl: TemplateRef<any>;
  @Output() childButtonEvent = new EventEmitter();
  @Output() onInitEvent = new EventEmitter();

  selectedSession: Profile[]=[];
  @Input() public selected;
  @Input() public data;
   //countrydata1:countrydata;
   
   keyword = 'profileName';
 
  selectedSessionId: number;
  totalRows: number;
  search='';
  selectedOptions: option[] = [];  
  tableRows: Profile[];
  tablerowsextra:profile[];
  filteredOptions= [];
  name: string="";
  ProfileModel:ProfileModel={} as ProfileModel;
  userTableFilters: any = {};
  tableColumns = [];
  storedata:any[];
  public bankMultiFilterCtrl: FormControl = new FormControl();
  errorMessage: string = '';
  dataObject = [];
  storecheckeddata:any[];
  profileoption:string[];
  profilelist:profile[];
   output :any[];
   addeddata:any[];
   output1:string;
    titles=[];
    autoComplete: autoCompleteModel;
  pagingConfig: PagingConfig = {} as PagingConfig;
  colMinWidth = 380;
  colHeaderTranslateKeyPrefix = 'userColumns';
  currentPage:number  = 1;
  itemsPerPage: number = 5;
  passdata:any;
  selection:SelectionType;
  items1: ProfileModel[] = [];
  userid:number;
  totalItems: number = 0;
  isChecked:boolean;
  @Output() onChangeId = new EventEmitter();
  breadcrumbs: TranslateText[]  = [
    
    { key: 'nav.administration', defaultText: 'Administration' },
    { key: 'nav.Usermange', defaultText: 'User Management' },
  ];

 
 
  constructor(
    public activeModal: NgbActiveModal,
    private ReportService: ReportService,
    private usersService:UsersService,
    private toastr: ToastrService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute
  ) { 
    this.selection=SelectionType.checkbox;
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

 saverange()
  {
    this.onTableDataChange(1)
  }

  areAllSelected = false;
  public countries = [];

  items = [
    { name: 'ITem 1', selected: false },
    { name: 'ITem 1', selected: false },
    { name: 'ITem 1', selected: false },
    { name: 'ITem 1', selected: false },
    { name: 'ITem 1', selected: false }
  ];

  private emitWarehouseId(id: any) {
    this.onChangeId.emit(id);
  }
  protected filterBanksMulti() {
   // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) return;
     else search = search.toLowerCase();
    //this._filter(search);
  }
  toggleAllSelection() {
    this.areAllSelected = !this.areAllSelected;
    this.items = this.items.map(item => ({ ...item, selected: this.areAllSelected}));
  }
  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.getReports();
  }
  

  getReports() {
   
      const userdata= getFromStorage('userwer');

      this.loaderService.addRequest(this.usersService.GetReportsNorProfile(this.selected.id))
      .subscribe(
        (data:any) => {
        
          this.tableRows = data;
          this.totalRows = data.length;
       
          this.data.map((firstObj) => {
            this.tableRows.map((compareObj, i) => {
              if (firstObj.id === compareObj.id) {
                this.tableRows.splice(i, 1);
          }
        })
        this.storecheckeddata = this.storecheckeddata.filter(function( element ) {
          return element !== undefined;
       });
        var uniqueArray = this.removeDuplicates(this.storecheckeddata, "id"); 
          let array=this.tableRows.filter(o1 => uniqueArray.some(o2 => o1.id === o2.id));
          if(this.storecheckeddata!=null && this.storecheckeddata!=undefined)
          {
          this.Checked(this.storecheckeddata[0].id);
          }
      })
        
       
         
          console.log("vallue", data);

          error: (err: HttpErrorResponse) => {
            this.errorHandler.handleError(err);
            this.errorMessage = this.errorHandler.errorMessage;
        }
         
            this.onSelectSession(this.tableRows.length > 0 ? [this.tableRows[0]] : []);
        }
      
        
      );
  }
  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}
  disassociateCenter(rowIndex) {
    rowIndex= (this.pagingConfig.itemsPerPage * (this.pagingConfig.currentPage-1)) +  rowIndex;
    const id1 = this.tableRows[rowIndex].id;
    this.addeddata = this.tableRows.filter(a=>a.id==id1);
    this.storedata=this.addeddata.concat(this.storedata);
    if(this.storedata.length >0)
   {
     this.storedata = this.storedata.filter(function( element ) {
       return element !== undefined;
    });
   this.storedata=this.removeDuplicates(this.storedata,"id");
   }
    this.storecheckeddata = this.storedata.filter((item) => {
    
      if (item.id ===  this.storedata[0].id) {
          item.isChecked = (!item.isChecked) ;
         this.storedata[0].isChecked=item.isChecked;
      }

       return item;
   });
   if(this.storecheckeddata.length >0)
   {
     this.storecheckeddata = this.storecheckeddata.filter(function( element ) {
       return element !== undefined;
    });
   this.storecheckeddata=this.removeDuplicates(this.storecheckeddata,"id");
   }
   
   this.storecheckeddata= this.storecheckeddata.filter(o => o.isChecked ==true);
    
   
  }
  addUser()
  {
    debugger
    this.ProfileModel.profileName=this.name;
    debugger
    this.loaderService.addRequest(this.usersService.saveProfile(this.ProfileModel))
    .subscribe(response => {

      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
    }

      }
     
    );
   }
   
  onSelectSession(selectedSession: Profile[]) {
    this.selectedSession = [ ...selectedSession];
    if (this.selectedSession.length > 0) {
      const { id } = this.selectedSession[0];
      this.emitWarehouseId(id);
      this.userTableFilters = { ...this.userTableFilters, id };
    }
  }
  Checked(id:number){
    if(this.storedata!=null && this.storedata!=undefined && id!=undefined)
    {
    for (let index = 0; index < this.storedata.length; index++) {
      if(id == this.storedata[index].id){
        return true;
     }
   }
  }
  return false;
  }
  clickHandler() {
    if(this.storecheckeddata.length > 0)
    {
    const modalRefpopup = this.modalsService.downloadConfirmation();

    modalRefpopup.componentInstance.headerTitle = {
      key: 'Info',
      defaultText: 'Info'
     
    };

    modalRefpopup.componentInstance.confirmationTxt = {
      key: 'Are you sure you want to modify that profile ?',
      defaultText: 'Are you sure you want to modify that profile ?'
    };

    modalRefpopup.componentInstance.confirmBtnTxt = { key: 'buttons.no', defaultText: 'NO' };
    modalRefpopup.componentInstance.confirmBtnIconUrl="assets/icons/close.svg"
//modalRefpopup.componentInstance.confirmBtnIconUrl = 'assets/icons/download.svg';
    modalRefpopup.componentInstance.confirmBtnClass = 'btn-download';
    modalRefpopup.result.then(response => {
      // if modal closes with confirm message then start the download
       if (response === 'confirm') {
        this.storecheckeddata.forEach((id)=>{
          this.titles.push(id.label);
          this.titles.push(id.id);
              });
              // this.addeddata.forEach((id)=>{
              //   this.titles.push(id.isChecked=true);
              //       });
              console.log(this.titles);
          
              for(var i = 0; i < this.titles.length; i++)
          { 
              console.log(this.titles[i]); // output: Apple Orange Banana
          }
          
            const reportid=this.titles;
            this.ProfileModel.ReportId=this.titles;
  this.activeModal.close(this.titles);
       }
});
    }
    else
    {
      this.toastr.warning("Please select any report Before click on Add", 'Message', {
        timeOut: 3000,
      });
    }
  
  }


  ngOnInit() {
   
    this.bankMultiFilterCtrl.valueChanges
    .subscribe(() => {
      this.filterBanksMulti();
    });
    this.getReports();
    const checkboxColConfig = {
      name: '', prop: 'isAssociated', minWidth: 40, width: 40, canAutoResize: false,
      headerTemplate: this.chkboxColHeaderTmpl, cellTemplate: this.chkboxColCellTmpl
    };
    this.tableColumns =[ 
      { name: 'Reports', prop: 'label' ,sortable: false }
    ];

    this.tableColumns = [ checkboxColConfig, ...this.tableColumns ];
  
  }
 
  onTableSizeChange(event:any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getReports();
  }
 
}
