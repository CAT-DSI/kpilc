export interface Report {
  id: number;
  name: string;
  reportCategory: number;
  description: string;
  reportOrder: number;
  status: number;
}

export interface RefTranscoFpWex
{
  idTranscoWex: Number;
  FamilyPk: string;
  family: string | any;
  XaccountId: string;
  XaccountFk: string;
  sprId: string;
  SprFk: string;
  label: string;
  Country: string;
  ArrCountry: string;
}

export interface RefRegimes{
  regime : string;
  order : number;
}
export interface CategorizedReport {
  categoryId: number;
  reports: Report[];
}

export interface ReportQueryResponse {
  totalCount: number;
  headers: string[];
  items: [[string]];
}
export interface ViaCustomer {
  Id: number;
  Brand: string;
  CustomerGroup: string;
  MarketLine: string;
}
