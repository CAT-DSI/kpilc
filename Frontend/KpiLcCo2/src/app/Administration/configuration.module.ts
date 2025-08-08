import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

// other modules
import { SharedModule } from '../shared/shared.module';

// routing module
import { ConfigurationRoutingModule } from './configuration-routing.module';

// components
import { UsersComponent } from './users/users.component';
import { UserTableComponent } from './users/user-table/user-table.component';
// import { SessionsComponent } from './sessions/sessions.component';
// import { CentersComponent } from './centers/centers.component';
// import { CountryComponent } from './country/country.component';
// import { GeoPoleComponent } from './geo-pole/geo-pole.component';
// import { WMIBrandComponent } from './wmi-brand/wmi-brand.component';
// import { ExtReferenceComponent } from './ext-reference/ext-reference.component';
// import { UserTableComponent } from './users/user-table/user-table.component';
// import { CountryTableComponent } from './country/country-table/country-table.component';
// import { AssociatedCenterTableComponent } from './sessions/associated-center-table/associated-center-table.component';

// // modals
 import { SaveUserModalComponent } from './users/save-user-modal/save-user-modal.component';
// import { SaveSessionModalComponent } from './sessions/save-session-modal/save-session-modal.component';
// import { SaveGeoPoleModalComponent } from './geo-pole/save-geo-pole-modal/save-geo-pole-modal.component';
// import { SaveCenterModalComponent } from './centers/save-center-modal/save-center-modal.component';
// import { SaveCountryModalComponent } from './country/save-country-modal/save-country-modal.component';

// services
 import { ModalsService } from 'src/app/shared/Services/modals.service';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminComponent } from './users/admin/admin.component';
import { RestrictedUserComponent } from './users/restricted-user/restricted-user.component';
import { ReportmodalComponent } from './users/reportmodal/reportmodal.component';
import { MatIconModule } from '@angular/material/icon';
import { CreateprofileComponent } from './users/createprofile/createprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from '../shared/checkbox/checkbox.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipe } from '../shared/Pipes/filter.pipe';
import { SubHeaderComponent } from '../shared/sub-header/sub-header.component';
import { ProfileListComponent } from './users/Profile/profile-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { UserProfileModalcomponent } from './users/User-Profile-Modal/User-Profile-Modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
//import { DelayReportMgtComponent } from './users/DelayReportMgt/DelayReportMgt.component';
//import { ProfileListComponent } from './users/profile-list.component';


  





const entryComponents = [
  SaveUserModalComponent,
  //UserProfileModalcomponent

  // SaveSessionModalComponent,
  // SaveGeoPoleModalComponent,
  // SaveCenterModalComponent,
  // SaveCountryModalComponent
];

@NgModule({
  declarations: [
    UsersComponent,
    ProfileListComponent,
    UserTableComponent,
    ...entryComponents,
    AdminComponent,
    RestrictedUserComponent,
    UserProfileModalcomponent
    
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AutocompleteLibModule,
    ConfigurationRoutingModule,
    MatTabsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({  preventDuplicates: true}),
    NgbModule,
    NgSelectModule,
    NgxDatatableModule,
    NgxPaginationModule
    
  ],
  providers: [
     ModalsService
  ],
  entryComponents: [
     ...entryComponents
  ]
})
export class ConfigurationModule { }
