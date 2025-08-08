import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import * as _ from 'lodash';
//import { ReportmodalComponent } from '../reportmodal/reportmodal.component';
import { Profile, ProfileModel } from 'src/app/shared/models/auth.model';
import { PagingConfig } from 'src/app/shared/models/app';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/shared/Services/error-handler.service';
import { TranslateText } from 'src/app/shared/models/i18n';
import { ActivatedRoute, Router } from '@angular/router';
import { profile } from 'src/app/shared/models/country';
import { SelectionType, id } from '@swimlane/ngx-datatable';
import { getFromStorage } from 'src/app/utils/storage';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/shared/Services/report.service';



@Component({
  selector: 'profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
  // encapsulation: ViewEncapsulation.None

})
export class ProfileListComponent implements OnInit {
  myControl = new FormControl('');
  @Input() hasActionCol = true;
  @Input() otherFilters: any;
  @ViewChild('chkboxColHeaderTmpl', { static: true }) chkboxColHeaderTmpl: TemplateRef<any>;
  @ViewChild('chkboxColCellTmpl', { static: true }) chkboxColCellTmpl: TemplateRef<any>;
  @ViewChild('roleColCellTmpl') roleColCellTmpl: TemplateRef<any>;
  selectedSession: Profile[] = [];
  //countrydata1:countrydata;



  selectedSessionId: number;
  totalRows: number;
  // basicParams: BasicParams = {
  //   sortBy: 'firstName',
  //   sortType: SortTypes.DESC
  // };
  tableRows: Profile[];
  name: string = "";
  search = '';
  searchText: any;
  ProfileModel: ProfileModel = {} as ProfileModel;
  userTableFilters: any = {};
  tableColumns = [];
  errorMessage: string = '';
  dataObject = [];
  profileoption: string[];
  profilelist: profile[];
  output: any[];
  addeddata: any[];
  storedata: any[];
  output1: string;
  titles = [];
  pagingConfig: PagingConfig = {} as PagingConfig;
  colMinWidth = 380;
  colHeaderTranslateKeyPrefix = 'userColumns';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  selection: SelectionType;
  items1: ProfileModel[] = [];
  userid: number;
  totalItems: number = 0;
  isChecked: boolean;
  userdata = getFromStorage('userwer');
  breadcrumbs: TranslateText[] = [

    { key: 'nav.administration', defaultText: 'Administration' },
    { key: 'nav.profilemanagement', defaultText: 'Profile Management' },
    // { key: '', defaultText: '' },
    // { key: 'nav.user', defaultText: 'User' }
  ];



  constructor(
    private elementRef: ElementRef,
    private usersService: UsersService,
    private Reportservice: ReportService,
    private toastr: ToastrService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
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
  }



  areAllSelected = false;

  items = [
    { name: 'ITem 1', selected: false },
    { name: 'ITem 1', selected: false },
    { name: 'ITem 1', selected: false },
    { name: 'ITem 1', selected: false },
    { name: 'ITem 1', selected: false }
  ];

  toggleAllSelection() {
    this.areAllSelected = !this.areAllSelected;
    this.items = this.items.map(item => ({ ...item, selected: this.areAllSelected }));
  }

  onSearchTable(searchText: string) {
    this.otherFilters = { ...this.otherFilters, name: searchText };
  }
  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
    // this.getReports();

  }
  filter = false;
  saverange() {
    this.onTableDataChange(1)
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



    const userdata = getFromStorage('userwer');
    this.loaderService.addRequest(this.Reportservice.getCategories(userdata.id))
      .subscribe(
        (data: any) => {

          this.tableRows = data;
          this.totalRows = data.length;
          if (this.storedata != null) {

            this.storedata = this.storedata.filter(function (element) {
              return element !== undefined;
            });
            var uniqueArray = this.removeDuplicates(this.storedata, "id");
            let array = this.tableRows.filter(o1 => uniqueArray.some(o2 => o1.id === o2.id));
            if (this.storedata != null && this.storedata != undefined) {
              this.Checked(this.storedata[0].id);
            }

          }

          console.log("vallue", data);
          error: (err: HttpErrorResponse) => {
            this.errorHandler.handleError(err);
            this.errorMessage = this.errorHandler.errorMessage;
          }

          //this.onSelectSession(this.tableRows.length > 0 ? [this.tableRows[0]] : []);

        }


      );
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
    this.storedata = this.storedata.filter((item) => {
      if (item.id === this.storedata[0].id) {
        item.isChecked = !(this.storedata[0].isChecked);
      }

      return item;
    });
    this.storedata = this.storedata.filter(item => item.isChecked);
    this.ProfileModel.ReportId = this.storedata.map(a => a.id);;
  }
  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }
  getClass(resulution: string) {

    return {

      'warn': resulution == "",
      'sucess': resulution.length > 0,
    }
  }
  addUser() {
    this.ProfileModel.profileName = this.name;
    if ((this.name == null || this.name == "") && this.addeddata == undefined) {
      this.toastr.warning("Please fill the following mandatory feilds: Profile Name and Reports", 'Message', {
        timeOut: 3000,
      });
    }
    else if (this.name == null || this.name == "") {
      this.toastr.warning("Profile name is mandatory field", 'Message', {
        timeOut: 3000,
      });
    }
    else if (this.addeddata == undefined || this.storedata == null || this.storedata == undefined || this.storedata.length <= 0) {
      this.toastr.warning("Profile cannot be created without any report", 'Message', {
        timeOut: 3000, closeButton: true
      });
    }
    else {
      const modalRef = this.modalsService.downloadConfirmation();

      modalRef.componentInstance.headerTitle = {
        key: 'Info',
        defaultText: 'Info'
      };

      modalRef.componentInstance.confirmationTxt = {
        key: 'Are you sure you want to create that profile ?',
        defaultText: 'Are you sure you want to create that profile ?'
      }
      modalRef.componentInstance.confirmBtnTxt = { key: 'buttons.no', defaultText: 'NO' };
      modalRef.componentInstance.confirmBtnIconUrl = "assets/icons/close.svg"
      modalRef.componentInstance.confirmBtnClass = 'btn-download';

      modalRef.result.then(response => {
        // if modal closes with confirm message then start the download
        if (response === 'confirm') {
          debugger
          this.loaderService.addRequest(this.usersService.saveProfile(this.ProfileModel))
            .subscribe(response => {


            },
              Apiresponse => {
                if (Apiresponse.status == "200" && Apiresponse.error.text == "Profile already exist.") {
                  this.toastr.error(Apiresponse.error.text, 'Message', {
                    timeOut: 3000,
                  });
                }else{
                  this.toastr.success(Apiresponse.error.text, 'Message', {
                    timeOut: 3000,
                  });
                }
              });
        }
      });

    }



    // else
    // {
    //   this.toastr.warning("To Save profile Please Fill Profile Name And select report", 'Message', {
    //     timeOut: 3000,
    //   });

    //   }
  }



  keyPress(event: KeyboardEvent) {
    console.log("button press");
  }
  CancelProfile() {
    this.router.navigate(['reports/all']);
  }

  onSelectSession(selectedSession: Profile[]) {
    this.selectedSession = [...selectedSession];
    if (this.selectedSession.length > 0) {
      // if(this.selectedSession[0].checked==undefined)
      // {
      //   this.selectedSession[0].checked=true;
      // }
      // else if(this.selectedSession[0].checked==true)
      // {
      //   this.selectedSession[0].checked=false;
      // }
      // else
      // {
      //   this.selectedSession[0].checked=true;
      // }
      const { id } = this.selectedSession[0];
      this.userTableFilters = { ...this.userTableFilters, id };
    }
  }
  ngOnInit() {
    const checkboxColConfig = {
      name: '', prop: 'isAssociated', minWidth: 40, width: 40, canAutoResize: false,
      headerTemplate: this.chkboxColHeaderTmpl, cellTemplate: this.chkboxColCellTmpl
    };
    this.tableColumns = [
      { name: 'List of reports to associate', prop: 'label', sortable: false }
    ];

    this.tableColumns = [checkboxColConfig, ...this.tableColumns];
    //}


    // this.tableColumns = [ ...this.tableColumns ];


    this.getReports();
  }

  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getReports();
  }
  // addUser()
  // {
  //   const editMode = !_.isUndefined();

  //   const modalRef = this.modalsService.addEditEntity(ReportmodalComponent, { windowClass: 'save-user-modal' });

  //   modalRef.result.then(response => {
  //     if (typeof response !== 'string') {
  //       if (editMode) {
  //         // const newRowObj = { ...this.tableRows[editRowIndex], ...response };
  //         // this.tableRows = updateArrAtIndex(this.tableRows, editRowIndex, newRowObj);
  //       } else {
  //         // this.getUsers();
  //       }
  //     }
  //   });
  // }
}
