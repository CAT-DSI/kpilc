export interface loginModel {
  login: string;
  password: string;
}
export interface Profile {
  id: number | any;
  profileName: string | any;
  webUsers: any[];
  checked: boolean;

}
export interface ProfileModel {
  profileName: string | any;
  ReportId: Array<string>;
  ProfileId: number;
  checkeddata: any[];
}
export interface delayreport {
  id: number | any;
  categoryId: number | any;
  IdTranscoWex: number | any;
  country: string | any;
  brand: string | any;
  product: string | any;
  kpi: number;
  isDelayReport: boolean;
  type: number;
  Code: string | any;

}
export interface KpiSettingModel {
  id: number;
  name: string;
  kpi: number;
}
export interface Productreport {
  id: number | any;
  product: string | any;
  regime: string | any;
  ratetarget: string | any;
  kpi: number;
  regimeId: number;
}

export enum ReportSetting {
  TwoKPINewDailyPerformanceDelay = 1,
  ToSetUpForDelivery = 2,
  ToExcludeCustomers = 3,
}
export interface ReportsParamsModel {
  id: number | any;
  categoryId: number | any;
  IdTranscoWex: number | any;
  kpi: number;
  isDelayReport: boolean;
  brand: any;
  country: string;
  type: number;
}
export interface User {
  id: number;
  userid: number | any;
  firstName: string | any;
  lastName: string | any;
  email: string | any;
  status: number;
  roleId: number;
  role: string | any;
  accessKey: string | any;
  IsActive: boolean | any;
  ServiceId: number | any;
  restricted: boolean | any;
  CreationDate: Date | any;
  UpdateDate: Date | any;
  pf: string | any;
  Country: string | any;
  profileName: [];
  geoPoleId?: number;
  isDelayReport: boolean;
  profileId: number;
  usertype: string | any;
  Regime: string | any;
  isDealer: boolean;
}
export interface Hometab {
  regime: string;
  id: number;
}
export interface Hometab2 {
  Name: string;
  kpi: number;
  id: number;
}
export interface Center {
  pgeo: string;
  status: number;
  idCountry: number;
  countryName: string;
  name: string;
  centerType: number;
}
export interface ClientError {
  code: string;
  description: string;
}
export interface requestReset {
  mail: string;
}
export interface UserForm {
  login: string | any;
  id: number | any;
  UserId: number | any;
  firstName: string | any;
  lastName: string | any;
  email: string | any;
  status: number | any;
  roleId: number | any;
  accessKey: string | any;
  IsActive: boolean | any;
  ServiceId: number | any;
  restricted: boolean | any;
  CreationDate: Date | any;
  UpdateDate: Date | any;
  pf: string | any;
  Country: any[];
  role: string | any;
  geoPoleId?: number | any;
  profileName: [] | any;
  ProfileId: number | any;
  UserType: string | any;
}

export interface countrydata {
  listToDelete: any[];
  listToAdd: any[];
  Userid: number | any;
}
export interface Platformdata {
  listToDelete: any[];
  listToAdd: any[];
  Userid: number | any;
}

export interface Platformdata {
  listToDelete: any[];
  listToAdd: any[];
  Userid: number | any;
}
export interface ReportCategoriesPfsModel{
  catagoryId : number,
  pf : string|any,
  country: string|any
}

export interface RefPlateformes{
  codePlf: string,
  plateform: string,
  country: string,
  isCat: boolean,
  nbr: number,
  euro: number,
  display: boolean,
  id: number
}


export interface EmailModel {
  id: string
  reportId: string
  country: string
  sysdate: number
  sysdate1: any
  emails: string
  frequencies: Frequency[]
  marques: MarqueCountryUser[]
  products: ProductBrandUser[]
  regimes: any[]
  eachMonth: boolean
  eachDay: boolean
  selectedMonths: any
  selectedDays: string | any
  datesRange: any
  reportName: string
  reportKey: string
  platform: Platform
  groups: any
  plateform : string | any
  brand: string | any
  updatedby : string
  updatedDate : Date | any
  isDateRange : boolean 
}

export interface Frequency {
  mainItemID: string
  frequencyID: string
  frequencyKey: string
  frequencyLabel: string
  isSelected: boolean
}

export interface Platform {
  codePlf: string
  plateform: string
  country: string
  isCat: boolean
  nbr: any
  euro: any
  display: boolean
  id: number
}

export interface ProductBrandUser{
  country: string
  brand : string
  product : string
  isSelected : boolean
}

export interface MarqueCountryUser{
  country: string
  brand : string 
  isSelected : boolean
}

export enum UserRoles {
  ADMIN = 1,
  READER = 2,
  REGIONAL = 3
}
export enum ReportAccess {
  SUPPLIERDetails = 1,
  CO2Details = 2,
  ANOMALIESDetails = 3,
  SUPPLIRaggregated = 4,
  CO2Client = 5,
  CO2Aggregated = 6,
  ANOMALIESSynthesis = 7,
  MonthlyPlateformePerformance = 8,
  DelayEurope = 9,
  FinancialReport = 10,
  PerformancePerDealer =11,
  weeklyEuropeDelay = 12,
  CustomerMonthlyDelay = 13,
  ForceddelratePF = 14,
  monthlyEuropedelay = 16,
  noreport = 30,
  DailyDamage = 15,
  SalesClosing = 17,
  scanmilkrun = 18,
  FrControlPf = 19,
  TrackReportsViewedByUsers = 26,
  AdValoremReport = 28,
  Ventas= 27,
  ReturnCustomer =21,
  WayBillPf=24,
  Volumetrieparfamille =20,
  FRControlePerfPF = 19,
  DelayPerPFMilkrun = 23,
  DelayReportWithmaxdeliverydate = 25
}

export interface CustomerCountriesModel {
  id: number | any,
  code: string | any,
  name: string | any,
  enabledForMajorCustomerReport: boolean,
}

export interface KPILCLoginModel {
  Url: string;
}

export interface OpenDaysDetModel{
  id: number | any,
  day: Date | any,
  country: string|any
}

export interface ReportOpenDaysModel{
  id: number | any,  
  country: string|any,
  month: Date | any,
  nbr: number | any,
  openDays: number | any,
}

export interface PlateformesModel{
  id: number | any,  
  country: string|any,
  codePlf: string | any,
  plateform: string|any,
  nbr: number | any,
  euro: number | any,
  isCat:boolean|any,
  display: boolean|any
}

export interface MajorCustomerModel{
  id: number,
  country: string|any,
  customer : string|any
}