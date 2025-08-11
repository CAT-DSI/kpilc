import { Component, OnInit, OnDestroy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import * as _ from 'lodash';

import { TranslateText, CCCategory } from 'src/app/shared/models/i18n';
import { I18nService } from 'src/app/shared/Services/i18n.service';


/*
  custom select dropdown
 */
@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectDropdownComponent),
      multi: true
    }
  ]
})
export class SelectDropdownComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  private innerOption: any;
  @Input() options: Array<string | number>;
  @Input() placeholder: TranslateText = { key: 'placeholders.select', defaultText: 'Select' };
  @Input() placement = 'bottom-left top-left';
  @Input() label: string;
  @Input() isDisabled = false;
  // to know if corporate code transformation needs to be applied on the options
  @Input() ccCategory: CCCategory;
  // dropdown size
  @Input() isSmall = false;
  @Input() container = '-';

  onChange: any = () => { };
  onTouched: any = () => { };

  get selectedOption() {
    return this.innerOption;
  }

  set selectedOption(val) {
    this.innerOption = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor(
    private i18nService: I18nService
  ) { }

  ngOnInit() {
    // if ccCategory is passed and options not passed then options array is dynamically constructed from corporateCodes
    if (this.ccCategory && !this.options) {
      const sub1 = this.i18nService.corporateCodes.pipe(
        skipWhile(codes => codes.length === 0)
      )
      .subscribe(codes => {
        const cateogryItemsObj = _.find(codes, { corporateCode: this.ccCategory });

        if (cateogryItemsObj) {
          this.options = _.map(cateogryItemsObj.items, item => item.code);
        }
      });

      this.subscription.add(sub1);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(val) {
    if(typeof(val)=="string") {
     
      this.innerOption=val;
    }
    else
    {
       this.innerOption = this.options[val-1];
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  updateSelection(index: number) {
    this.selectedOption = this.options[index];
  }

}
