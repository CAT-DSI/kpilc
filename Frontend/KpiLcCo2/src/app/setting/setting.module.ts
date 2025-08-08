import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from '../shared/shared.module';
import { NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { GlobalSettingComponent } from './global-setting/global-setting.component';
import { CategoryConfigurationComponent } from './category-configuration/category-configuration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DelayReportMgtComponent } from './DelayReportMgt/DelayReportMgt.component';
import { ConfigurationRoutingModule } from '../Administration/configuration-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ProductReportMgtComponent } from './ProductReportMgt/ProductReportMgt.component';
import { DeliverySiteIdentificationComponent } from 'src/app/setting/DeliverySiteIdentification/DeliverySiteIdentification.component';
//import { WayBillReportComponent } from './WayBillReport/WayBillReport.component';
import { BrandShipmentsDealerManagementComponent } from 'src/app/setting/BrandShipmentsDealerManagement/BrandShipmentsDealerManagement.component';
import { FamiliesMgtComponent } from './FamiliesMgt/FamiliesMgt.component';
import { OpendaysMgtComponent } from './OpendaysMgt/OpendaysMgt.component';
import { AttributionDetailsComponent } from './AttributionDetails/AttributionDetails.component';
import { MajorCustomerAdministrationComponent } from './MajorCustomerAdministration/MajorCustomerAdministration.component';
import { WayBillReportComponent } from './WayBillReport/WayBillReport.component';
import { DeliverySiteIdentificationModalComponent } from './delivery-site-identification-modal/delivery-site-identification-modal.component';
import { ViaCustomersComponent } from './via-customers/via-customers.component';
import { CountriesMajorCustomerComponent } from './countries-major-customer/countries-major-customer.component';
import { OpendaysMgtModalComponent } from './opendays-mgt-modal/opendays-mgt-modal.component';
import { AttributionDetailsModalComponent } from './attribution-details-modal/attribution-details-modal.component';
import { OpendaysmodalComponent } from './opendaysmodal/opendaysmodal.component';
import { OpendaysComponent } from './opendays/opendays.component';
import { EmailAdministrationComponent } from './email-administration/email-administration.component';
import { AddEditEmailadministrationComponent } from './add-edit-emailadministration/add-edit-emailadministration.component';
import { MatTableModule } from '@angular/material/table';

const entryComponents = [
  DelayReportMgtComponent,
  ProductReportMgtComponent,
  BrandShipmentsDealerManagementComponent,
  DeliverySiteIdentificationComponent,
  WayBillReportComponent,
  BrandShipmentsDealerManagementComponent,
  FamiliesMgtComponent,
  OpendaysMgtComponent,
  AttributionDetailsComponent,
  MajorCustomerAdministrationComponent,
  DeliverySiteIdentificationModalComponent,
  ViaCustomersComponent,
  FamiliesMgtComponent,
  CountriesMajorCustomerComponent,
  OpendaysComponent  ,
  EmailAdministrationComponent,
  AddEditEmailadministrationComponent
  
];
@NgModule({
  declarations: [ ...entryComponents, GlobalSettingComponent, CategoryConfigurationComponent,OpendaysMgtModalComponent, AttributionDetailsModalComponent,OpendaysmodalComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    CommonModule,
    MatTableModule,
    SettingRoutingModule,
    MatCardModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    SharedModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    ConfigurationRoutingModule,
    MatTabsModule,
    MatPaginatorModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({  preventDuplicates: true}),
    NgbModule,
    NgSelectModule,
    NgxDatatableModule,
    NgxPaginationModule
  ],
  entryComponents: [
    ...entryComponents
 ]
})
export class SettingModule { }
