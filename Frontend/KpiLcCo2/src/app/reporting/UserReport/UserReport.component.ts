import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { reportModel } from 'src/app/shared/models/report.model';
import { CriteriaControlService } from 'src/app/shared/Services/criteria-control.service';
import { CriteriaService } from 'src/app/shared/Services/criteria.service';
import { ReportService } from 'src/app/shared/Services/report.service';
import { CriteriaBase } from 'src/app/shared/Util/criteria-base';
import { getFromStorage } from 'src/app/shared/Util/storage';

@Component({
  selector: 'User-report',
  templateUrl: './UserReport.component.html',
  styleUrls: ['./UserReport.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserReportComponent implements OnInit {
  user = getFromStorage("user");
  criteriaShown:boolean = true;
  criterias: CriteriaBase<any>[];
  report: reportModel;
  displayedReport: reportModel;
  parameters: any [];
  language: string = "en-us";
  form: FormGroup;
  height: string = '80.2vh';

  constructor(private cs: CriteriaService
    , private ccs: CriteriaControlService
    , private rs: ReportService
    , private route: ActivatedRoute) {

      this.form = new FormGroup({});
      const userdata= getFromStorage('userwer');
      this.rs!.getReport(this.route.snapshot.paramMap.get('id'), userdata.id,"France").subscribe(data => {
        this.report = data;
        if(this.report.subreports.length > 0){
          this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
          this.displayedReport = this.report.subreports[0];
          this.height = '72.8vh';
        } 
        else this.displayedReport = this.report;
        this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a,b) => a.order - b.order));
        this.form = this.ccs.toFormGroup(this.criterias);
        
      });
    
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.getFormValues();
  }

  displayCiteria = () => {
    this.criteriaShown = !this.criteriaShown;
  }

  criteriaValueChanged(event){
    if(this.form.valid) {

      this.getFormValues();
    }
  }

  refresh(event) {
    if(this.form.valid) {
      this.displayedReport = this.report.subreports[event];
      this.getFormValues();
    }
  }

  getFormValues = () => {
    const params = new Array();
    this.criterias.forEach(crit => {
      let val = this.form.controls[crit.key].value;
      val = (Array.isArray(val) && val.includes(-1)) ? '-1' : val;
      params.push({
        criteriaId: crit.id,
        key: crit.key,
        value:((crit.controlType == 'date')? moment(val).format('yyyy-MM-DD') :
               (Array.isArray(val)) ? val.join(',') : val ),
        scheduler: false
      });
    });
    this.cs.saveSearchCriterias(params).subscribe(saved => {
      // if(saved) this.parameters = [
      //   { DateDeb:'2023-06-01',DateFin: '2023-06-02',USER_ID: '12'}
      //   ];
       if(saved) this.parameters = params;
    });
  }

  export(format: string){
    let _url = `${this.report.reportServer}?${this.report.reportPath}`;
    _url += `&uid=${encodeURI(this.user.id)}`;
    _url += `&rid=${encodeURI(this.report.id)}`;
    // this.parameters.forEach(param => {
    //   // let _val: string;
    //   // if(Array.isArray(param.value)) _val = param.value.join(',');
    //   // else _val = param.value;
    //   _url += `&${encodeURI(param.key)}=${encodeURI(param.value)}`;
    // })
    //_url += this.report
    _url += `&rs:ClearSession=true&rs:Format=${format}`;

    window.location.href = _url;
  }





  @ViewChild('reportCard', {read: ElementRef}) divRef: ElementRef;
  isFullscreen = false;

openFullscreen() {
  // Use this.divRef.nativeElement here to request fullscreen
  const elem = this.divRef.nativeElement;

  if(this.isFullscreen){
    this.isFullscreen = false;
    const cancellFullScreen = document.exitFullscreen;
    cancellFullScreen.call(document);
  } else {
    this.isFullscreen = true;
    const requestFullScreen = elem.requestFullscreen || elem.webkitRequestFullScreen 
    || elem.mozRequestFullScreen || elem.msRequestFullScreen;
    requestFullScreen.call(elem);
  }
}

}


