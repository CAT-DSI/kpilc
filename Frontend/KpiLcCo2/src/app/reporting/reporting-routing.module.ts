import { AddEditEmailadministrationComponent } from '../setting/add-edit-emailadministration/add-edit-emailadministration.component';
import { AuthService } from '../shared/Services/auth.service';
import { ReportGuard } from './../shared/guards/report.guard';
import { UserReportComponent } from './UserReport/UserReport.component';

import { ReportComponent } from './report/report.component';
import { ReportsComponent } from './reports/reports.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

const routes: Routes = [
  { path: 'reports/:category', component: ReportsComponent,canActivate: [ReportGuard] },
  { path: 'report/:id',  component: ReportComponent, canActivate: [ReportGuard] },
  { path: 'UserReports/:id', component: UserReportComponent,canActivate: [ReportGuard] },
   { path: 'reports/ALL', component:ReportComponent, canActivate: [ReportGuard], pathMatch:'prefix'},
   { path: '', redirectTo:'reports/ALL' , pathMatch:'prefix'},
   { path: "**",redirectTo:"reports/ALL",},
   
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { 
  reporturl:string;
  constructor(
    private route: ActivatedRoute, private authservice:AuthService,private router: Router) {
} 

} 
 
