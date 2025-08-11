import { Component, OnInit, Input } from '@angular/core';

import { TranslateText, TranslateCategory } from 'src/app/shared/models/i18n';


/*
  sub header component, just below header with breadcrumbs and different content
 */
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  // the assumption is that breadcurmns are not links
  @Input()   breadcrumbs: TranslateText[]  = [
    { key: 'nav.configuration', defaultText: 'Configuration' },
    { key: 'nav.wmiBrand', defaultText: 'WMI Brand' }
  ];
  @Input() hasSessionFilter = false;

  constructor() { }

  ngOnInit() {
  }

}
