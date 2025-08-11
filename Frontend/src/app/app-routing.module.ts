import { Page404Component } from './shared/page404/page404.component';
import { SettingLayoutComponent } from './shared/setting-layout/setting-layout.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportGuard } from './shared/guards/report.guard';
import { InternalServerComponent } from './shared/error-pages/internal-server.component';
import { UsersComponent } from './Administration/users/users.component';

const routes: Routes = [
  
  // {
  //   path: 'configuration',
  //   canActivate: [ReportGuard],
  //   component: LayoutComponent,
  
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./Administration/configuration.module').then(m => m.ConfigurationModule)}
  //   ]
  // },
  {
    path: 'configuration',
    //canActivate: [ReportGuard],
    component: LayoutComponent,
  
    children: [
      {
        path: '',
        loadChildren: () => import('./Administration/configuration.module').then(m => m.ConfigurationModule)}
    ]
  },
  {
    path: 'setting',
    //canActivate: [ReportGuard],
    component: LayoutComponent,
  
    children: [
      {
        path: '',
        loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)}
    ]
  },
  {
    path:'',
    canActivate: [ReportGuard],
   // canActivateChild: [ReportGuard],
    component: LayoutComponent,
    children:[
      { path:'', loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule)}
    ]
  },
  

  { path: '500', component: InternalServerComponent },
 
   { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
