import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CriteriaBase } from '../Util/criteria-base';

@Injectable({
  providedIn: 'root'
})
export class CriteriaControlService {

  constructor(private fb: FormBuilder) { }

  toFormGroup(criterias: CriteriaBase<string>[] ) {
    const group: any = {};

    criterias.forEach(crit => {
      group[crit.key] = crit.required ? new FormControl(crit.value || '', Validators.required)
                                              : new FormControl(crit.value || '');
    });
    return new FormGroup(group);
  }
}
