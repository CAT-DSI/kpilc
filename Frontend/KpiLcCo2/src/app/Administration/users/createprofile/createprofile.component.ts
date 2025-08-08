import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
import { profile } from 'src/app/shared/models/country';
import { SelectionType, id } from '@swimlane/ngx-datatable';
import { getFromStorage } from 'src/app/utils/storage';
import { FormControl, FormGroup } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { option } from 'src/app/shared/Util/criteria-base';
import { ReportService } from 'src/app/shared/Services/report.service';
import { autoCompleteModel } from 'src/app/shared/models/Referential.Model';
import { Observable, zip } from "rxjs";
import { UserProfileModalcomponent } from '../User-Profile-Modal/User-Profile-Modal.component';
import { updateArrAtIndex } from 'src/app/utils/utility';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { warn } from 'console';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class CreateprofileComponent implements OnInit {
  userControl = new FormControl();


  myControl = new FormControl('');
  @Input() hasActionCol = true;
  @Input() otherFilters: any;
  @ViewChild('chkboxColHeaderTmpl', { static: true }) chkboxColHeaderTmpl: TemplateRef<any>;
  @ViewChild('chkboxColCellTmpl', { static: true }) chkboxColCellTmpl: TemplateRef<any>;
  @ViewChild('roleColCellTmpl') roleColCellTmpl: TemplateRef<any>;
  selectedSession: Profile[] = [];
  //countrydata1:countrydata;

  keyword = 'profileName';
  screenHeight: number;
  screenWidth: number;
  selectedSessionId: number;
  totalRows: number;
  selected: any;
  selectedOptions: option[] = [];
  // basicParams: BasicParams = {
  //   sortBy: 'firstName',
  //   sortType: SortTypes.DESC
  // };
  tableRows: Profile[];
  showCountryErrorMessage: boolean = false;
  removeSelectedId;
  food;
  disabledplusbutton: boolean = true;
  disabledsavebutton: boolean = true;
  disabledminusbutton: boolean = true;
  public event: EventEmitter<any> = new EventEmitter();
  tablerowsextra: profile[];
  filteredOptions = [];
  name: string = "";
  ProfileModel: ProfileModel = {} as ProfileModel;
  userTableFilters: any = {};
  tableColumns = [];
  getprofiledata: any[];
  getprofilereport: any[];
  public bankMultiFilterCtrl: FormControl = new FormControl();
  errorMessage: string = '';
  @Input() public passdata;
  basicParams: BasicParams = {};
  dataObject = [];
  profileoption: string[];
  profilelist: profile[];
  user = getFromStorage('userwer');
  msgOnButtonClick: string;
  msgOnChildCompInit: String;
  output: any[];
  addeddata: any[];
  storedata: any[];
  checkeddata: any[];
  storecheckeddata: any[];
  enabledisablebutton: any[];
  output1: string;
  titles = [];
  autoComplete: autoCompleteModel;
  article: any;
  pagingConfig: PagingConfig = {} as PagingConfig;
  colMinWidth = 380;
  colHeaderTranslateKeyPrefix = 'userColumns';
  @Output() warehouseId = new EventEmitter();
  currentPage: number = 1;
  itemsPerPage: number = 5;
  selection: SelectionType;
  items1: ProfileModel[] = [];
  userid: number;
  totalItems: number = 0;
  isChecked: boolean;
  form: FormGroup;
  breadcrumbs: TranslateText[] = [

    { key: 'nav.administration', defaultText: 'Administration' },
    { key: 'nav.profilemanagement', defaultText: 'Profile Management' },
    // { key: '', defaultText: '' },
    // { key: 'nav.user', defaultText: 'User' }
  ];



  constructor(
    public activeModal: NgbActiveModal,
    private ReportService: ReportService,
    private usersService: UsersService,
    //private toastr: ToastrService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
    private toastr: ToastrService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.selection = SelectionType.checkbox;
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
    this.getScreenSize();
  }



  areAllSelected = false;
  public countries = [];
  getClass(resulution: string) {

    return {

      'warn': resulution == "",
      'sucess': resulution.length > 0,
    }
  }
  onChangeSearch(event: any) {
    debugger
    event = event.pointerType == "mouse"? "": event
    this.getClass(event)
    this.ProfileModel.profileName = event;    
  }
  onFocused(event: any) {

    this.disabledplusbutton = true;
    this.disabledsavebutton = true;
    this.disabledminusbutton = true;
  }

  public onChangeWarehouseId(id: any) {
    console.log(id); // <-- receive id in parent component
  }
  protected filterBanksMulti() {
    // get the search keyword
    debugger
    let search = this.bankMultiFilterCtrl.value;
    if (!search) return;
    else search = search.toLowerCase();
    //this._filter(search);
  }

  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
    if (this.ProfileModel.profileName != null || this.ProfileModel.profileName == undefined) {

    }
    else {
      this.getReports();
    }
  }

  onPageSort(newParams: BasicParams) {
    this.basicParams = { ...this.basicParams, ...newParams };
    this.getReports();
  }
  ngDoCheck() {
    if ((this.food != null && this.food.length > 0)) {
      if (this.food == "cancel") {
        this.selectEvent(this.selected);
        this.food = null;
      }
      else {
        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.ReportService.getCategories(userdata.id))
          .subscribe(
            (data: any) => {
              for (let i = 0; i < this.food.length; i++) {
                this.disabledplusbutton = false;
                this.disabledsavebutton = false;
                this.getprofilereport = data.filter((value) => value.label === this.food[i]);
                this.getprofiledata = this.getprofilereport.concat(this.getprofiledata);


              }
              
              this.getprofilereport = data.map((value) => value.isChecked = true);
              // this.getprofiledata=data;
              this.tableRows = this.getprofiledata;
              this.pagingConfig.itemsPerPage = 5;

              //this.selected=this.getprofiledata;
              this.totalRows = data.length;

              this.food = null;

              console.log("vallue", data);

              error: (err: HttpErrorResponse) => {
                this.errorHandler.handleError(err);
                this.errorMessage = this.errorHandler.errorMessage;
              }
            });
      }
    }
    //  else
    //  {
    //   this.pagingConfig.itemsPerPage=5;
    //   this.pagingConfig.totalItems=this.tableRows.length;

    //  }
  }

  showAddEditModal(editRowIndex: any) {
    if (this.selected != null) {

debugger

      const editMode = !_.isUndefined(editRowIndex);

      const modalRef = this.modalsService.addEditEntity(UserProfileModalcomponent, { windowClass: 'save-user-modal' });

      modalRef.componentInstance.headerTitle = {
        key: `modals.user.${editMode ? 'edit' : 'add'}Title`,
        defaultText: `${editMode ? 'Edit' : 'Add'} User`
      };

      modalRef.componentInstance.formData = editMode ? this.tableRows[editRowIndex] : {};
      modalRef.componentInstance.inEditMode = editMode;
      modalRef.componentInstance.selected = this.selected;
      modalRef.componentInstance.data = this.tableRows;
      modalRef.result.then((result) => {
        this.food = result;
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });

      modalRef.result.then(response => {
        if (typeof response !== 'string') {
          if (editMode) {
            const newRowObj = { ...this.tableRows[editRowIndex], ...response };
            this.tableRows = updateArrAtIndex(this.tableRows, editRowIndex, newRowObj);
          } else {
            //this.getUsers();
          }
        }
      });
      // ()=> error => this.saveError = getErrorMessage(error)
      // });
      // );
      // });
    }
    else {
      this.toastr.warning("Please Select Profile", 'Warning', {
        timeOut: 4000,
      });

    }
    //editRowIndex=this.selected.id;





    // if the modal is closed with response as a non-string means it was a success
    // and the new object is passed as response,
    // if we are in edit mode we just update the table else we reload the page

  }
  // Showpopup()
  // {
  //   this.article
  //   this.showAddEditModal();
  // }
  onSubmit() {
  }

  selectEvent(item) {

    this.selected = item;
    this.storecheckeddata = [];
    this.storedata = [];
    this.disabledplusbutton = false;
    this.disabledminusbutton = true;
    this.disabledsavebutton = true;
    this.loaderService.addRequest(this.usersService.getProfileReport(item.id))
      .subscribe(
        (data: any) => {

          this.tableRows = data;

          this.removeSelectedId = data;
          this.getprofiledata = data;
          this.totalRows = data.length;


          console.log("vallue", data);

          error: (err: HttpErrorResponse) => {
            this.errorHandler.handleError(err);
            this.errorMessage = this.errorHandler.errorMessage;
          }
        });

  }
  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }
  Checked(id: number) {
    if (this.storedata != null && this.storedata != undefined && id != undefined) {
      for (let index = 0; index < this.storedata.length; index++) {
        if (id == this.storedata[index].id) {
          return true;
        }
      }
    }
    return false;
  }

  getReports() {

    this.loaderService.addRequest(this.usersService.getProfile())
      .subscribe(
        (data: any) => {
debugger
          this.filteredOptions = data.map(({ id, profileName }) => {

            return { id, profileName };

          });


          this.storecheckeddata = this.storecheckeddata.filter(function (element) {
            return element !== undefined;
          });
          var uniqueArray = this.removeDuplicates(this.storecheckeddata, "id");
          let array = this.tableRows.filter(o1 => uniqueArray.some(o2 => o1.id === o2.id));
          if (this.storecheckeddata != null && this.storecheckeddata != undefined) {            
            this.Checked(this.storecheckeddata[0].id);
          }

          //   error: (err: HttpErrorResponse) => {
          //     this.errorHandler.handleError(err);
          //     this.errorMessage = this.errorHandler.errorMessage;
          // }

          //     this.onSelectSession(this.tableRows.length > 0 ? [this.tableRows[0]] : []);
        }


      );

    const userdata = getFromStorage('userwer');

    this.loaderService.addRequest(this.ReportService.getCategories(userdata.id))
      .subscribe(
        (data: any) => {

          // this.tableRows = data;
          this.totalRows = data.length;

          console.log("vallue", data);

          error: (err: HttpErrorResponse) => {
            this.errorHandler.handleError(err);
            this.errorMessage = this.errorHandler.errorMessage;
          }

          this.onSelectSession(this.tableRows.length > 0 ? [this.tableRows[0]] : []);
        }


      );
  }

  checkboxCheck: boolean = false;
  onCheckboxChange(isChecked: boolean) {    
    this.checkboxCheck = isChecked;
  }

  disassociateCenter(rowIndex) {
    rowIndex = (this.pagingConfig.itemsPerPage * (this.pagingConfig.currentPage - 1)) + rowIndex;
    const id1 = this.tableRows[rowIndex].id;

    this.addeddata = this.tableRows.filter(a => a.id == id1);
    this.storedata = this.addeddata.concat(this.storedata);
    if (this.storedata.length > 0) {
      this.storedata = this.storedata.filter(function (element) {
        return element !== undefined;
      });
      this.storedata = this.removeDuplicates(this.storedata, "id");
    }
    this.storecheckeddata = this.storedata.filter((item) => {
      
      if (item.id === this.storedata[0].id) {
        if (item.menuSeq != null) {
          item.isChecked = (!this.checkboxCheck);
        }
        item.isChecked = (!item.isChecked);
        this.storedata[0].isChecked != item.isChecked;
      }

      return item;
    });
    if (this.storecheckeddata.length > 0) {
      this.storecheckeddata = this.storecheckeddata.filter(function (element) {
        return element !== undefined;
      });
      this.storecheckeddata = this.removeDuplicates(this.storecheckeddata, "id");
    }
    
    this.enabledisablebutton = this.storecheckeddata.find(o => o.isChecked == true);
    this.storecheckeddata = this.storecheckeddata.filter(o => o.isChecked == true);

    if ((this.enabledisablebutton != null || this.enabledisablebutton != undefined) && this.selected.profileName != null) {
      this.disabledminusbutton = false;
      this.disabledsavebutton = false;
    }
    else {
      this.disabledminusbutton = true;
      this.disabledsavebutton = true;
    }

    this.addeddata.forEach((id) => {
      this.titles.push(id.id);
    });
    console.log(this.titles);

    for (var i = 0; i < this.titles.length; i++) {
      console.log(this.titles[i]); // output: Apple Orange Banana
    }
    const reportid = this.titles;
    this.ProfileModel.ReportId = this.titles;

    this.addeddata = null;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log("height of screen", this.screenHeight, "width of screen", this.screenWidth);
  }
  ShowMinusPopUp() {
    if (this.storecheckeddata.length > 0) {
      this.storecheckeddata = this.storecheckeddata.filter(function (element) {
        return element !== undefined;
      });
    }
    if (this.storecheckeddata.length == this.tableRows.length) {
      this.toastr.warning("Profile cannot be updated without any report, it should be at least one report", 'Message', {
        timeOut: 8000, closeButton: true
      });
    }
    else {

      const modalRefpopup = this.modalsService.downloadConfirmation();

      modalRefpopup.componentInstance.headerTitle = {
        key: 'Info',
        defaultText: 'info'

      };

      modalRefpopup.componentInstance.confirmationTxt = {
        key: 'Are you sure you want to update the profile ?',
        defaultText: 'Are you sure you want to update the profile ?'
      };

      modalRefpopup.componentInstance.confirmBtnTxt = { key: 'buttons.no', defaultText: 'NO' };
      modalRefpopup.componentInstance.confirmBtnIconUrl = "assets/icons/close.svg"
      //modalRefpopup.componentInstance.confirmBtnIconUrl = 'assets/icons/download.svg';
      modalRefpopup.componentInstance.confirmBtnClass = 'btn-download';
      modalRefpopup.result.then(response => {
        // if modal closes with confirm message then start the download
        if (response === 'confirm') {
          this.loaderService.addRequest(this.usersService.getProfileReport(this.selected.id))
            .subscribe(
              (data: any) => {

                //this.tableRows = data;
                this.storecheckeddata = this.storecheckeddata.filter(function (element) {
                  return element !== undefined;
                });

                this.tableRows = this.tableRows.filter(one => !this.storecheckeddata.find(two => one.id == two.id));
                if (this.tableRows.length > 0) {

                }
                else {

                }
                //this.tableRows=this.getprofiledata;

                // this.getprofiledata=data;
                this.totalRows = data.length;
                this.storedata = [];
                this.storedata.length = 0;

                this.toastr.info("Please click on save button to save changes", 'Message', {
                  timeOut: 3000
                });
              });
        }
      });
    }
  }
  CancelProfile() {
    this.router.navigate(['reports/all']);
  }
  addUser() {

    if (this.ProfileModel != null) {
     debugger
      if (this.getprofiledata != null && this.getprofiledata.length > 0) {
        this.ProfileModel.ReportId = this.getprofiledata.map((value) => value.id);
        this.ProfileModel.ProfileId = this.selected.id;
        this.ProfileModel.profileName = this.userControl.value.profileName == undefined ? this.userControl.value : this.userControl.value.profileName;

        // let removeid= this.removeSelectedId.map((value)=>value.id);

        let filterddata = this.getprofiledata.filter((value) => value.isChecked == false); //to check
        this.ProfileModel.ReportId = this.tableRows.map((value) => value.id);//to check  will do later

        // console.log("removerid", this.ProfileModel.ReportId);
      }
debugger
      this.loaderService.addRequest(this.usersService.saveProfile(this.ProfileModel))

        .subscribe(response => {
          console.log('response', response);

        },
          err => {
            debugger
            if (err.status == "200") {
              this.pagingConfig.itemsPerPage = 5;
              this.pagingConfig.currentPage = 1;
              this.toastr.success("Profile modified successfully", 'Message', {
                timeOut: 3000,
              });
              this.ngOnInit();
              //location.reload() 
              this.storedata.length = 0;
              this.storedata = [];
              this.ProfileModel.ReportId = null;
              this.storecheckeddata = [];
              this.storecheckeddata.length = 0;
              this.titles.length = 0;
              this.titles = [];
              this.disabledsavebutton = true;
              this.disabledminusbutton = true;
            }
          });
    }
    else {
      this.toastr.warning("Please select report ", 'Message', {
        timeOut: 3000,
      });

    }


  }

  onSelectSession(selectedSession: Profile[]) {
    this.selectedSession = [...selectedSession];
    if (this.selectedSession.length > 0) {
      const { id } = this.selectedSession[0];
      this.userTableFilters = { ...this.userTableFilters, id };
    }
  }

  ngOnInit() {


    if (!localStorage.getItem('foo')) {
      // localStorage.setItem('foo', 'no reload') 
      // location.reload() 
    } else {
      localStorage.removeItem('foo')
    }
   
    this.bankMultiFilterCtrl.valueChanges
      .subscribe(() => {
        this.filterBanksMulti();
      });
    this.getReports();
    const checkboxColConfig = {
      name: '', prop: 'isAssociated', minWidth: 40, width: 40, canAutoResize: false,
      headerTemplate: this.chkboxColHeaderTmpl, cellTemplate: this.chkboxColCellTmpl
    };
    this.tableColumns = [
      { name: 'List of associated reports.', prop: 'label', sortable: false }
    ];

    this.tableColumns = [checkboxColConfig, ...this.tableColumns];


  }

  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getReports();
  }

}
