import { HttpClient} from '@angular/common/http';
import {  Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SimpleChanges } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { reportModel } from '../models/report.model';



@Component({
  selector: 'app-report-viewer-kpilc',
  templateUrl: './report-viewer-kpilc.component.html',
  styleUrls: ['./report-viewer-kpilc.component.scss']
})
export class ReportViewerKpilcComponent implements OnInit, OnChanges {
  content: any;
  @Input() reportserver: string;
  @Input() reporturl: string;
  @Input() width: string;
  @Input() height: string;
  @Input() parameters: any;
  @Input() report: reportModel;
  @Input() language: string;
  url:SafeResourceUrl;
  @ViewChild('form') formy: ElementRef;
  config = { attributes: true, childList: true, subtree: true };


  constructor( private router: Router
    , private _httpClient: HttpClient
    , private serializer: UrlSerializer
    , private dom:DomSanitizer
    , private ngxService: NgxUiLoaderService) { }


  ngOnInit(): void {
  }

  refresh = () => {
    this.formy.nativeElement.submit();
    this.ngxService.start();
    this.parameters;
  }

  observer = new MutationObserver(this.refresh);

  ngOnChanges(changes: SimpleChanges) {
   // this.url = `${"http://frgnbbir01.cat.groupecat.com/Reportserver"}/Pages/ReportViewer.aspx?${"/CATLCR/Orders"}`;
   this.url = `${this.reportserver}/Pages/ReportViewer.aspx?${this.reporturl}`; 
   if(this.formy)
    this.observer.observe(this.formy.nativeElement, this.config);
  }

  loaded = () => {
    this.ngxService.stop();
  }

  ngOnDestroy() {
    if(this.observer) { 
        this.observer.disconnect(); 
        this.observer = undefined!;
    }
  }
  
}
