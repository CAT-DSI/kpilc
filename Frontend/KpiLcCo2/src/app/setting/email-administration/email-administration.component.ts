import { ApplicationRef, Component, ElementRef, HostListener, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TranslateText } from 'src/app/shared/models/i18n';
import { DualListComponent } from 'src/app/Administration/users/Dual-List/dual-list.component';
import { BasicParams, PagingConfig } from 'src/app/shared/models/app';
import { SelectionType, id } from '@swimlane/ngx-datatable';
import { EmailModel, Platformdata, User, countrydata } from 'src/app/shared/models/auth.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import * as _ from 'lodash';
import { TranscodingFileTypes } from 'src/app/shared/models/transcoding';
import { MainHeaderComponent } from 'src/app/shared/main-header/main-header.component';
import { NotificationService } from 'src/app/shared/Services/notification.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-email-administration',
  templateUrl: './email-administration.component.html',
  styleUrls: ['./email-administration.component.scss']
})
export class EmailAdministrationComponent implements OnInit {

  @Input() hasActionCol = true;
  @Input() otherFilters: any;
  @ViewChild('chkboxColHeaderTmpl', { static: true }) chkboxColHeaderTmpl: TemplateRef<any>;
  @ViewChild('chkboxColCellTmpl', { static: true }) chkboxColCellTmpl: TemplateRef<any>;
  @ViewChild('roleColCellTmpl') roleColCellTmpl: TemplateRef<any>;
  @ViewChild(MainHeaderComponent, { static: false }) childC: MainHeaderComponent;
  selection: SelectionType;
  checkboxcheck: boolean;
  search = '';
  element: any = document.getElementsByClassName("datatable-body-row").item(0);
  searchText: any;
  tableSize: number[] = [5, 10, 15, 20];
  tableRows: EmailModel[];
  selectedSession: User[] = [];
  selectedSessionId: number;
  totalRows: number = 9;
  tableColumns = [];
  dataObject = [];
  colMinWidth = 50;
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
  filteredArray;
  showPagination = false;
  breadcrumbs: TranslateText[] = [
    { key: 'nav.setting', defaultText: 'Setting' },
    { key: 'nav.EmailAdministration', defaultText: 'Email Administration' },
  ];


  constructor(
    private usersService: UsersService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
    private appref: ApplicationRef,
    private notificationService: NotificationService,
    private router: Router,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private el: ElementRef
  ) {

    this.selection = SelectionType.single;
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
  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
    //this.getUsers();
  }
  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getUsers();
  }

  tab = 1;
  keepSorted = true;
  @Input() updateinfo = "12";
  key: string;
  keyplatform: string;
  display: string;
  displayplatform: string;
  filter = false;
  userAdd = '';
  disabled = false;
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  monthMapping: { [key: number]: string } = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  transformMonths(months: string | null): string[] {

    if (!months) {
      return ['']
    } else {
      const daysArray = months.split(',').map(Number);
      return daysArray.map(day => this.monthMapping[day]);
    }
  };

  dayMapping: { [key: number]: string } = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };
  transformDays(days: string | null): string[] {

    if (!days) {
      return ['']
    } else {
      const daysArray = days.split(',').map(Number);
      return daysArray.map(day => this.dayMapping[day]);
    }
  };

  getFrequencyLabel(frequencies: { frequencyLabel: string }[]): string {
    debugger
    if (!frequencies || frequencies.length === 0) {
      return 'no frequency';
    }
    return frequencies.map(f => f.frequencyLabel).join(', ');
  }

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
  visibleColumns = [];
  showColumnSelector: boolean = false;

  ngOnInit() {
    this.notificationService.currentMessage.subscribe(({ message, type }) => {
      this.message = message;
      this.messageType = type;
    });

    this.tableColumns = [
      { name: 'Report Name', prop: 'reportName', sortable: false, visible: true },
      { name: 'Specific Months', prop: 'selectedMonths', sortable: false, visible: true },
      { name: 'Specific Days', prop: 'selectedDays', sortable: false, visible: true },
      { name: 'Specific Days in month', prop: 'datesRange', sortable: false, visible: false },
      { name: 'Frequencies', prop: 'frequencies', sortable: false, visible: false },
      { name: 'Emails', prop: 'emails', sortable: false, visible: true },
      { name: 'Updated By', prop: 'updatedby', sortable: false, visible: true },
      { name: 'Updated Date', prop: 'updatedDate', sortable: false, visible: true },
      { name: 'Every month', prop: 'eachMonth', sortable: false, visible: false },
      { name: 'Everyday', prop: 'eachDay', sortable: false, visible: false },
    ];

    this.updateVisibleColumns();
    this.tableColumns = [...this.tableColumns];
    this.getUsers();
    this.doReset();

  }

  updateVisibleColumns() {
    this.visibleColumns = this.tableColumns.filter(column => column.visible);
  }

  toggleColumnVisibility(event: MouseEvent) {
    debugger
    this.showColumnSelector = !this.showColumnSelector;
    event.stopPropagation();
  }

   // Detect click outside the column visibility div to close it
   @HostListener('document:click', ['$event'])
   clickOutside(event: MouseEvent) {
     // Check if the clicked target is outside the button or column visibility toggles
     const clickInsideButton = this.el.nativeElement.querySelector('.customeButton').contains(event.target);
     const clickInsideDropdown = this.el.nativeElement.querySelector('.column-visibility-toggles').contains(event.target);
 
     // If the click is outside both the button and the dropdown, hide the dropdown
     if (!clickInsideButton && !clickInsideDropdown) {
       this.showColumnSelector = false;
     }
   }

  toggleColumnSelection(column: { prop: string, visible: boolean }, isChecked: boolean) {
    debugger
    column.visible = isChecked;
    this.updateVisibleColumns(); // Update the visible columns after toggling
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
            -
              console.log(response);

          });

      }
    });
  }

  onSelected(event) {


  }
  saverange() {
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

    this.loaderService.addRequest(this.usersService.getAllEmailtemForListing())
      .subscribe(
        (data: any) => {

          this.tableRows = data.map(record => {

            record.selectedDays = this.transformDays(record.selectedDays);
            record.selectedMonths = this.transformMonths(record.selectedMonths);
            record.frequencies = this.getFrequencyLabel(record.frequencies);
            record.updatedDate = this.datePipe.transform(record.updatedDate, 'dd/MM/yyyy HH:mm')
            return record;
          }
          );
          this.totalRows = data.length;
        }

      );
    this.loaderService.addRequest(this.usersService.getVersion())
      .subscribe(
        (data: any) => {
          this.updateinfo = data.kpilcRefreshDate;
          console.log("dats " + data);

        },
        err => {
          if (err.status == "200") {

          }

        });
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
    add new user, this just shows the modal
   */
  addUser() {
    this.router.navigate(['setting/addEmailadministration']);

  }
  deleteUser(editRow: any) {
    const headerTitle = { key: 'modals.user.deleteTitle', defaultText: 'Delete UsersService' };
    const entityName = { key: 'entities.user', defaultText: 'User' };
    let use = this.tableRows.filter(x => x.id == editRow.id);
    const entityValue = 'Report' + ' ' + editRow.reportName;

    const modalRef = this.modalsService.deleteConfirmation(headerTitle, entityName, entityValue);

    // listen to delete confirmation so that the delete service may be called
    modalRef.componentInstance.deleteConfirmed.subscribe(() => {
      const userId = use[0].id;

      this.loaderService.addRequest(this.usersService.deleteEmailById(userId))
        .subscribe(response => {
          this.getUsers();
          modalRef.close();
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
  target: string = "";
  editUser(editRow: any) {
    debugger
    this.target = '/edit/' + editRow.id;
    //this.router.navigate(['/edit', editRow.id],{state:{rowData:editRow}});
    this.router.navigate(['setting/editEmailadministration', editRow.id], { state: { row: editRow } });

  }


  private useStations() {
    this.key = 'countryId';
    this.keyplatform = 'platformId';
    this.displayplatform = 'platformCode';
    this.display = 'countryCode';
    this.keepSorted = true;
  }

  doReset() {
    if (this.stations) {
      this.sourceStations = JSON.parse(JSON.stringify(this.stations));
    }
    if (this.Platformcountry) {
      this.sourcePlatform = JSON.parse(JSON.stringify(this.Platformcountry));
    }
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
