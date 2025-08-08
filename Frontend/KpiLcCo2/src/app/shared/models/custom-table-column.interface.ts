import { TableColumn } from '@swimlane/ngx-datatable';

export interface  CustomTableColumn extends  TableColumn {
    filterable?: boolean;  
    cellTmpl?: string; 
}
