import { AttributionDetailsComponent } from './AttributionDetails/AttributionDetails.component';
import { BrandShipmentsDealerManagementComponent } from './BrandShipmentsDealerManagement/BrandShipmentsDealerManagement.component';
import { DelayReportMgtComponent } from './DelayReportMgt/DelayReportMgt.component';
import { DeliverySiteIdentificationComponent } from './DeliverySiteIdentification/DeliverySiteIdentification.component';
import { FamiliesMgtComponent } from './FamiliesMgt/FamiliesMgt.component';
import { MajorCustomerAdministrationComponent } from './MajorCustomerAdministration/MajorCustomerAdministration.component';
import { OpendaysMgtComponent } from './OpendaysMgt/OpendaysMgt.component';
import { ProductReportMgtComponent } from './ProductReportMgt/ProductReportMgt.component';
import { WayBillReportComponent } from './WayBillReport/WayBillReport.component';
//import { WayBillReportComponent } from './WayBillReport/WayBillReport.component';
import { CategoryConfigurationComponent } from './category-configuration/category-configuration.component';
import { GlobalSettingComponent } from './global-setting/global-setting.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViaCustomersComponent } from './via-customers/via-customers.component';
import { CountriesMajorCustomerComponent } from './countries-major-customer/countries-major-customer.component';
import { OpendaysComponent } from './opendays/opendays.component';
import { EmailAdministrationComponent } from './email-administration/email-administration.component';
import { AddEditEmailadministrationComponent } from './add-edit-emailadministration/add-edit-emailadministration.component';

const routes: Routes = [
  {
    path: 'delayreport',
    component: DelayReportMgtComponent
  },
  {
    path: 'emailAdministration',
    component: EmailAdministrationComponent
  },
  {  
    path: 'editEmailadministration/:id', 
    component: AddEditEmailadministrationComponent
  },
  {    
    path: 'addEmailadministration', 
    component: AddEditEmailadministrationComponent
  },
  {
    path: 'productreport',
    component: ProductReportMgtComponent
  },
  {
    path: 'deliverysiteidentification',
    component: DeliverySiteIdentificationComponent
  },
  {
    path: 'WayBillReport',
    component: WayBillReportComponent
  },
  {
    path: 'BrandShipmentsDealerManagement',
    component: BrandShipmentsDealerManagementComponent
  },
  {
    path: 'familiesmgt',
    component: FamiliesMgtComponent
  },
  {
    path: 'opendayssmgt',
    component: OpendaysMgtComponent
  },
  {
    path: 'Opendays',
    component: OpendaysComponent
    },
  {
    path: 'attributedetails',
    component: AttributionDetailsComponent
  },
  {
    path: 'MajorCustomer',
    component: MajorCustomerAdministrationComponent 
  },
  {
    path: 'opendaysmgt',
    component: OpendaysMgtComponent
  }, 
  {
    path: 'GoalByPF',
    component:GlobalSettingComponent
  },
  {
    path: 'CountryManagement',
    component: CountriesMajorCustomerComponent
  },
  {
    path: 'viacustomers',
    component: ViaCustomersComponent 
  },
  

 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }


