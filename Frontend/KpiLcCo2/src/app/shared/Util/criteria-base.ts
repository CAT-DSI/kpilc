export class CriteriaBase<T> {
    IsoCodeLang:string|any;
    name:string|any;
    Report_ID:string|any;
    CategoryID:string|any;
    id: string|any;
    value: T |any;
    key: string;
    label: string;
    countrycode:string
    required: boolean;
    order: number;
    controlType: string;
    User_ID:string; 
    type: string;
    referential: string|any;
    majorcustomer:string;
    chargingtype:string;
    brand:string;
    Customer:string;
    options: {key: string, value: string, source:any}[];
    multiple: boolean|any;
    constructor(options: {
      IsoCodeLang?:string;
        Report_ID?:string;
        CategoryID?:string;
        id?: string;
        value?: T;
        key?: string;
        label?: string;
        countrycode?:string;
        required?: boolean;
        order?: number;
        controlType?: string;
        User_ID?:string;
        type?: string;
        referential?: string;
        multiple?: boolean;
        majorcustomer?:string;
        chargingtype?:string;
        brand?:string;
        options?: {key: string, value: string, source:any}[];
      } = {}) {
      this.id = options.id;
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
      this.referential  = options.referential;
      this.multiple = options.multiple;
      this.Report_ID=options.Report_ID;
      this.CategoryID=options.CategoryID;
      this.User_ID=options.User_ID;
      this.IsoCodeLang=options.IsoCodeLang;
    }
  }

  export interface option {
    key: string;
    value: string;
    filtervalue?:string;
    source: any;
  }
