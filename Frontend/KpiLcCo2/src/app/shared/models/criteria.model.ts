
import { option } from '../Util/criteria-base';

export interface criteriaModel {
    reportID: string;
    dataType: string;
    updatedOn: Date;
    controlType: number;
    hidden: boolean;
    id: string;
    label: string;
    name: string;
    timestamp: string;
    defaultValue: string;
    defaultKey: string;
    referential: string;
    multiple: boolean;
    required: boolean;
    order: number;
    options: option[];
    CategoryID:string
    MenuSeq:number|any;
}

export interface paramValue {
    criteriaId : string;
    value: string;
    key: string;
    scheduler:boolean;
    Report_ID:string;
    CategoryID:string;
    IsoCodeLang:string;
    UserId:string;
}

export const controlTypes =
[
    {value:1, text:'Date'},
    {value:2, text:'textbox'},
    {value:3, text:'List'},
    {value:4, text: 'Month'},
    {value:5, text: 'Week'},
    {value:6, text: 'Numeric'}
]