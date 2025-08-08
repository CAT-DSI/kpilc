import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './../shared/shared.module';
import { ReportsComponent } from './reports/reports.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingRoutingModule } from './reporting-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WeekPipe } from '../shared/Pipes/week.pipe';
import { DatePipe } from '@angular/common';
import { UserReportComponent } from './UserReport/UserReport.component';
import { NgxPaginationModule } from 'ngx-pagination';

const entryComponents = [
  ReportComponent,
  ReportsComponent,
  UserReportComponent

  // SaveSessionModalComponent,
  // SaveGeoPoleModalComponent,
  // SaveCenterModalComponent,
  // SaveCountryModalComponent
];
@NgModule({
  declarations: [
    ...entryComponents,

  ],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    NgMatSearchBarModule,
    MatDividerModule,
    MatTabsModule,
    ReportingRoutingModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReportingRoutingModule,
    NgxPaginationModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    WeekPipe,
    DatePipe
  ],
  entryComponents: [
    ...entryComponents
 ]
})
export class ReportingModule { }
