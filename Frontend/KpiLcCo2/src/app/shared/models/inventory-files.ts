export enum InventoryFileTypes {
  LOCAL = 'LocalIT',
  PHYSICAL = 'Physical',
  CENTRAL = 'CentralIT',
  IN_TRANSPORTATION = 'InTransportation'
}

export interface FileUploadLog {
  errors: string[];
  uploadFilename: string;
  lastUpdate: string;
  lastUpdateUserId?: number;
  lastUpdateUsername: string;
}

export interface FileUploadResponse {
  recordCount: number;
  uploadLog: FileUploadLog;
}

export interface UploadEventResponse {
  status: 'progress' | 'completed';
  progress?: number;
  completedResponse: FileUploadResponse;
}

export interface FileError {
  id: number;
  idSession: number;
  pgeo: string;
  vinCode: string;
  correctionDate: string;
  correctionDescription: string;
}
