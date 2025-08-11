export interface referentialModel {
    id: string;
    label: string;
    fields: fieldModel[];
}

export interface fieldModel {
    id: string;
    name: string;
    label: string;
    functionalField:boolean;
}
export interface reportapi
{
    callreportapi:boolean;
}
export interface autoCompleteModel {
    Predicate: string;
    Skip: number;
    Take: number;
    Id: number|any;
    CountryCode?:string;
    UserId:number|any;
    reportId:number|any;
    chargingType? :string;
    majorCustomer? :string;
    brand? :string;
}