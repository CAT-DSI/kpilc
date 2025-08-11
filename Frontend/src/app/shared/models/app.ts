// some common global models
import { DEFAULT_PAGE_SIZE } from 'src/config';


// generic api response structure for many paginated GET request responses
export interface GenericApiResponse<T> {
  totalCount?: number;
  items: any;
}

export enum SortTypes {
  ASC = 'asc',
  DESC = 'desc'
}
export interface PagingConfig {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}
export interface PagingConfigpopup {
  currentPage: number;
  itemsPerPagepopup: number;
  totalItems: number;
}


// basic query params for GET api requests
export interface BasicParams {
  pageSize?: number;
  pageIndex?: number;
   sortBy?: string;
   sortType?: SortTypes;
}

export enum DownloadFileFormats {
  CSV = 'CSV',
  EXCEL = 'EXCEL'
}

export enum RecordStatus {
  ACTIVE = 1,
  INACTIVE = 2,
  DELETED = 0
}

export enum Role {
  ADMIN = 1,
  READER = 2,
  NOTALLOWED =0
}

