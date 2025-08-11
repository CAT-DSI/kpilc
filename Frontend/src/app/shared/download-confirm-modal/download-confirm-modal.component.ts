import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TranslateText } from 'src/app/shared/models/i18n';


/*
  download file confirmation modal,
  shows when a file is requested to be downloaded by the user
 */
@Component({
  selector: 'app-download-confirm-modal',
  templateUrl: './download-confirm-modal.component.html',
  styleUrls: ['./download-confirm-modal.component.scss']
})
export class DownloadConfirmModalComponent implements OnInit {

  @Input() headerTitle: TranslateText;
  @Input() confirmationTxt: TranslateText;
  @Input() entityName?: TranslateText;
  @Input() confirmBtnTxt: TranslateText;
  @Input() confirmBtnIconUrl: string;
  @Input() confirmBtnClass?: string;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
