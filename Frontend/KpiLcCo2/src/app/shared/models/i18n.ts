// models related to translations, including static text and corporate code

// i18n language object
export interface I18nLang {
  id: string;
  text: string;
  flagUrl: string;
}

// text to be translated
export interface TranslateText {
  key: string ;
  defaultText?: string;
}

export interface TranslateCategory {
  category: CCCategory;
  code: number;
}

export enum CCCategory {
  CENTER_STATUS = 'CC_CenterStatus',
  CENTER_TYPE = 'CC_CenterType',
  INV_FILE_TYPE = 'CC_InventoryFileType',
  INV_MISSING_TYPE = 'CC_InventoryMissingType',
  LOCAL_IT = 'CC_LocalIT',
  LOCAL_IT_FILE_STATUS = 'CC_LocalITFileStatus',
  PHYSICAL_FILE_STATUS = 'CC_PhysicalFileStatus',
  RECORD_STATUS = 'CC_RecordStatus',
  REPORT_CATEGORY = 'CC_ReportCategory',
  SESSION_STATUS = 'CC_SessionStatus',
  USER_ROLE = 'CC_UserRole'
}

export interface CorporateCode {
  corporateCode: CCCategory;
  items: Array<{
    code: number;
    value: string;
  }>;
}
