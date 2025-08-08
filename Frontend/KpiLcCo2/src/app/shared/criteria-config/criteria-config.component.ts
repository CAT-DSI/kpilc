import { controlTypes } from './../models/criteria.model';
import { FormGroup } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { criteriaModel } from '../models/criteria.model';
import { CriteriaService } from '../Services/criteria.service';
import { referentialModel } from '../models/Referential.Model';

@Component({
  selector: 'app-criteria-config',
  templateUrl: './criteria-config.component.html',
  styleUrls: ['./criteria-config.component.scss']
})
export class CriteriaConfigComponent implements OnInit {
  @Input() form:FormGroup;
  @ViewChildren('sourceList') sources: QueryList<ElementRef>;
  @ViewChildren('Type') types: QueryList<ElementRef>;
  referentials: referentialModel[];
  _controlTypes = controlTypes;
  constructor(private criteriaService: CriteriaService) { }

  ngOnInit(): void {
    this.criteriaService!.getCriteriaReferentials().subscribe(data => {
      this.referentials = data;
    },(jsonData) => { }, () => { }); 
  }
  
  //attributeDisplay = (attr1, attr2) => {
  //    if(attr1 == attr2){
  //      return this._controlTypes.filter(s => s.value == attr2)[0].text;
  //  }
  //  return null;
  //}
}
