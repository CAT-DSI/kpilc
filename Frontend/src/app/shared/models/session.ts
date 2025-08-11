export interface Session {
  id: number;
  status: number;
  name: string;
  startDate: string;
  endDate: string;
  wkfStatus: number;
}

export enum SessionStatus {
  ONGOING = 10,
  WAITING = 20,
  VALIDATED = 21
}

export interface SessionCenter {
  id: number;
  status: number;
  idSession: number;
  pgeo: string;
  countryName: string;
  idLocalIT: number;
  localSessionDate: string;
  wkfLocalITStatus: number;
  localITNumber: number;
  localITUploadDate: string;
  idUserLocalITUpdate: number;
  wkfLocalPhysicalStatus: number;
  localPhysicalNumber: number;
  localPhysicalUploadDate: string;
  idUserLocalPhysicalUpdate: number;
  wkfCentralStatus: number;
  centralStatusDate: string;
  idUserCentralStatusUpdate: number;
  localPhysicalUpdateUserFullName: string;
  localITUpdateUserFullName: string;
  centralStatusUpdateUserFullName: string;
}

export interface DuplicateEntry {
  id: number;
  pgeo: string;
  vinCode: number;
  inLocalIT: boolean;
  inPhysical: boolean;
  inCentralIT: boolean;
}

export interface SessionCenterUpdateForm {
  idLocalIT?: number;
  localSessionDate?: Date;
  wkfLocalITStatus?: number;
  wkfLocalPhysicalStatus?: number;
  wkfCentralStatus?: number;
}

export interface SessionForm {
  name: string;
  status: number;
  startDate: Date;
  endDate: Date;
  wkfStatus?: number;
}
