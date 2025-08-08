import { CriteriaBase, option } from './criteria-base';

export class CriteriaMonth extends CriteriaBase<string> {
  override controlType = 'month';
}