import { BasicParams, Role } from 'src/app/shared/models/app';
import { UserRoles, ReportAccess } from 'src/app/shared/models/auth.model';
import * as _ from 'lodash';
import { ReportComponent } from 'src/app/reporting/report/report.component';
import { ReportGuard } from 'src/app/shared/guards/report.guard';

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// most common urls
export const URLS = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  Reports:'/reports'
};

// key's for local or session storage
export const LOGGED_IN_USER_KEY = 'logged_in_user';
export const ACCESS_TOKEN_KEY = 'access_token';
export const LANGUAGE_KEY = 'user_lang';
export const CURRRENT_SESSION_ID_KEY = 'current_session';
export const basehref="/";


// header navigation
export const NAVIGATION_MENU:any = [
  
   {
    key: 'nav.co2',
    defaultText: 'CO2',
    icon: basehref + 'assets/icons/co2.png',
    roles: [],
    reportroles: [ReportAccess.ANOMALIESDetails,ReportAccess.ANOMALIESSynthesis,ReportAccess.CO2Aggregated,ReportAccess.CO2Client,ReportAccess.CO2Details,
    ReportAccess.SUPPLIERDetails,ReportAccess.SUPPLIRaggregated],
    
    subNav: [
     
      { key: 'nav.client', defaultText: 'Client', showmenu:[ReportAccess.CO2Aggregated,ReportAccess.CO2Client,ReportAccess.CO2Details],   nestedsubNav:[ { key: 'nav.CO2_aggregated', defaultText: 'CO2 aggregated', showmenu:[ReportAccess.CO2Aggregated],  route1: '/report/41D345BF-4CD0-41AD-951C-A81465CF210B',  },
      { key: 'nav.CO2_Clinet', defaultText: 'CO2 Client', showmenu:[ReportAccess.CO2Client],  route1: '/report/83D2E65E-2F06-4FAC-B8C9-A010E0E6176F' },
      { key: 'nav.CO2_Details', defaultText: 'CO2 Details', showmenu:[ReportAccess.CO2Details],  route1: '/report/A127DE22-08B6-4327-9F8E-37ABCEAF2542' },] },
      { key: 'nav.SUPPLIER', defaultText: 'SUPPLIER',showmenu:[ReportAccess.SUPPLIERDetails,ReportAccess.SUPPLIRaggregated], nestedsubNav1:[ { key: 'nav.Suuplier_Aggregated', defaultText: 'Supplier Aggregated', showmenu:[ReportAccess.SUPPLIRaggregated], route1: '/report/6A698A62-2540-4400-AC25-6BEDFE82F708'},
      { key: 'nav.Supplier_Detail', defaultText: 'Supplier Details',showmenu:[ReportAccess.SUPPLIERDetails],  route1: '/report/0E92B0D7-A49B-423E-BF88-1766E05279D0' }] },
      { key: 'nav.anomalies', defaultText: 'Anomalies', showmenu:[ReportAccess.ANOMALIESSynthesis,ReportAccess.ANOMALIESDetails], nestedsubNav2:[ { key: 'nav.ANOMALIES_detail', defaultText: 'Anomalies Detail',showmenu:[ReportAccess.ANOMALIESDetails],  route1: '/report/5E62513E-67B1-4875-8232-5D2FF34B4718',component: ReportComponent, canActivate: [ReportGuard]  },
      { key: 'nav.AnomaliesSynthesis', defaultText: 'Anomalies Synthesis', showmenu:[ReportAccess.ANOMALIESSynthesis], route1: '/report/2A5FA293-DDBE-4E0B-8230-D870CE5BFC11' }] },
  
    ], 
  },
  {
    key: 'nav.delay',
    defaultText: 'DELAY',
    icon: 'assets/icons/clock-line-icon.png',
    roles: [] ,
    reportroles: [ReportAccess.weeklyEuropeDelay,ReportAccess.MonthlyPlateformePerformance,ReportAccess.DelayEurope,ReportAccess.CustomerMonthlyDelay,ReportAccess.PerformancePerDealer,
      ReportAccess.monthlyEuropedelay,ReportAccess.FRControlePerfPF,ReportAccess.DelayPerPFMilkrun,ReportAccess.DelayReportWithmaxdeliverydate
    ],
    subNav: [
      { key: 'nav.DelayreportEurope', defaultText: 'Delay report-Europe', showmenu:[ReportAccess.DelayEurope], route: '/report/37DD8C67-FB68-449D-AE6C-2ED8C7CEAE03' },
      { key: 'nav.Performanceperdealer', defaultText: 'Performance Per Dealer', showmenu:[ReportAccess.PerformancePerDealer], route: '/report/3CEC5B34-7787-4DDE-A326-67BD4C346EF4' },
      { key: 'nav.MonthlyPlateformeperformance',  defaultText: 'Monthly Plateforme Performance', showmenu:[ReportAccess.MonthlyPlateformePerformance], route: '/report/43323982-2D9A-403D-9DD5-3C9951119220' },
      { key: 'nav.weeklyeuropedelay', defaultText: 'Weekly Europe Delay', showmenu:[ReportAccess.weeklyEuropeDelay],  route: '/report/E27AE91D-2442-4379-A870-707676385B98' },
      { key: 'nav.Customermonthlydelay', defaultText: 'Customer Monthly Delay', showmenu:[ReportAccess.CustomerMonthlyDelay], route: '/report/52B9DCDA-EE55-457A-BD94-51BA3FF616AF' },
      { key: 'nav.Monthlyeuropedelay', defaultText: 'Monthly Europe Delay',showmenu:[ReportAccess.monthlyEuropedelay],  route: '/report/28B06757-9807-4F92-8196-F5542D773A7C' },
       { key: 'nav.FRControlePerfPF', defaultText: 'FR Controle Perf PF',showmenu:[ReportAccess.FRControlePerfPF],  route: '/report/BDB25AA8-98CE-4B4B-A028-02554A8BDC13' },
       { key: 'nav.DelayReporting', defaultText: 'Delay Reporting',showmenu:[ReportAccess.monthlyEuropedelay],  route: '/report/0971CDB6-03AA-4806-B7DD-7FEDF5E30EC8' },
       { key: 'nav.DelayPerPFMilkrun', defaultText: 'Delay Per PF/Milkrun',showmenu:[ReportAccess.DelayPerPFMilkrun],  route: '/report/814DF722-BE22-4D00-8347-DCFE41433982' },
       { key: 'nav.Delayreportwithmaxdeliverydate', defaultText: 'Delay report with max delivery date',showmenu:[ReportAccess.DelayReportWithmaxdeliverydate],  route: '/report/F3EAF070-E018-4FFF-A6CF-8A7964FC9323' },
    ]
    
  },
 
  // {
  //   key: 'nav.Finance',
  //   defaultText: 'Finance',
  //   icon: './assets/icons/Finanancial.png',
  //   roles: [] ,
  //   reportroles:[],
  //   subNav: [
  //     { key: 'nav.FinancialReport', defaultText: 'Financial Report',showmenu:[ReportAccess.FinancialReport],  route: '/report/BD8FAA20-9B9A-44CD-A5EB-2549D0D8E680' },
  //     { key: 'nav.FinancialReport', defaultText: 'Sales Closing',showmenu:[ReportAccess.SalesClosing],  route: '/report/EECDA102-C790-4F06-90EE-21B283559D3C' },
  //     { key: 'nav.FinancialRepor', defaultText: 'Ventas',showmenu:[ReportAccess.Ventas],  route: '/report/5FCAD7C7-B10D-4EEF-A425-B213E16590F5' },
  //     { key: 'nav.FinancialRepo', defaultText: 'Ad valorem report',showmenu:[ReportAccess.AdValoremReport],  route: '/report/4FF875BB-B21A-4C1F-BBEB-C7044E6383EC' },
       
  //   ]    
  // },
 
  {
    key: 'nav.Finance',
    defaultText: 'Finance',
    icon: './assets/icons/Finanancial.png',
    roles: [] ,
    reportroles:[ReportAccess.FinancialReport,ReportAccess.SalesClosing,ReportAccess.Ventas,ReportAccess.AdValoremReport],
    subNav: [
      { key: 'nav.FinancialReport', defaultText: 'Financial Report',showmenu:[ReportAccess.FinancialReport],  route: '/report/BD8FAA20-9B9A-44CD-A5EB-2549D0D8E680' },
      { key: 'nav.SalesClosing', defaultText: 'Sales Closing',showmenu:[ReportAccess.SalesClosing],  route: '/report/EECDA102-C790-4F06-90EE-21B283559D3C' },
      { key: 'nav.Ventas', defaultText: 'Ventas',showmenu:[ReportAccess.Ventas],  route: '/report/5FCAD7C7-B10D-4EEF-A425-B213E16590F5' },
      { key: 'nav.AdValoremReport', defaultText: 'Ad valorem report',showmenu:[ReportAccess.AdValoremReport],  route: '/report/4FF875BB-B21A-4C1F-BBEB-C7044E6383EC' },
    
    ]
    
  },
  {
    key: 'nav.Financ',
    defaultText: 'Return',
    icon: './assets/icons/Return.png',
    roles: [] ,
    reportroles:[ReportAccess.ReturnCustomer],
    subNav: [
      { key: 'nav.ReturnCustomer', defaultText: 'Return Customer ',showmenu:[ReportAccess.ReturnCustomer],  route: '/report/074E12A2-4438-4047-BDC1-2B712A5F98CA' },
    
    ]
    
  },
  {
    key: 'nav.Quality',
    defaultText: 'Quality',
    icon: './assets/icons/quality.png',
    roles: [] ,
    reportroles:[ReportAccess.ForceddelratePF,ReportAccess.DailyDamage,ReportAccess.scanmilkrun,ReportAccess.WayBillPf],
    subNav: [
      { key: 'nav.ForceddelratePF', defaultText: 'Forced Del Rate PF',showmenu:[ReportAccess.ForceddelratePF],  route: '/report/79838B19-E713-4D8A-9C3B-0413607D6D6E' },
      { key: 'nav.DailyDamage', defaultText: 'Daily Damage',showmenu:[ReportAccess.DailyDamage],  route: '/report/2ADFC098-DAB0-4684-A5CA-CBEFDAC35695' },
      { key: 'nav.TypeScanPerMilkrun', defaultText: 'Type of scan per Milkrun',showmenu:[ReportAccess.scanmilkrun],  route: '/report/97A0E416-793D-45F5-A9ED-72122CD007E8' },
     { key: 'nav.WayBillPf', defaultText: 'WayBill Pf',showmenu:[ReportAccess.WayBillPf],  route: '/report/FD5AF9F1-5133-4AE4-8F42-D4E01C872746' },
    
    ]
    
  },
  {
    key: 'nav.Volumetry',
    defaultText: 'Volumetry',
    icon: './assets/icons/volumetry.png',
    //roles: [UserRoles.ADMIN] , //Old code
    roles: [] ,
    reportroles:[ReportAccess.Volumetrieparfamille],
    subNav: [
       { key: 'nav.Volumétrie', defaultText: 'Volumétrie par famille/client',showmenu:[ReportAccess.Volumetrieparfamille],  route: '/report/C5D6042C-26C0-442D-90DE-E0A8D939B82E' },
      
    ]
    
  },
  {
    key: 'nav.administration',
    defaultText: 'Administration',
    icon: basehref + 'assets/icons/admin-icon.png', 
    roles: [UserRoles.ADMIN],
    reportroles:[ReportAccess.noreport],
    subNav: [
      { key: 'nav.Usermange', defaultText: 'User Management', showmenu:[ReportAccess.noreport],  route: '/configuration/users' },
      { key: 'nav.profilemanagement', defaultText: 'Profile Management', showmenu:[ReportAccess.noreport],  nestedsubNav:[  { key: 'nav.createaprofile', defaultText: 'Create  Profile', showmenu:[ReportAccess.noreport], route1: '/configuration/profile' },
      { key: 'nav.Modifyprofile', defaultText: 'Modify  Profile',showmenu:[ReportAccess.noreport], route1: '/configuration/createprofile' },      
    ]},
     { key: 'nav.TrackReportsViewedByUsers', defaultText: 'Track reports viewed by users',showmenu:[ReportAccess.TrackReportsViewedByUsers],  route: '/report/3743E6E1-5CCC-4486-B680-085600B75F31' },
    
    { key: 'nav.Setting', defaultText: 'Setting', showmenu:[ReportAccess.noreport],nestedsubNav1:[
      { key: 'nav.Delayreportmgt', defaultText: 'Delay Report Management',showmenu:[ReportAccess.noreport],  route1: '/setting/delayreport' },
      { key: 'nav.EmailAdministration', defaultText: 'Email Administration',showmenu:[ReportAccess.noreport],  route1: '/setting/emailAdministration' },
     
      { key: 'nav.Productreportmgt', defaultText: 'Product Report Management',showmenu:[ReportAccess.noreport],  route1: '/setting/productreport' },
      { key: 'nav.DeliverySiteIdentification', defaultText: 'To Set Up For Delivery Site Identification',showmenu:[ReportAccess.noreport],  route1: '/setting/deliverysiteidentification' },
      { key: 'nav.ToExcludeCustomersForWayBillReport', defaultText: 'To exclude customers for Waybill report',showmenu:[ReportAccess.noreport],  route1: '/setting/WayBillReport' },
      { key: 'nav.BrandShipmentsDealerManagement', defaultText: 'Brand shipments- Dealer management',showmenu:[ReportAccess.noreport],  route1: '/setting/BrandShipmentsDealerManagement' },
      { key: 'nav.FamiliesMgt', defaultText: 'Families management',showmenu:[ReportAccess.noreport],  route1: '/setting/familiesmgt' },
      { key: 'nav.OpendaysMgt', defaultText: 'Open days management',showmenu:[ReportAccess.noreport],  route1: '/setting/opendaysmgt' },
      { key: 'nav.AttributionDetails', defaultText: 'Attribution PF aux rapports Details',showmenu:[ReportAccess.noreport],  route1: '/setting/attributedetails' },  
      { key: 'nav.GestionDesJoursFériésPourLesVolumes', defaultText: 'Gestion des jours fériés pour les volumes',showmenu:[ReportAccess.noreport],  route1: '/setting/Opendays' },      
      { key: 'nav.MajorCustomerAdministration', defaultText: 'Major customer administration',showmenu:[ReportAccess.noreport],  route1: '/setting/MajorCustomer' },    
      { key: 'nav.GoalbyPF', defaultText: 'Goal by PF',showmenu:[ReportAccess.noreport],  route1: '/setting/GoalByPF' },       
      { key: 'nav.CountriesMajorCustomerReports', defaultText: 'Countries-Major customer reports',showmenu:[ReportAccess.noreport],  route1: '/setting/CountryManagement' },      
      { key: 'nav.Viacustomer', defaultText: 'Via Customers',showmenu:[ReportAccess.noreport],  route1: '/setting/viacustomers' }] },
    
    ]
   
  },

  // {
  //   key: 'nav.Setting',
  //   defaultText: 'Setting',
  //   icon: './assets/icons/Setting.svg',
  //   roles: [UserRoles.ADMIN],
  //   reportroles:[],
  //   subNav: [
  //     { key: 'nav.Delayreportmgt', defaultText: 'Delay Report Management',showmenu:[ReportAccess.noreport],  route: '/setting/delayreport' },
  //     { key: 'nav.Productreportmgt', defaultText: 'Product Report Management',showmenu:[ReportAccess.noreport],  route: '/setting/productreport' },
  //      { key: 'nav.Deliverysite', defaultText: 'To Set Up For Delivery Site Identification',showmenu:[ReportAccess.noreport],  route: '/setting/deliverysiteidentification' },
  //      { key: 'nav.Deliverysite', defaultText: 'To exclude customers for Waybill report',showmenu:[ReportAccess.noreport],  route: '/setting/WayBillReport' },
  //      { key: 'nav.Deliverysite', defaultText: 'Brand shipments- Dealer management',showmenu:[ReportAccess.noreport],  route: '/setting/BrandShipmentsDealerManagement' },
  //      { key: 'nav.Deliverysite', defaultText: 'Families management',showmenu:[ReportAccess.noreport],  route: '/setting/familiesmgt' },
  //     // { key: 'nav.Deliverysite', defaultText: 'Open days management',showmenu:[ReportAccess.noreport],  route: '/setting/opendayssmgt' },
  //     // { key: 'nav.Deliverysite', defaultText: 'Attribution PF aux rapports Details',showmenu:[ReportAccess.noreport],  route: '/setting/attributedetails' },
  //     // { key: 'nav.Deliverysite', defaultText: 'Major Customer Administration',showmenu:[ReportAccess.noreport],  route: '/setting/MajorCustomerAdministration' },
  //       { key: 'nav.via', defaultText: 'Via Customers',showmenu:[ReportAccess.noreport],  route: '/setting/viacustomers' },
  //   ]
    
  // }, 
  
 
];

// languages supported by the app
export const I18N_LANGUAGES = [
  { id: 'en-GB', text: 'English', flagUrl: 'assets/img/uk.png' },
  { id: 'fr', text: 'Français', flagUrl: 'assets/img/france.png' },
  { id: 'es', text: 'Español', flagUrl: 'assets/img/spain.png' },
  { id: 'de', text: 'Deutsch', flagUrl: 'assets/img/germany.png' },
  { id: 'pl', text: 'Polish', flagUrl: 'assets/img/Polish.png' }
];

// page size for tables
export const PAGE_SIZE_OPTIONS = [10, 20, 50];
export const DEFAULT_PAGE_SIZE = 10;

// minimum width for table columns
export const COL_MIN_WIDTH = 200;

export const DEFAULT_PARAMS: BasicParams = {
  pageSize: DEFAULT_PAGE_SIZE,
  pageIndex: 1,
};

// define record stu
export const RECORD_STATUS_COLORS = {
  0: '#ff8111',
  1: '#00b13b',
  2: '#fe1300'  
};

// validation status colors
export const VALIDAITON_STATUS_COLORS = {
  10: '#ff8111',
  12: '#fe1300',
  20: '#0097bf',
  21: '#00b13b',
  22: '#ff8111'
};

export const STATUS_OPTIONS = [1, 2];
export const STATUS_OPTIONS1 = ["Administrator","Reader"];


export const SESSION_STATUS_OPTIONS = [20, 21];

export const USER_ROLE_OPTIONS = [1, 2, 3];

export  enum Snack {
  Administrator ="Administrator",
  Reader = "Reader",
  NotAllowed = "NotAllowed",
  
}

 export let snacks = [
  Snack.Administrator,
  Snack.Reader,
  Snack.NotAllowed,
 
];
