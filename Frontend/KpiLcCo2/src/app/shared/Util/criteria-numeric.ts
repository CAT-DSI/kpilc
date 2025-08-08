import { CriteriaBase, option } from './criteria-base';

export class CriteriaNumeric extends CriteriaBase<string> {
  override controlType = 'number';
}