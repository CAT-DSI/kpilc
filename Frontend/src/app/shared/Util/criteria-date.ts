import { CriteriaBase, option } from './criteria-base';

export class CriteriaDate extends CriteriaBase<string> {
  override controlType = 'date';
}