import { criteriaModel } from './criteria.model';

export interface reportModel {
  order: number | any;
  parentReportID: string | any;
  reportServer: string | any;
  categoryID: string | any;
  reportPath: string | any;
  name: string | any;
  label: string | any;
  id: string | any;
  updatedOn: Date | any;
  updatedBy: string | any;
  scheduled: boolean | any;
  status: number | any;
  criterias: criteriaModel[] | any;
  category: categoryModel | any;
  subreports: reportModel[] | never | any;
  timestamp: string | any;
  subreport: boolean | any;
}
export interface CountryEx {
  code: string;
  name: string;
}

export interface categoryModel {
  // id: string;
  // name: string;
  // label: string;
  order: number | any;
  parentReportID: string | any;
  reportServer: string | any;
  categoryID: string | any;
  reportPath: string | any;
  name: string | any;
  label: string | any;
  id: string | any;
  updatedOn: Date | any;
  updatedBy: string | any;
  scheduled: boolean | any;
  status: number | any;
  criterias: criteriaModel[] | any;
  category: categoryModel | any;
  subreports: reportModel[] | never | any;
  timestamp: string | any;
  subreport: boolean | any;
  MenuSeq: [] | any;
}
export interface ReportUserProduct {

  ReportId: number | any;
  UserId: number;
  Product: string;
}
export interface ReportLog {

  UserAction: number | any;

  UserId: number | any;

  ReportId: number | any;
}

export interface ReportUserParams {
  ReportId: number | any;
  UserId: number;
  FieldType: number;
  FieldValue: number | any;
  DirectFieldValue?: string | any;
  Id?: number;
}

export interface UserRegimesModel{
  ReportId: number | any;
  UserId: number;
  Regime: string|any;
}

export interface UserMarquesModel{
  ReportId: number | any;
  UserId: number;
  Marques: string | any;
}
export interface UserCountriesModel{
  Countries: string | any;
  UserId : number;
  ReportId : number | any;
  Type : number;
}

export interface ReportDelayPerMilkrun {
  ReportId: number | any;
  UserId: number;
  Country: string | any;
  Start: Date | any;
  End: Date | any;
}

export interface ReportUserProducts {

  ReportId: number | any;
  UserId: number;
  Product: string | any;
}
export interface ReportUserStatus {  
  ReportId:number|any;
  UserId:number;
  StatusCode:string|any;
}

export interface BrandModelParams {

  ReportId: number | any;
  UserId: number;
  Brand: string;
}
export interface ReportUserMrNumbers {

  ReportId: number | any;
  UserId: number;
  MrNumber: string | any;
}
export interface categoryModel1 {
  name: string;
}

export enum UserAction {
  Display = 1,
  Export = 2
}

export enum reportStatus {
  'Unsupported' = 0,
  'Supported' = 1,
  'Inactive' = 2
}
