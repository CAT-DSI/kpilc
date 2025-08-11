import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, TemplateRef } from '@angular/core';
import * as _ from 'lodash';

import { getErrorMessage, updateArrAtIndex } from 'src/app/utils/utility';
import { User,UserRoles } from 'src/app/shared/models/auth.model';
import { BasicParams , GenericApiResponse, PagingConfig } from 'src/app/shared/models/app';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { SaveUserModalComponent } from '../save-user-modal/save-user-modal.component';
import { ActivatedRoute } from '@angular/router';
import {SelectionType, SortPropDir, id } from '@swimlane/ngx-datatable';
import { CellTemplates } from 'src/app/shared/ngx-table-wrapper/ngx-table-wrapper.component';




/*
  renders the user table on configuration pages
 */
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, OnChanges {

 
  @Input() hasActionCol = true;
  @Input() otherFilters: any;
  @ViewChild('chkboxColHeaderTmpl') chkboxColHeaderTmpl: TemplateRef<any>;
  @ViewChild('chkboxColCellTmpl') chkboxColCellTmpl: TemplateRef<any>;
  
  @ViewChild('roleColCellTmpl') role: TemplateRef<any>;
  
  selection:SelectionType;

  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  userRoles=UserRoles

  tableRows: User[];
  selectedSession: User[];
 
  selectedSessionId: number;
  totalRows: number=9;
  
  colMinWidth = 120;
  colHeaderTranslateKeyPrefix = 'userColumns';
  basicParams: BasicParams = {};
  sorts: SortPropDir[];
  tableColumns = [];

  
  userTableFilters: any = {};

  constructor(
    private usersService: UsersService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
    private route: ActivatedRoute
  ) { 
   this.selection=SelectionType.single;
    
  }

  ngOnInit() {

    {
    const checkboxColConfig = {
      name: '', prop: 'isAssociated', minWidth: 40, width: 40, canAutoResize: false,
      headerTemplate: this.chkboxColHeaderTmpl, cellTemplate: this.chkboxColCellTmpl
    };
    this.tableColumns = [
      { name: 'First Name', prop: 'firstName' },
      { name: 'Last Name', prop: 'lastName'  },
      { name: 'Access Key', prop: 'accessKey'},
      { name: 'Email', prop: 'email' },
      { name: 'Role', prop: 'role', flexGrow: 0.7, cellTemplate: this.role},
    ];

    this.tableColumns = [ ...this.tableColumns ];
  }
    // load data
     this.getUsers();

     
  }

  /*
    emit a page/sort event to the parent component on changing page
    sort params don't change in this event
   */
    

    onSelectSession(selectedSession: User[]) {
      this.selectedSession = [ ...selectedSession];
      if (this.selectedSession.length > 0) {
        const { id } = this.selectedSession[0];
        this.userTableFilters = { ...this.userTableFilters, id };
      }
    
    //  this.selectedSessionId = this.selectedSession.length > 0 ? this.selectedSession[0].id : undefined;
    }
   
  
  // mainly to handle for other filters changing
  ngOnChanges(changes: SimpleChanges) {
    if (changes.otherFilters) {

      const oldFilters = changes.otherFilters.previousValue;
      const newFilters = changes.otherFilters.currentValue;

      //if this is not he first time filters have changed and pgeo is different then reset basic params
      if (!oldFilters || oldFilters.pgeo !== newFilters.pgeo) {
        this.getUsers(true);
      } else {
        // if only search text has changed then just reset pageIndex
        this.basicParams = { ...this.basicParams, pageIndex: 1 };
        this.getUsers();
      }
    }
  }


  /*
    get all users
   */
  // getUsers(resetParams = false) {
  //   if (resetParams) {
  //     this.basicParams = {};
  //   }

  //         this.loaderService.addRequest(this.usersService.getUsers( "6BF01FAD-B9DA-4F6D-8B23-8ABD22C4D9D3","Desc", this.pagination))
  //     .subscribe(
  //       (data: any) => {
  //         this.tableRows = data;
  //         //this.pagingConfig.totalItems = data.length;
  //         this.totalRows = data.length;
  //       },
  //       err => {
  //         return console.error(err);
  //       }
  //     );
  // }

  onTableDataChange(event: any) {
    this.page = event.first/event.rows +1;
    this.getUsers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }
   
  getUsers(resetParams = false) {
    if (resetParams) {
      this.basicParams = {};
    }

  //   this.loaderService.addRequest(this.usersService.getUsers(this.p, this.otherFilters))
  //     .subscribe(
  //       (data:any) => {
        
  //         this.tableRows = data;
  //         this.totalRows = data.length;
  //         //this.onSelectSession(this.tableRows.length > 0 ? [this.tableRows[0]] : []);
  //       }
      
  //     );
  // }

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
  showAddEditModal(editRowIndex?: number) {

    const editMode = !_.isUndefined(editRowIndex);

    const modalRef = this.modalsService.addEditEntity(SaveUserModalComponent, { windowClass: 'save-user-modal' });

    modalRef.componentInstance.headerTitle = {
      key: `modals.user.${editMode ? 'edit' : 'add'}Title`,
      defaultText: `${editMode ? 'Edit' : 'Add'} User`
    };

    modalRef.componentInstance.formData = editMode ? this.tableRows[editRowIndex] : {};
    modalRef.componentInstance.inEditMode = editMode;

    // if the modal is closed with response as a non-string means it was a success
    // and the new object is passed as response,
    // if we are in edit mode we just update the table else we reload the page
    modalRef.result.then(response => {
      if (typeof response !== 'string') {
        if (editMode) {
          const newRowObj = { ...this.tableRows[editRowIndex], ...response };
          this.tableRows = updateArrAtIndex(this.tableRows, editRowIndex, newRowObj);
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
  

  /*
    edit a user, this just opens the modal with the user's data,
    rowIndex is the index in tableRows which is being edited
   */
  editUser(rowIndex: number) {
    this.showAddEditModal(rowIndex);
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

}
