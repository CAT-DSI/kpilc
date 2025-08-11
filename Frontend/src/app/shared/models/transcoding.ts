export enum TranscodingFileTypes {
  DelayReport = 'Delay-Report',
  RXR = 'RXR'
}
export enum DownloadFileFormats {
  CSV = 'CSV',
  EXCEL = 'EXCEL'
}

export interface WMIBrand {
  id: number;
  codeWMI: string;
  rapport: string;
  constructeur: string;
  libelleDeLaMarque: string;
  codeDonneurOrdre: string;
  libelleDonneurOrdre: string;
  codeMarque: string;
  codeMarqueClv: string;
}

export interface ExtReference {
  id: number;
  valRefTiersTransco: string;
  libCodTableRef: string;
  libReferentiel: string;
  dteCreatTransco: string;
  dteModifTransco: string;
  statTransco: string;
  valRefCatTransco: string;
  codRefTiersTransco: number;
  codTableTranscodee: number;
}
