import { CriteriaBase, option } from './criteria-base';

export class CriteriaDropdown extends CriteriaBase<string> {
  override controlType = 'dropdown';
}
