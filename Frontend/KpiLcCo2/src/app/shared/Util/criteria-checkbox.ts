import { CriteriaBase } from './criteria-base';

export class CriteriaCheckbox extends CriteriaBase<string> {
  override controlType = 'checkbox';
}