import { ApplicationRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { TranslateText } from 'src/app/shared/models/i18n';
import { DualListComponent } from 'src/app/Administration/users/Dual-List/dual-list.component';


import { BasicParams, PagingConfig } from 'src/app/shared/models/app';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Platformdata, User, countrydata } from 'src/app/shared/models/auth.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import { updateArrAtIndex } from 'src/app/utils/utility';
import * as _ from 'lodash';
import { TranscodingFileTypes } from 'src/app/shared/models/transcoding';
import { MainHeaderComponent } from 'src/app/shared/main-header/main-header.component';
import { ReportmodalComponent } from 'src/app/Administration/users/reportmodal/reportmodal.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ExcelService } from 'src/app/shared/Services/excel.service';




/*
  users configuration page
 */
@Component({
  selector: 'app-users',
  templateUrl: './DelayReportMgt.component.html',
  styleUrls: ['./DelayReportMgt.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DelayReportMgtComponent implements OnInit {
  @Input() hasActionCol = true;
  @Input() updateinfo = "12";
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

  selectedSession: User[] = [];
  selectedSessionId: number;

  tableColumns = [];
  dataObject = [];
  colMinWidth = 50;
  colHeaderTranslateKeyPrefix = 'userColumns';
  filteredRows: any[] = [];
  userId: number;
  geoPoleTableFilters: any = {};
  basicParams: BasicParams = {};
  tableRows: any[] = [];
  totalRows: number;
  pagingConfig: PagingConfig = {} as PagingConfig;

  breadcrumbs: TranslateText[] = [
    { key: 'nav.setting', defaultText: 'Setting' },
    { key: 'nav.Delayreportmgt', defaultText: 'Delay Report Management' },
  ];
  filterForm: FormGroup;


  constructor(
    private usersService: UsersService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
    private appref: ApplicationRef,
    private router: Router,
    private excelService: ExcelService,
    private route: ActivatedRoute
  ) {

    this.selection = SelectionType.single;

  }

  sourceLeft = true;
  format: any = DualListComponent.DEFAULT_FORMAT;
  pageSize = 10;


  async ngOnInit() {

    // this.filterForm = new FormGroup({
    //   country: new FormControl(''),
    //   brand: new FormControl(''),
    //   product: new FormControl(''),
    //   kpi: new FormControl('')
    // });

    this.tableColumns = [
      { name: 'Country', prop: 'country', sortable: false, filterable: true },
      { name: 'Brand', prop: 'brand', sortable: false, filterable: true },
      { name: 'Product', prop: 'product', sortable: false, filterable: true },
      { name: 'KPI', prop: 'kpi', sortable: false, filterable: true },
      { name: 'Is Delay Report', prop: 'isDelayReport', sortable: false, cellTemplate: this.chkboxColCellTmpl, filterable: false },
    ];


    this.tableColumns = [...this.tableColumns];
    this.getUsers();
  }



  downloadFile() {
    const fileName = TranscodingFileTypes.DelayReport;

    // const modalRef = this.modalsService.downloadConfirmation();

    // modalRef.componentInstance.headerTitle = {
    //   key: 'Info',
    //   defaultText: 'Info'
    // };

    // modalRef.componentInstance.confirmationTxt = {
    //   key: 'Export To Excel',
    //   defaultText: 'Export to Excel'
    // };

    // modalRef.componentInstance.confirmBtnTxt = { key: 'buttons.downloadXlsx', defaultText: 'Download XLSX' };
    // modalRef.componentInstance.confirmBtnIconUrl = 'assets/icons/download.svg';
    // modalRef.componentInstance.confirmBtnClass = 'btn-download';

    // modalRef.result.then(response => {
    //   // if modal closes with confirm message then start the download
    //   if (response === 'confirm') {
    debugger
    const headerRow = this.tableColumns.map(col => col.name);

    // Prepare the data rows (map data to match column names)
    // const dataToExport = this.tableRows.map(row => {
    //   return this.tableColumns.map(col => row[col.prop] || '');  // Use col.prop to get data for each column
    // });

    const dataToExport = this.filteredRows.map(row => {
      return this.tableColumns.map(col => {
        const cellValue = row[col.prop] || '';  // Get the cell value
        if (cellValue === '') {
          return 'false';  // If the value is empty, return false
        } else if (cellValue === true) {
          return 'true';  // If the value is true, return the string 'true'
        } else {
          return cellValue;  // Otherwise, return the original value
        }
      });
    });

    console.log("tablerow", this.tableRows);
    console.log("dataToExport", dataToExport);
    // Combine the header row with the data rows
    const dataWithHeader = [headerRow, ...dataToExport];  // Header as the first row, followed by the data

    // Pass the data (with header) to the export service
    this.excelService.exportAsExcelFile(dataWithHeader, fileName);
  }
  //   });
  // }

  getUsers(resetParams = false) {
    if (resetParams) {
      this.basicParams = {};
    }
    this.loaderService.addRequest(this.usersService.getDelayReport(1))
      .subscribe(
        (data: any) => {
          debugger
          this.tableRows = data;
          this.totalRows = data.length;
          this.filteredRows = [... this.tableRows]
          this.tableRows.filter(item => item.isDealer);
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
        }
      );

  }



  /*
    show the add/edit user modal
    if editRowIndex is defined that means it is edit else its add
   */
  showAddEditModal(editRow?: any) {

    const editMode = !_.isUndefined(editRow);
    const modalRef = this.modalsService.addEditEntity(ReportmodalComponent, { windowClass: 'save-user-modal' });

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
  deleteUser(editRow: any) {
    const headerTitle = { key: 'modals.user.deleteTitl', defaultText: 'Delete' };
    const entityName = { key: '', defaultText: '' };
    //  const {rowinfo}=
    let use = this.tableRows.filter(x => x.id == editRow.id);
    const entityValue = editRow.brand;

    const modalRef = this.modalsService.deleteConfirmation(headerTitle, entityName, entityValue);

    // listen to delete confirmation so that the delete service may be called
    modalRef.componentInstance.deleteConfirmed.subscribe(() => {
      const userId = use[0].id;

      this.loaderService.addRequest(this.usersService.deletedealyreportUser(userId))
        .subscribe(response => {
          console.log(response);
          this.getUsers();
          modalRef.close();
          // ()=> error => this.saveError = getErrorMessage(error)
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

  onTableDataChange(event: any) {
    debugger
    this.pagingConfig.currentPage = event;
  }
  swapDirection() {
    this.sourceLeft = !this.sourceLeft;
    this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
  }


}
