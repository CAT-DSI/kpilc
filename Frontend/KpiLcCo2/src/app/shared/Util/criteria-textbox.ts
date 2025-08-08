import { CriteriaBase, option } from './criteria-base';

export class CriteriaTextbox extends CriteriaBase<string> {
  override controlType = 'textbox';
}