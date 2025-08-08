import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import {Moment} from 'moment';
const moment = _moment;

import { map, startWith } from 'rxjs/operators';
import { autoCompleteModel, reportapi } from '../models/Referential.Model';
import { WeekPipe } from '../Pipes/week.pipe';
import { ReferentialService } from '../Services/referential.service';
import { CriteriaBase, option } from '../Util/criteria-base';
import { LoaderService } from '../Services/loader.service';
import { reportModel } from '../models/report.model';
import { ReportService } from '../Services/report.service';
import { getFromStorage, removeFromStorage, saveToStorage } from '../Util/storage';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit,OnDestroy {
  @Input() criteria: CriteriaBase<string>;
  @Input() form: FormGroup;
  @Output() criteriaValueChange = new EventEmitter<CriteriaBase<string>>();
 filteredOptions: option[] = [];
  filteredOptions1: option[] = [];
  selectedOptions: option[] = [];
  mySubscription;
  setparam:boolean=false;
  report: reportModel;
  countrycode;
  autoComplete: autoCompleteModel;
  public bankMultiFilterCtrl: FormControl = new FormControl();
  @ViewChild('allSelected') public allSelected: MatOption;
  month: string;
  callreportapi:reportapi;

  constructor(private route: ActivatedRoute,private router: Router,private rs: ReferentialService,private rs1: ReportService, private pipe: WeekPipe,private loaderService: LoaderService) { 


    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         // Trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         removeFromStorage('brand'); 
         removeFromStorage('countrycode'); 
         removeFromStorage('majorcustomer'); 
         removeFromStorage('chargingtype'); 
      }
    }); 
  }
 
  protected filterBanksMulti() {
    //get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) return;
     else search = search.toLowerCase();
    this._filter(search);
  }
  toggleAllSelecti= (event) => {
  
    this.ngOnInit();
   

  }

 
  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      console.log('routeParams', routeParams.id);
    
      const userdata= getFromStorage('userwer');
      this.loaderService.addRequest(this.rs1!.getReport(routeParams.id, userdata.id,null,null)).subscribe(data => {
      //this.loaderService.addRequest(this.rs!.getReport(routeParams.id)).subscribe(data => {
    this.report = data;
   if (data.reportPath.indexOf("CATLCR")!== -1)
   {
        this.setparam=true; 
   }
   else
   {
    this.setparam=false; 
   }
  
  });
  });
    // listen for search field value changes
    this.bankMultiFilterCtrl.valueChanges
      .subscribe(() => {
        this.filterBanksMulti();
      });
      if(this.criteria){
        const userdata= getFromStorage('userwer');
        const countrycode=getFromStorage('countrycode');
        const majorcustomer=getFromStorage('majorcustomer');
        const brand=getFromStorage('brand');

        const chargingtype=getFromStorage('chargingtype');

        this.autoComplete = { Id: this.criteria.referential, Skip: 0, Take: 1000, Predicate:'',UserId:userdata.id,reportId:this.criteria.Report_ID,CountryCode:countrycode,majorCustomer:majorcustomer,brand:brand,chargingType:chargingtype};
        this.filteredOptions = this.criteria.options;
        this.filteredOptions1=this.criteria.multiple;
       
      }
        
  }

  ngOnDestroy() {
   
      // your logic to clean up session
    }
    @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
      console.log("Processing beforeunload...");
      //  if (!localStorage.getItem('foo')) { 
      //   localStorage.setItem('foo', 'no reload') 
      //   location.reload() 
      // } else {
      //   localStorage.removeItem('foo') 
      // }
       
      // Do more processing...
      event.returnValue = false;
  }
  toggleAllSelectio(){

    this.ngOnInit();
  }

  public _filter(value: string) {
    debugger
    let options: option[];
    this.autoComplete.Predicate = value;
    if(value==null||value=="" ||value==" "||value==undefined)
    {
      //this.ngOnInit();
    }
    this.rs.getOptions(this.autoComplete).subscribe((data: option[]) => {
      this.filteredOptions = data;
      this.selectedOptions.forEach(option => {
        if(!this.filteredOptions.find(s => s.value == option.value)) {
          this.filteredOptions.splice(0, 0, option);
        }
      });
        if (this.allSelected.selected) {
    this.form.controls[this.criteria.key].patchValue([...this.filteredOptions.map(item => item.value), -1]);
    this.selectedOptions = this.filteredOptions;
  }
    })
  }

  getError = (field) => {
    return "";
}

  valuechanged = (event) => {
   debugger
    this.criteria.value = (Array.isArray(event.value) && event.value.includes(-1)) ? '-1' : event.value;
    if(this.criteria.label.toLowerCase()=="country" || this.criteria.label.toLowerCase()=="company")
    {
     this.criteria.countrycode=this.criteria.value;
     saveToStorage("countrycode",  this.criteria.countrycode);
    }
    if(this.criteria.label.toLowerCase()=="majorcustomer" || this.criteria.label.toLowerCase()=="major customer")
    {
     this.criteria.majorcustomer=this.criteria.value;
     saveToStorage("majorcustomer",  this.criteria.majorcustomer);
    }
    if(this.criteria.label.toLowerCase()=="brand")
    {
     this.criteria.brand=this.criteria.value;
     saveToStorage("brand",  this.criteria.brand);
     this.criteria.Customer=this.criteria.value;
     saveToStorage("brand",  this.criteria.Customer);
    }
    if(this.criteria.label.toLowerCase()=="charging type")
    {
     this.criteria.chargingtype=this.criteria.value;
     saveToStorage("chargingtype",  this.criteria.chargingtype);
    }
    this.criteriaValueChange.emit(this.criteria);
   

}


dateChanged(event: MatDatepickerInputEvent<Date>) {
  if(this.criteria.controlType == "week"){
    this.criteria.value = this.pipe.transform(event.value);
    this.form.controls[this.criteria.key].setValue(this.criteria.value);
  } else {
    this.criteria.value =event.value.toDateString();
  }
  if(this.criteria.Report_ID=="97a0e416-793d-45f5-a9ed-72122cd007e8")
  {
    const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    this.criteria.value = event.value.toLocaleDateString("en-GB");
  }
  this.criteriaValueChange.emit(this.criteria);
}



togglePerOne(all:any){ 
  debugger
  if (this.allSelected.selected) {  
   this.allSelected.deselect();
   return false;
}
//  if(this.form.controls[this.criteria.key].value.length==this.filteredOptions.length)
//    this.allSelected.select();

   this.selectedOptions = [];
   let _value = this.form.controls[this.criteria.key].value;
   if(Array.isArray(_value))
     if(!_value.includes(-1)) {
      _value.forEach(value => {
         if(!this.selectedOptions.includes(this.filteredOptions.find(s => s.value == value)))
           this.selectedOptions.push(this.filteredOptions.find(s => s.value == value));
       })
     }
  this.criteria.value = (Array.isArray(_value) && _value.includes(-1)) ? '-1' : _value;
  return false;
}

toggleAllSelection() {
  debugger
  if(this.allSelected)
  if (this.allSelected.selected) {
    this.form.controls[this.criteria.key].patchValue([...this.filteredOptions.map(item => item.value), -1]);
  } else {
    this.form.controls[this.criteria.key].patchValue([]);
    this.selectedOptions = [];
  }

  let _value = this.form.controls[this.criteria.key].value.filter(item => item !== -1);
  this.selectedOptions = [];
  if(Array.isArray(_value))
    if(!_value.includes(-1)) {
      _value.forEach(value => {
        if(!this.selectedOptions.includes(this.filteredOptions.find(s => s.value == value)))
          this.selectedOptions.push(this.filteredOptions.find(s => s.value == value));
      })
    }
    if(this.setparam)
    {
      this.criteria.value = _value;
    }
    else
    {
  this.criteria.value = (Array.isArray(_value) && _value.includes(-1)) ? '-1' : _value;
    }
}

chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>, ctrl: string) {
  const ctrlValue = moment(normalizedMonth).format("YYYY-MM-DD");
  this.form.controls[this.criteria.key].setValue(ctrlValue);
  this.month = moment(normalizedMonth).format('MMM-YYYY');
  this.criteria.value = ctrlValue;
  this.criteriaValueChange.emit(this.criteria);
  datepicker.close();
}

openedChange(opened: boolean) {  
  if(!opened) {
    this.criteriaValueChange.emit(this.criteria);
  
  }  
}

}
