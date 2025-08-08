import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

import { CURRRENT_SESSION_ID_KEY } from 'src/config';

import { saveToStorage } from 'src/app/shared/Util/storage';
import { BasicParams, GenericApiResponse, RecordStatus } from '../models/app';
import { InventoryFileTypes, FileUploadLog } from '../models/inventory-files';
import { HttpHelperService } from './http-helper.service';
import { Session, SessionForm, SessionStatus, DuplicateEntry } from 'src/app/shared/models/session';


/*
  service for handling sessions
 */
@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  sessionsList = new BehaviorSubject<Session[]>([]);
  selectedSessionId = new BehaviorSubject<number>(null);

  constructor(
    private httpHelper: HttpHelperService
  ) { }


  /*
    update sessions list by fetching all sessions
   */
  updateSessionsList() {
    this.getSessions({ pageIndex: 0}, { status: RecordStatus.ACTIVE }).subscribe(({ totalCount, items }) => {
      this.sessionsList.next(items);

      // reset selectedSessionId if its not found in the new list
      if (!_.find(items, { id: this.selectedSessionId.value })) {
        this.selectedSessionId.next(null);
      }
    });
  }

  /*
    set new selected session as current session
   */
  setCurrentSession(sessionId: number) {
    this.selectedSessionId.next(sessionId);
    saveToStorage(CURRRENT_SESSION_ID_KEY, sessionId, true);
  }

  /*
    update selected session's wkfStatus without reloading it
   */
  updateSelectedSessionWkfStatus(newWkfStatus: number) {
    const list = this.sessionsList.value;

    const session = _.find(list, { id: this.selectedSessionId.value});
    session.wkfStatus = newWkfStatus;

    this.sessionsList.next(list);
  }

  /*
    get all sessions
   */
  getSessions(params?: BasicParams, otherFilters?: any): Observable<GenericApiResponse<Session>> {
    const aggrParams = {
      ...params,
      ...otherFilters
    };

    return this.httpHelper.get('/inventorySession', { params: aggrParams });
  }

  /*
    get a session by its id
   */
  getSession(sessionId: number): Observable<Session> {
    return this.httpHelper.get(`/inventorySession/${sessionId}`);
  }

  /*
    delete a session by id
   */
  deleteSession(sessionId: number): Observable<void> {
    return this.httpHelper.delete(`/inventorySession/${sessionId}`);
  }

  /*
    create/update a session
    its update if the sessionId is passed, otherwise its create new
   */
  saveSession(session: SessionForm, sessionId?: number): Observable<void> {
    return _.isUndefined(sessionId) ?
      this.httpHelper.post('/inventorySession', session) :
      this.httpHelper.put(`/inventorySession/${sessionId}`, session);
  }

  /*
    get duplicates for a session
   */
  getSessionDuplicates(
    sessionId: number, fileType: InventoryFileTypes, params?: BasicParams
  ): Observable<GenericApiResponse<DuplicateEntry>> {
    return this.httpHelper.get(`/inventorySession/${sessionId}/duplicate/${fileType}`, { params });
  }

  /*
    remove a session duplicate
   */
  removeSessionDuplicate(
    sessionId: number, data: { inventoryFileType: InventoryFileTypes, vinCode: number, pgeo: string }
  ): Observable<void> {
    return this.httpHelper.post(`/inventorySession/${sessionId}/removeDuplicate`, data);
  }

  /*
    get session file upload logs for a particular file type
   */
  getSessionFileUploadLog(sessionId: number, fileType: InventoryFileTypes): Observable<FileUploadLog> {
    return this.httpHelper.get(`/inventorySession/${sessionId}/fileUploadLog/${fileType}`);
  }

  /*
    upload inventory files for central or transportation file types
   */
  uploadInventoryFile(sessionId: number, fileType: InventoryFileTypes, file: File): Observable<any> {
    return this.httpHelper.upload(`/inventorySession/${sessionId}/upload/${fileType}`, file);
  }

}
