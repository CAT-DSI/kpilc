import { ApplicationRef, Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { MainHeaderComponent } from 'src/app/shared/main-header/main-header.component';
import { BasicParams, PagingConfig, RecordStatus } from 'src/app/shared/models/app';
import { countrydata, Platformdata, User } from 'src/app/shared/models/auth.model';
import { Country, YearModel } from 'src/app/shared/models/country';
import { TranslateText } from 'src/app/shared/models/i18n';
import { CountryService } from 'src/app/shared/Services/country.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import { UsersService } from 'src/app/shared/Services/users.service';
import { getFromStorage } from 'src/app/utils/storage';
import * as _ from 'lodash';
import { FormControl, FormGroup } from '@angular/forms';
import { DualListComponent } from 'src/app/Administration/users/Dual-List/dual-list.component';
import { TranscodingFileTypes } from 'src/app/shared/models/transcoding';
import { OpendaysMgtModalComponent } from '../opendays-mgt-modal/opendays-mgt-modal.component';
import { OpendaysmodalComponent } from '../opendaysmodal/opendaysmodal.component';

@Component({
  selector: 'app-opendays',
  templateUrl: './opendays.component.html',
  styleUrls: ['./opendays.component.scss']
})
export class OpendaysComponent implements OnInit {
  @Input() hasActionColdelete = true;
  @Input() otherFilters: any;
  @ViewChild('chkboxColHeaderTmpl', { static: true }) chkboxColHeaderTmpl: TemplateRef<any>;
  @ViewChild('chkboxColCellTmpl', { static: true }) chkboxColCellTmpl: TemplateRef<any>;
  @ViewChild('roleColCellTmpl') roleColCellTmpl: TemplateRef<any>;
  @ViewChild(MainHeaderComponent, { static: false }) childC: MainHeaderComponent;
  countryList: Country[];
  yearList: YearModel[];
  selection: SelectionType;
  checkboxcheck: boolean;
  search = '';
  element: any = document.getElementsByClassName("datatable-body-row").item(0);
  searchText: any;
  tableSize: number[] = [5, 10, 15, 20];
  tableRows: User[];
  selectedSession: User[] = [];
  country: string;
  year: number;
  selectedSessionId: number;
  totalRows: number = 9;
  tableColumns = [];
  dataObject = [];
  colMinWidth = 180;
  colHeaderTranslateKeyPrefix = 'userColumns';
  pagingConfig: PagingConfig = {} as PagingConfig;
  countrydat: countrydata = {} as countrydata;
  platformdata: Platformdata = {} as Platformdata;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  pagination: number = 0;
  userTableFilters: any = {};
  userId: number;
  geoPoleTableFilters: any = {};
  basicParams: BasicParams = {};
  profiledata: string;
  CountryName: number;
  yearData: number;
  filteredArray;
  showPagination = false;
  breadcrumbs: TranslateText[] = [
    { key: 'nav.setting', defaultText: 'Setting' },
    { key: 'nav.GestionDesJoursFériésPourLesVolumes', defaultText: 'Gestion des jours fériés pour les volumes' },
  ];
  countryOptions: string[];


  constructor(
    private usersService: UsersService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
    private appref: ApplicationRef,
    private router: Router,
    private route: ActivatedRoute,
    private countryService: CountryService,
  ) {

    this.selection = SelectionType.single;
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems,
    }

    loaderService.addRequest(countryService.getCountriesEx({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          
          this.countryList = data;
          this.countryOptions = _.map(data, item => item.name);
          const selecteddta = getFromStorage('selecteddata');
          this.selectedName = selecteddta;
        }
      );

    loaderService.addRequest(countryService.getYears({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          
          this.yearList = data;
          this.countryOptions = _.map(data, item => item.year);
          
        }
      );
  }
  /*
    change other filters when search is triggered, so that the user table can be refreshed
   */
  onSearchTable(searchText: string) {
    this.otherFilters = { ...this.otherFilters, name: searchText };
  }
  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
  }
  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getUsers();
  }

  tab = 1;
  keepSorted = true;
  key: string;
  keyplatform: string;
  display: string;
  displayplatform: string;
  userForm: FormGroup;
  filter = false;
  countryadd: any[];
  source: Array<any>;
  platform: Array<any>;
  confirmed: Array<any>;
  platformconfirmed: Array<any>;
  afterswap: Array<any>;
  missing: Array<any>;
  missingplatform: Array<any>;
  Addcomparedata: Array<any>;
  compareplatformdata: Array<any>;
  addeddata: any[];
  platformaddeddata: any[];
  removeddata: any[];
  removeplatformdata: any[];
  userAdd = '';
  disabled = false;
  selectedName: [];
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
    this.tableColumns = [
      { name: 'Country', prop: 'country', sortable: false },
      { name: 'Plateform', prop: 'month', sortable: false },
      { name: 'Nbr', prop: 'nbr', sortable: false },
      { name: 'Opendays', prop: 'openDays', sortable: false },
    ];
    this.tableColumns = [...this.tableColumns];
    this.userForm = new FormGroup({
      country: new FormControl(''),
      year : new FormControl(0)
    })    
    
    // this.selectedName = this.userForm.value.year.year;
    // saveToStorage("selecteddata", this.selectedName, true);
//this.getUsers();
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
          .subscribe(response => {
            -console.log(response);
          });
      }
    });
  }

  onSelected(event) {
  }
  saverange() {
    this.onTableDataChange(1)
  }
  UpdateCountry() {
    this.missing = this.source.filter(item => this.sourceStations.indexOf(item) < 0);
    this.removeddata = this.missing.filter(item => this.confirmed.indexOf(item) < 0);
    if (this.removeddata.length > 0) {
      this.countrydat.listToAdd = this.removeddata.map(a => a.countryCode);
    }
    else {
      this.countrydat.listToAdd = null;
    }
    this.Addcomparedata = this.source.filter(item => this.confirmed.indexOf(item) < 0);
    this.addeddata = this.sourceStations.filter(item => this.Addcomparedata.indexOf(item) < 0);
    if (this.addeddata.length > 0) {
      this.countrydat.listToDelete = this.addeddata.map(a => a.countryCode);
    }
    else {
      this.countrydat.listToDelete = null;
    }
    this.countrydat.Userid = this.userTableFilters.id;
    this.loaderService.addRequest(this.usersService.savecountry(this.countrydat))
      .subscribe(response => {
        -console.log(response);
      });

    this.missingplatform = this.platform.filter(item => this.sourcePlatform.indexOf(item) < 0);
    this.removeplatformdata = this.missingplatform.filter(item => this.platformconfirmed.indexOf(item) < 0);
    if (this.removeplatformdata.length > 0) {
      this.platformdata.listToAdd = this.removeplatformdata.map(a => a.platformCode);
    }
    else {
      this.platformdata.listToAdd = null;
    }
    this.compareplatformdata = this.platform.filter(item => this.platformconfirmed.indexOf(item) < 0);
    this.platformaddeddata = this.sourcePlatform.filter(item => this.compareplatformdata.indexOf(item) < 0);
    if (this.platformaddeddata.length > 0) {
      this.platformdata.listToDelete = this.platformaddeddata.map(a => a.platformCode);
    }
    else {
      this.platformdata.listToDelete = null;
    }
    this.platformdata.Userid = this.userTableFilters.id;
    this.loaderService.addRequest(this.usersService.saveplatform(this.platformdata))
      .subscribe(response => {
        -
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
    const modalRef = this.modalsService.addEditEntity(OpendaysmodalComponent, { windowClass: 'save-user-modal' });

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
        console.log("response is" + response);
        if (editMode) {
          const newRowObj = { ...editRow, ...response };
         // location.reload();
          this.getUsers();
        } else {
        }
      }
    });
  }

  get countryName() {   
    this.profiledata = this.userForm.value.country.code;
    this.CountryName = this.userForm.value.country.name;
    const selecteddta = getFromStorage('selecteddata');
    this.selectedName = selecteddta;
    return this.userForm.get('country');
  }
  get yearName() {   
    this.yearData = this.userForm.value.year.year;
    return this.userForm.get('year');
  }
  
  getOpenDays(e) {
    this.countryName.setValue(e.target.value, {
      onlySelf: true
    })
    this.yearName.setValue(e.target.value, {
      onlySelf: true
    })
    
    this.loaderService.addRequest(this.usersService.getOpenDaysByCountryAndYear(this.profiledata, this.yearData))
      .subscribe(
        (data: any) => {
          
          this.tableRows = data.map(record=>{
            if(record.day){
              const dateValue = record.day;
              record.day = this.formatDate(dateValue);
            }
            return record
          });
          this.totalRows = data.length;
          this.tableRows.filter(item => item.isDelayReport);
          console.log("vallue", data);
        }
      );

  }
  formatDate(dateString: string): string {
    return dateString.split('T')[0];
  }
  getUsers(resetParams = false) {
    if (resetParams) {
      this.basicParams = {};
    }
    
    this.loaderService.addRequest(this.usersService.getOpenDaysByCountryAndYear(this.profiledata, this.yearData))
      .subscribe(
        (data: any) => {
          
          this.tableRows = data.map(record=>{
            if(record.day){
              const dateValue = record.day;
              record.day = this.formatDate(dateValue);
            }
            return record
          });
          this.totalRows = data.length;
          this.tableRows.filter(item => item.isDelayReport);
          console.log("vallue", data);
        }
      );
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
    let use = this.tableRows.filter(x => x.id == editRow.id);
    const entityValue = 'Country -' + editRow.country;

    const modalRef = this.modalsService.deleteConfirmation(headerTitle, entityName, entityValue);

    // listen to delete confirmation so that the delete service may be called
    modalRef.componentInstance.deleteConfirmed.subscribe(() => {
      const userId = use[0].id;

      this.loaderService.addRequest(this.usersService.deleteFromWeb_OpenDaysDet(userId))
        .subscribe(response => {  
          modalRef.close();       
          this.getUsers();
        },
          err => {
            if (err.status == "200") {
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

  private useStations() {
    this.key = 'countryId';
    this.keyplatform = 'platformId';
    this.displayplatform = 'platformCode';
    this.display = 'countryCode'; // [ 'station', 'state' ];
    this.keepSorted = true;
    this.source = [...this.sourceStations, ...this.Nonstations];
    this.confirmed = this.Nonstations;
    this.afterswap = this.sourceStations;
    this.platform = [...this.sourcePlatform, ...this.Platformnoncountry];
    this.platformconfirmed = this.Platformnoncountry;
  }

  doReset() {
    this.sourceStations = JSON.parse(JSON.stringify(this.stations));
    this.sourcePlatform = JSON.parse(JSON.stringify(this.Platformcountry));
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

