import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { AuthService } from '../shared/Services/auth.service';
import { AdminComponent } from './users/admin/admin.component';
import { RestrictedUserComponent } from './users/restricted-user/restricted-user.component';
 import { ProfileListComponent } from './users/Profile/profile-list.component';
import { CreateprofileComponent } from './users/createprofile/createprofile.component';
//import { DelayReportMgtComponent } from './users/DelayReportMgt/DelayReportMgt.component';
import { ReportGuard } from '../shared/guards/report.guard';
import { FamiliesMgtComponent } from '../setting/FamiliesMgt/FamiliesMgt.component';
//import { ProfileListComponent } from './users/profile-list.component';



const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
   
   
  },
  {
    path: 'profile',
    component: ProfileListComponent
   
  },
  {
    path: 'createprofile',
    component: CreateprofileComponent
   
  },
  {
    path: 'restrictuser',
    component: RestrictedUserComponent
   
  },
  {
    path:'familiesmgt',
    component:FamiliesMgtComponent

  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule {
  constructor(
    private route: ActivatedRoute, private authservice:AuthService,private router: Router)
    {
      
    }

 }
