import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


/*
  custom checkbox component, which can be used with reactive forms
 */
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit {

  private innerValue = false;

  @Input() disabled ? = false;
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this.innerValue;
  }

  set value(val) {
    this.innerValue = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() { }

  ngOnInit() {
  }


  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(val) {
    this.innerValue = val;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
