import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


/*
  search box,
  search is triggered by either pressing enter in the input box or clicking search icon
 */
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() searchText="";
  @Output() searchTrigger = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /*
    trigger search, and emit to parent component
   */
  onSearchTrigger() {
    this.searchTrigger.emit(this.searchText);
  }

}
