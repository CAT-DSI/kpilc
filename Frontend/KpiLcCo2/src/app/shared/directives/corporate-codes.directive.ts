import { Directive, Input, HostBinding, ChangeDetectorRef, OnDestroy, OnChanges, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import * as _ from 'lodash';

import { CorporateCode } from 'src/app/shared/models/i18n';
import { I18nService } from 'src/app/shared/Services/i18n.service';


/*
  to manage corporate codes substitution and translation
  depending on the current language selected
  it updates the values when the language is updated by the user as well
 */
@Directive({
  selector: '[appCorporateCodes]'
})
export class CorporateCodesDirective implements OnChanges, OnDestroy {

  @HostBinding('innerHTML') translatedValue: string;
  @Input() ccCategory: string;
  @Input() ccCode: number | string;

  subscription = new Subscription();

  corporateCodes: CorporateCode[];

  constructor(
    private cdr: ChangeDetectorRef,
    private i18nService: I18nService,
    private element: ElementRef
  ) {
    const sub1 = i18nService.corporateCodes.pipe(
      skipWhile(codes => codes.length === 0)
    )
    .subscribe(codes => {
      this.corporateCodes = codes;
      this.updateView();
    });

    this.subscription.add(sub1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    this.updateView();
  }


  // update the view with the converted value for the passed code
  // and also mark for change detection so that the new value can be rendered
  updateView() {
    const cateogryItemsObj = _.find(this.corporateCodes, { corporateCode: this.ccCategory });

    if (cateogryItemsObj) {
      const item = _.find(cateogryItemsObj.items, { code: _.toNumber(this.ccCode) });

      // only when the correct code, value pair has been found return the value and mark for change detection
      if (item) {
        this.translatedValue = item.value;
        // incase the input element is a form input element we set its value property
        this.element.nativeElement.value = item.value;

        this.cdr.markForCheck();
      }
    }
  }

}
