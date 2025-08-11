import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { FileUploadLog } from '../models/inventory-files';
import { TranslateText } from '../models/i18n';
import { DeleteConfirmModalComponent } from '../delete-confirm-modal/delete-confirm-modal.component';
import { DownloadConfirmModalComponent } from '../download-confirm-modal/download-confirm-modal.component';




/*
  service to handle various modals in the app
 */
@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  // default modal settings which can be overridden per case basis
  defaultModalSettings: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true
  };

  constructor(
    private ngbModal: NgbModal,
  ) { }

  /**
   * add edit entity modals with default settings
   */
  addEditEntity(component: any, options?: NgbModalOptions) {
    const modalRef = this.ngbModal.open(component, {
      ...this.defaultModalSettings,
      ...options
    });

    return modalRef;
  }
  /*
    delete confirmation modal with default settings
   */
    deleteConfirmation(headerTitle: TranslateText, entityName: TranslateText, entityValue?: string) {
      const modalRef = this.ngbModal.open(DeleteConfirmModalComponent, {
        ...this.defaultModalSettings,
        backdrop: true,
        keyboard: true,
        windowClass: 'delete-confirmation-modal'
      });
  
      modalRef.componentInstance.headerTitle = headerTitle;
      modalRef.componentInstance.entityName = entityName;
      modalRef.componentInstance.entityValue = entityValue;
  
      return modalRef;
    }

    downloadConfirmation() {
      const modalRef = this.ngbModal.open(DownloadConfirmModalComponent, {
        ...this.defaultModalSettings,
        backdrop: true,
        keyboard: true
      });
  
      return modalRef;
    }
  }
  
 

