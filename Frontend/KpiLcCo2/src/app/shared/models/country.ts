export interface Country {
  id: number;
  status: number;
  idGeoPole: number;
  geoPoleName: number;
  codeISO: string;
  name: string;
  code:string;
}
export interface WebReport {
  id: number;  
  name: string;
  reportKey:string;
  categoryId: string;
  isForEmail: boolean;
  isShow: boolean
}

export interface Regime{
  id: number;
  regime: string;
}
export interface profile {
  id: number;
  profileName: string;
  code:string; 
}

export interface product{
  country: string,
    brand: string,
    product: string,
    isSelected: boolean
}

export interface PFCountryUser{
  country: string,
  codePlf : string,
  plateform : string,
  isSelected : boolean
}

export interface marque{ 
  brand: string,
  isSelected: boolean
}

export interface PF {
  id: number;
  name: string;
  code:string;
  platform:string;
  sprId:string;
  xaccountId:string;
}
export interface productlist  {
 key:string|any;
 value:string|any;
}
export interface RefRegimes{
  regime : string;
  order : number;
}

export interface regimelist  {
  id:number|any;
  regime:string|any;
 }


export interface CountryForm {
  name: string;
  idGeoPole: number;
  codeISO: string;
  status: number;
}

export interface YearModel{
  year : number | any;
  firstDayOfWeek : Date;
}

export interface Marques{
  marque: string;
  country: string;
  countryDep : string;
}
