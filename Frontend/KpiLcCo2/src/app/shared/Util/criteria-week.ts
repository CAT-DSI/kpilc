import { CriteriaBase, option } from './criteria-base';

export class CriteriaWeek extends CriteriaBase<string> {
  override controlType = 'week';
}