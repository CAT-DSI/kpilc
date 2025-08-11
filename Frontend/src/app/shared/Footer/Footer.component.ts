import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


/*
  search box,
  search is triggered by either pressing enter in the input box or clicking search icon
 */
@Component({
  selector: 'Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss']
})
export class FooterBoxComponent implements OnInit {

  @Input() updateinfo="";
  @Output() searchTrigger = new EventEmitter<string>();

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  /*
    trigger search, and emit to parent component
   */
  onSearchTrigger() {
   
  }

}
