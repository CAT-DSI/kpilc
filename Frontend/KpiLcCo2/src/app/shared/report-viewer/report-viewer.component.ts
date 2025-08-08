import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, UrlSerializer } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SimpleChanges } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { reportModel } from '../models/report.model';
import { filter } from 'rxjs/operators';
import { Console } from 'console';
import { FormGroup } from '@angular/forms';
import { LoaderService } from '../Services/loader.service';
import { Observable } from 'rxjs';
import { truncateSync } from 'fs';



@Component({
  selector: 'app-report-viewer',
  templateUrl: './report-viewer.component.html',
  styleUrls: ['./report-viewer.component.scss']
})
export class ReportViewerComponent implements OnInit, OnChanges, OnDestroy {
  content: any;
  @ViewChild('iframe', { static: true }) iframe: HTMLIFrameElement;
  @Input() reportserver: string;
  element: HTMLImageElement;
  @Input() reporturl: string;
  @Input() width: string;
  @Input() height: string;
  @Input() parameters: any;
  @Input() report: reportModel;
  @Input() language: string;
  form: FormGroup;
  url: SafeResourceUrl;
  mySubscription;
  isPresent: boolean = false;
  @ViewChild('form') formy: ElementRef;
  config = { attributes: true, childList: true, subtree: true };
  routeSubscription: any;
  isLoading: boolean;
  



  constructor(private router: Router
    , private _httpClient: HttpClient
    , private serializer: UrlSerializer
    , private dom: DomSanitizer
    , private loaderService: LoaderService
    , private activeRoute: ActivatedRoute
    , private ngxService: NgxUiLoaderService) {
     
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
           // Trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
        }
      }); 

  }


  adduser(): void {
    this.url = `${this.reportserver}/Pages/ReportViewer.aspx?${this.reporturl}`;
    if (this.formy && this.isPresent) {
      this.observer.observe(this.formy.nativeElement, this.config);
    }
    this.isPresent = true;
  }


  ngOnInit(): void {


  }

  ngAfterViewInit() {
   

  }

  refresh = () => {
    this.isLoading = true;
    this.formy.nativeElement.submit();
    // this.ngxService.start();
    this.parameters;
  }

  observer = new MutationObserver(this.refresh);


  ngOnChanges(changes: SimpleChanges) {
   
    this.url = `${this.reportserver}/Pages/ReportViewer.aspx?${this.reporturl}`;
    // if (this.iframe)
    //   this.iframe.src = `${this.reportserver}/Pages/ReportViewer.aspx?${this.reporturl}`;

    if (this.formy && this.isPresent) {
      // this.isLoading = true;
      this.observer.observe(this.formy.nativeElement, this.config);
      //this.formy=undefined;
    }
    this.isPresent = true;


  }


  //this.loaderService.completeRequest();


  loaded = () => {
    // this.isPresent=flse;
    // //this.ngxService.stop();
    // this.form.reset();
    this.isLoading = false;

  }
  onSubmit() {

  }

  ngOnDestroy() {


    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined!;
      this.parameters = null;
      //this.loaderService.completeRequest();

    }


  }

}

