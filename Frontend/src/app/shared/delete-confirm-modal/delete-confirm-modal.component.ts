import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TranslateText } from 'src/app/shared/models/i18n';


/*
  delete confirmation modal,
  shown when any entity is about to be deleted
 */
@Component({
  selector: 'app-delete-confirm-modal',
  templateUrl: './delete-confirm-modal.component.html',
  styleUrls: ['./delete-confirm-modal.component.scss']
})
export class DeleteConfirmModalComponent implements OnInit {

  @Input() headerTitle: TranslateText;
  @Input() entityName?: TranslateText;
  @Input() entityValue: string;
  @Input() bodyExtraTemplate: TemplateRef<any>;

  @Output() deleteConfirmed = new EventEmitter<void>();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }


  /*
    send delete confirmation to parent component
   */
  onConfirm() {
    this.deleteConfirmed.emit();
  }

}
