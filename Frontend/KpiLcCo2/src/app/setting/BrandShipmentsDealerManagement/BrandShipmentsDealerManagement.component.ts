import { ApplicationRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TranslateText } from 'src/app/shared/models/i18n';
import { DualListComponent } from 'src/app/Administration/users/Dual-List/dual-list.component';
import { BasicParams, PagingConfig } from 'src/app/shared/models/app';
import { SelectionType } from '@swimlane/ngx-datatable';
import { User } from 'src/app/shared/models/auth.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { ModalsService } from 'src/app/shared/Services/modals.service';
import * as _ from 'lodash';
import { TranscodingFileTypes } from 'src/app/shared/models/transcoding';
import { MainHeaderComponent } from 'src/app/shared/main-header/main-header.component';
import { BrandShipmentsDealerManagementModalComponent } from '../brand-shipments-dealer-management-modal/brand-shipments-dealer-management-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './BrandShipmentsDealerManagement.component.html',
  styleUrls: ['./BrandShipmentsDealerManagement.component.scss'],  
})
export class BrandShipmentsDealerManagementComponent implements OnInit {

  @Input() hasActionColedit = true;
  @Input() updateinfo="12";
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
  //tableRows: User[];
  selectedSession: User[] = [];
  selectedSessionId: number;  
  tableColumns = [];
  dataObject = [];
  colMinWidth = 120;
  colHeaderTranslateKeyPrefix = 'userColumns';
  userId: number;
  geoPoleTableFilters: any = {};
  basicParams: BasicParams = {};
  // new changes for pagination
  tableRows: any[] = []; 
  totalRows: number;
  pagingConfig: PagingConfig = {} as PagingConfig;
  breadcrumbs: TranslateText[] = [
    { key: 'nav.setting', defaultText: 'Setting' },
    { key: 'nav.BrandShipmentsDealerManagement', defaultText: 'Brand shipments-dealer management' },
  ];


  constructor(
    private usersService: UsersService,
    private loaderService: LoaderService,
    private modalsService: ModalsService,
    private appref: ApplicationRef,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.selection = SelectionType.single;   
  }


  sourceLeft = true;
  format: any = DualListComponent.DEFAULT_FORMAT;

 
  pageSize = 10;
  ngOnInit() {
    this.tableColumns = [
      { name: 'Country', prop: 'country', sortable: false,filterable: true },
      { name: 'Brand', prop: 'brand', sortable: false,filterable: true },      
      { name: 'Code', prop: 'code', sortable: false,filterable: true },
      { name: 'Is Dealer', prop: 'isDealer', sortable: false ,cellTemplate: this.chkboxColCellTmpl},
    ];

    this.tableColumns = [...this.tableColumns];
    this.getUsers();
   
  }

  downloadFile() {
    const fileType = TranscodingFileTypes.DelayReport;

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
          .subscribe(response => {console.log(response);           
          });
       
      }
    });
  }

  getUsers(resetParams = false) {
    if (resetParams) {
      this.basicParams = {};
    }

    this.loaderService.addRequest(this.usersService.getAllDealerShipmentCodes())
      .subscribe(
        (data: any) => {
          debugger
          this.tableRows = data;
          this.totalRows = data.length;  
          this.tableRows.filter(item => item.isDealer);        
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
  }

  onSearchTable(searchText: string) {
    this.otherFilters = { ...this.otherFilters, name: searchText };
  }
  
  /*
    show the add/edit user modal
    if editRowIndex is defined that means it is edit else its add
   */
  showAddEditModal(editRow?: any) {

    const editMode = !_.isUndefined(editRow);
    const modalRef = this.modalsService.addEditEntity(BrandShipmentsDealerManagementModalComponent, { windowClass: 'save-user-modal' });

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
          location.reload();
          this.getUsers();          
        } else {         
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
    let use = this.tableRows.filter(x => x.id == editRow.id);
    const entityValue = 'Brand' + ' ' + editRow.brand;

    const modalRef = this.modalsService.deleteConfirmation(headerTitle, entityName, entityValue);

    // listen to delete confirmation so that the delete service may be called
    modalRef.componentInstance.deleteConfirmed.subscribe(() => {
      const userId = use[0].id;

      this.loaderService.addRequest(this.usersService.deleteDealerShipmentParam(userId))
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
