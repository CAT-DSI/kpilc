import { Component, Input, Output, ViewChild, TemplateRef, OnChanges, SimpleChanges, EventEmitter, OnInit } from '@angular/core';
import { TableColumn, SortPropDir, SelectionType } from '@swimlane/ngx-datatable';
import * as _ from 'lodash';

import {
  DEFAULT_PAGE_SIZE, COL_MIN_WIDTH, RECORD_STATUS_COLORS,
  VALIDAITON_STATUS_COLORS, PAGE_SIZE_OPTIONS
} from 'src/config';
import { BasicParams, SortTypes } from 'src/app/shared/models/app';
import { CCCategory } from 'src/app/shared/models/i18n';
import { User } from '../models/auth.model';
import { FormControl, FormGroup } from '@angular/forms';

export enum CellTemplates {
  NUMBER_CELL = 'numberCellTmpl',
  STATUS = 'statusColCellTmpl',
  ROLE = 'roleColCellTmpl',
  CENTER_TYPE = 'centerTypeColCellTmpl',
  SESSION_STATUS = 'sessionStatusColCellTmpl',
  PHYSICAL_STATUS = 'physicalStatusColCellTmpl',
  LOCAL_STATUS = 'localStatusColCellTmpl',
  CENTRAL_STATUS = 'centralStatusColCellTmpl'
}


/*
  a wrapper component for all tables which use ngx-datatable
  it helps in extracting common/default table settings, features and also supports overriding the default settings
  it also supports the corporate code pipe when passed `applyCC: ${CCCategory}` in the column config
  and we have templates for some specific corporate code columns like status, etc
  this table also supports row selection
 */
@Component({
  selector: 'app-ngx-table-wrapper',
  templateUrl: './ngx-table-wrapper.component.html',
  styleUrls: ['./ngx-table-wrapper.component.scss']
})
export class NgxTableWrapperComponent implements OnInit, OnChanges {

  sortTypes = SortTypes;
  // common col names so that they don't have to be included in every table translate property in lang.json files
  commonColNames = ['status', 'action'];

  @ViewChild('headerCellTmpl') headerCellTmpl: TemplateRef<any>;
  @ViewChild('numberCellTmpl') numberCellTmpl: TemplateRef<any>;
  @ViewChild('actionColCellTmpl') actionColCellTmpl: TemplateRef<any>;
  @ViewChild('actionColCellTmpldelete') actionColCellTmpldelete: TemplateRef<any>;
  @ViewChild('actionColCellTmpledit') actionColCellTmpledit: TemplateRef<any>;
  @ViewChild('statusColCellTmpl') statusColCellTmpl: TemplateRef<any>;
  @ViewChild('roleColCellTmpl') roleColCellTmpl: TemplateRef<any>;
  @ViewChild('centerTypeColCellTmpl') centerTypeColCellTmpl: TemplateRef<any>;
  @ViewChild('sessionStatusColCellTmpl') sessionStatusColCellTmpl: TemplateRef<any>;
  @ViewChild('physicalStatusColCellTmpl') physicalStatusColCellTmpl: TemplateRef<any>;
  @ViewChild('localStatusColCellTmpl') localStatusColCellTmpl: TemplateRef<any>;
  @ViewChild('centralStatusColCellTmpl') centralStatusColCellTmpl: TemplateRef<any>;

  //@Input() rows: any[];
  @Input() columnsConfig: TableColumn[];
  @Input() colHeaderTranslateKeyPrefix: string;

  // default table settings
  @Input() colMinWidth = COL_MIN_WIDTH;
  //@Input() columnMode = 'flex';
  @Input() scrollbarH = true;
  @Input() scrollbarV = false;
  @Input() rowHeight = 60;
  @Input() headerHeight = 60;

  // if it has the action column with edit and delete buttons and if its frozen, default for both being false
  @Input() hasActionCol = false;
  @Input() hasActionColdelete = false;
  @Input() hasActionColedit = false;
  @Input() actionColFrozen = false;

  // paging
  @Input() externalPaging = true;
    
  // sorting
  @Input() externalSorting = true;
  @Input() sorts: SortPropDir[]; /// why you want this

  // row selection
  @Input() selectionType: SelectionType;
  @Input() selectedRow = [];
  @Input() filters: any = {};
  @Input() rows: any[] = [];
  @Input() columns: any[] = [];
  @Input() totalRecord: any[] = [];
  row: any;
  
  filterForm: FormGroup;
  tableColumns: any[] = [];
  // output event emitters
  @Output() pageSortEvent = new EventEmitter<BasicParams>();
  @Output() editRow = new EventEmitter<number>();
  @Output() deleteRow = new EventEmitter<number>();
  @Output() selectRow = new EventEmitter<[any]>();

  defaultColConfig = {
    draggable: false,
    flexGrow: 1,
    resizeable: false
  };  
  selected: any[];

  //for pagination
  needsPagination = true;
  @Input() totalRows: number;
  @Input() pageSize = DEFAULT_PAGE_SIZE;
  defaultPageSize = DEFAULT_PAGE_SIZE;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  @Input() hasPageSizeOptions = true;
  @Input() footerHeight: number = 40;  
  totalPages: number = 0;
  currentPageRows: any[] = [];
  @Output() pageChange = new EventEmitter<{ page: number, pageSize: number }>();
  filteredRows: any[] = [];
  @Input() showPagination: boolean = true;

  page: number = 1;
  count: number = 0;
  tableSize: number = 7; 
  pageIndex= 1;

  // coporate code categories
  CCCategories = CCCategory;
  // color configs
  recordStatusColors = RECORD_STATUS_COLORS;
  validationStatusColors = VALIDAITON_STATUS_COLORS;
  allRows: any[] = [];
    
  constructor() { }

  ngOnInit(): void {
    // Initialize the filter form based on columns
    this.filterForm = new FormGroup({});   
    this.columns.forEach(column => {
      if (column.filterable) {
        this.filterForm.addControl(column.prop, new FormControl(''));
      }
    });
    this.applyPagination();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.generateNgxColumns();

    if (changes.selectedRow) {
      this.selected = this.selectedRow ? [...this.selectedRow] : [];
    }
    
    // whether the table needs the footer which has pagination
    this.needsPagination = this.totalRows > (this.pageSize ? this.pageSize : DEFAULT_PAGE_SIZE);
    // if (changes.rows || changes.pageSize) {
    //   this.applyPagination();
    // }
    if (changes.rows || changes.pageSize || changes.filters) {
      this.applyFilters();  // Apply filters whenever rows or filters change
      this.applyPagination(); // Reapply pagination
    }
  }

  // This method applies the filter to the rows based on filter form values
  applyFilters(): void {   
           
    const safeRows = this.rows ?? [];
    this.filteredRows = safeRows.filter(row => {
      return this.columns.every(column => {
        if (!column.filterable) {
          return true; // No filtering for non-filterable columns
        }
        const filterValue = this.filters[column.prop]?.toLowerCase() ?? '';
        const rowValue = row[column.prop]?.toString().toLowerCase() ?? '';
        return !filterValue || rowValue.includes(filterValue);  // Apply filtering
      });
    });
    this.totalRows = this.filteredRows.length;
    this.applyPagination();
  }
  

  // Handle filter changes by triggering filter application
  onFilterChange(): void {        
    this.filters = this.filterForm.value;
    this.applyFilters(); // Reapply the filter
  }

  /*
    generate columns for ngx table to consume with some default column configuration
   */
  generateNgxColumns() {
    // generate table columns
    this.columns = _.map(this.columnsConfig, config => ({
      ...this.defaultColConfig,
      headerTemplate: this.headerCellTmpl,
      minWidth: this.colMinWidth,      
      cellTemplate: config.cellTmpl ? this[config.cellTmpl] : undefined,
      ..._.omit(config, 'cellTmpl')
    }));

    // add action column if hasActionCol input is true
    if (this.hasActionCol) {
      this.columns.push({
        ...this.defaultColConfig,
        name: 'Action',
        prop: 'action',
        headerTemplate: this.headerCellTmpl,
        cellTemplate: this.actionColCellTmpl,
        frozenRight: this.actionColFrozen,
        width: 234,
        canAutoResize: false,
        cellClass: 'action-col',
        sortable: false
      });
    }
    if (this.hasActionColdelete) {
      this.columns.push({
        ...this.defaultColConfig,
        name: 'Action',
        prop: 'action',
        headerTemplate: this.headerCellTmpl,
        cellTemplate: this.actionColCellTmpldelete,
        frozenRight: this.actionColFrozen,
        width: 234,
        canAutoResize: false,
        cellClass: 'action-col',
        sortable: false
      });
    }
    if (this.hasActionColedit) {
      this.columns.push({
        ...this.defaultColConfig,
        name: 'Action',
        prop: 'action',
        headerTemplate: this.headerCellTmpl,
        cellTemplate: this.actionColCellTmpledit,
        frozenRight: this.actionColFrozen,
        width: 234,
        canAutoResize: false,
        cellClass: 'action-col',
        sortable: false
      });
    }
  }
 

  /*
    emit a page/sort even to the parent component when user sorts the table
    on a sort event set pageIndex to the first page
   */
  onSort(sortEvent: any) {
    const { column: { prop }, newValue } = sortEvent;
    this.pageSortEvent.emit({
      pageIndex: 1,
      sortBy: prop,
      sortType: newValue
    });
  }

  applyPagination(): void {       
    if (this.filteredRows.length === 0) {
      this.currentPageRows = []; // Empty if no filtered rows
      return;
    }
   
    this.pageSize = this.pageSize ? this.pageSize : DEFAULT_PAGE_SIZE;
    // Calculate total pages based on filtered data
    const totalPages = Math.ceil(this.filteredRows.length / this.pageSize);
    // Ensure pageIndex is within the valid range after filtering
    this.pageIndex = Math.min(this.pageIndex, totalPages);
    // Calculate the start and end indices for the current page
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    // Set the rows for the current page based on the filtered data
    this.currentPageRows = this.filteredRows.slice(startIndex, endIndex);
   
    //this.filteredRows = this.rows; // Assuming you may have applied filtering already
    // this.pageSize = this.pageSize ? this.pageSize : DEFAULT_PAGE_SIZE;
    // const totalPages = Math.ceil(this.filteredRows.length / this.pageSize);
    // this.pageIndex = Math.min(this.pageIndex, totalPages); // Ensure the page index is valid
    
    // const startIndex = (this.pageIndex - 1) * this.pageSize;
    // const endIndex = startIndex + this.pageSize;

    // this.currentPageRows = this.filteredRows.slice(startIndex, endIndex);
  }

  /*
    emit a select row event to the parent component with the selected row
   */
  onSelectRow({ selected }) {
    if (selected[0] !== this.selectedRow[0]) {
      this.selectRow.emit(selected);
    }
    selected = null;
  }
  

// Change page function
setPage(newPageIndex: number): void {  
  this.pageIndex = newPageIndex;
  this.applyPagination();
  this.pageChange.emit({ page: this.pageIndex, pageSize: this.pageSize });
}

// Change page size function
pageSizeChange(pageSize: number): void {  
  this.pageSize = pageSize;
  this.pageIndex = 1; // Reset to page 1 when page size changes
  this.applyPagination();
  this.pageChange.emit({ page: this.pageIndex, pageSize: this.pageSize });
}


  /*
    edit row, if the table has action col
   */
  onEditRow(rowIndex: number) {
    this.editRow.emit(this.rows[rowIndex]);
    //this.onSelectRow(this.selected);
  }

  /*
    delete row, if the table has action col
   */
  onDeleteRow(rowIndex: number) {
    this.deleteRow.emit(this.rows[rowIndex]);
  }

}
