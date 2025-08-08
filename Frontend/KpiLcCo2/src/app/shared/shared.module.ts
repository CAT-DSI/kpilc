import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Page404Component } from './page404/page404.component';
import { LayoutComponent } from './layout/layout.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { SettingLayoutComponent } from './setting-layout/setting-layout.component';
import { CriteriaConfigComponent } from './criteria-config/criteria-config.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentPipe } from './Pipes/moment.pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReportViewerComponent } from './report-viewer/report-viewer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReportStatusPipe } from './Pipes/report-status.pipe';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatSelectInfiniteScrollModule} from 'ng-mat-select-infinite-scroll';
import {MatDialogModule} from '@angular/material/dialog';
import { ExitDirtyComponent } from './modals/exit-dirty/exit-dirty.component';
import { WeekPipe } from './Pipes/week.pipe';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { CustomMissingTranslationHandler } from 'src/app/shared/Services/i18n.service';
import { CustomDatePipe } from 'src/app/shared/Pipes/custom-date.pipe';
import { MainHeaderComponent } from 'src/app/shared/main-header/main-header.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { NgxTableWrapperComponent } from './ngx-table-wrapper/ngx-table-wrapper.component';
import { CorporateCodesDirective } from './directives/corporate-codes.directive';
import { WindowAuthenticationInterceptor } from './WindowAuthenticationInterceptor';
import { LoaderComponent } from './loader/loader.component';
import { InternalServerComponent } from './error-pages/internal-server.component';
import { ReportViewerKpilcComponent } from './report-viewer-KPILC/report-viewer-kpilc.component';
 import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DualListComponent } from '../Administration/users/Dual-List/dual-list.component';
import { ReportmodalComponent } from '../Administration/users/reportmodal/reportmodal.component';
import { CreateprofileComponent } from '../Administration/users/createprofile/createprofile.component';
import { DeleteConfirmModalComponent } from './delete-confirm-modal/delete-confirm-modal.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FilterPipe } from './Pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DownloadConfirmModalComponent } from './download-confirm-modal/download-confirm-modal.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { Globals } from './models/Global';
import { ProductReportModalHome } from '../setting/ProductReportModalHome/ProductReportModalHome.component';
import { ProductReportModalParametrage } from '../setting/ProductReportModalParametrage/ProductReportModalParametrage.component';
import { ProductReportModalParametragesecond } from '../setting/ProductReportModalParametragesecond/ProductReportModalParametragesecond.component';
import { WayBillModalComponent } from '../setting/way-bill-modal/way-bill-modal.component';
import { BrandShipmentsDealerManagementModalComponent } from '../setting/brand-shipments-dealer-management-modal/brand-shipments-dealer-management-modal.component';
import { FooterBoxComponent } from './Footer/Footer.component';
import { FamiliesMgtModalComponent } from '../setting/families-mgt-modal/families-mgt-modal.component';
import { CountriesMajorCustomerModalComponent } from '../setting/countries-major-customer-modal/countries-major-customer-modal.component';
import { GoalbypfmodalComponent } from '../setting/goalbypfmodal/goalbypfmodal.component';
import { MajorCustomerModalComponent } from '../setting/major-customer-modal/major-customer-modal.component';




@NgModule({
  declarations: [
    InternalServerComponent,
    LoaderComponent,
    CriteriaComponent,
    LayoutComponent,
    Page404Component,
    SettingLayoutComponent,
    CriteriaConfigComponent,
    SubHeaderComponent,
    MomentPipe,
    
    
   /* BooleanPipe,*/
    ReportViewerComponent,
    ReportViewerKpilcComponent,
    ReportStatusPipe,
    ExitDirtyComponent,
    WeekPipe,
    CustomDatePipe,
    MainHeaderComponent,
    SelectDropdownComponent,
    SearchBoxComponent,
    FooterBoxComponent,
    NgxTableWrapperComponent,
    DeleteConfirmModalComponent,
    DownloadConfirmModalComponent,
    CorporateCodesDirective,
    DualListComponent,
    //ProfileListComponent,
    ReportmodalComponent,
    ProductReportModalHome,
    BrandShipmentsDealerManagementModalComponent,
    WayBillModalComponent,
    ProductReportModalParametrage,
    ProductReportModalParametragesecond,
   // ProductmodalComponent,
    CreateprofileComponent,
    CheckboxComponent,
    FamiliesMgtModalComponent,
    GoalbypfmodalComponent,
    CountriesMajorCustomerModalComponent,
    MajorCustomerModalComponent
    
  ],
  exports: [
    InternalServerComponent,
    LoaderComponent,
    HttpClientModule,
    NgxTableWrapperComponent,
    DeleteConfirmModalComponent,
    DownloadConfirmModalComponent,
    CriteriaComponent,
    LayoutComponent,
    CriteriaConfigComponent,
    Page404Component,
    MatFormFieldModule,
    MatInputModule,
    MomentPipe,
    Ng2SearchPipeModule,
   /* BooleanPipe,*/
    ReportStatusPipe,
    WeekPipe,
    ReportViewerComponent,
    ReportViewerKpilcComponent,
    MatSnackBarModule,
    NgxMatSelectSearchModule,
    MatCardModule,
    MatDialogModule,
    ExitDirtyComponent,
    CustomDatePipe,
    MainHeaderComponent,
    InlineSVGModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDropdownComponent,
    SubHeaderComponent,
    SearchBoxComponent,
    FooterBoxComponent,
    CorporateCodesDirective,
    TranslateModule,
    DualListComponent,
    AutocompleteLibModule,    
    ReportmodalComponent,
    ProductReportModalHome,
    BrandShipmentsDealerManagementModalComponent,
    WayBillModalComponent,
    ProductReportModalParametrage,
    FamiliesMgtModalComponent,
    ProductReportModalParametragesecond,    
    CheckboxComponent,
    NgSelectModule,
    GoalbypfmodalComponent,
    CountriesMajorCustomerModalComponent
    
  ],
  imports: [
    RouterModule,
    MatTableModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    NgMatSearchBarModule,
    MatButtonModule,
    MatDividerModule,
    AutocompleteLibModule,
    NgbModule,
    NgbDropdownModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSidenavModule,
    NgxMatSelectSearchModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    NgxDatatableModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectInfiniteScrollModule,
    NgxPaginationModule,
    NgSelectModule,
    MatDialogModule,
    ToastrModule.forRoot({  preventDuplicates: true}),
   
    InlineSVGModule.forRoot(),
     TranslateModule.forChild({
       missingTranslationHandler: {
         provide: MissingTranslationHandler,
         useClass: CustomMissingTranslationHandler
       }
     }),
    FormsModule

  ],
  providers: [CustomDatePipe,WindowAuthenticationInterceptor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class SharedModule { }
