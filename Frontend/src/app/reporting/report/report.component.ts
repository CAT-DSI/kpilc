import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { BrandModelParams, ReportDelayPerMilkrun, ReportLog, ReportUserMrNumbers, ReportUserParams, ReportUserProduct, ReportUserProducts, ReportUserStatus, UserAction, UserCountriesModel, UserMarquesModel, UserRegimesModel, reportModel } from 'src/app/shared/models/report.model';
import { CriteriaControlService } from 'src/app/shared/Services/criteria-control.service';
import { CriteriaService } from 'src/app/shared/Services/criteria.service';
import { ReportService } from 'src/app/shared/Services/report.service';
import { CriteriaBase } from 'src/app/shared/Util/criteria-base';
import { getFromStorage } from 'src/app/shared/Util/storage';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { removeFromStorage, saveToStorage } from 'src/app/shared/Util/storage';
import { CriteriaComponent } from 'src/app/shared/criteria/criteria.component';
import { UsersService } from 'src/app/shared/Services/users.service';
import { ExcelService } from 'src/app/shared/Services/excel.service';
import * as XLSX from 'xlsx';
import { Console } from 'console';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';
import { ApexChart, ApexPlotOptions } from 'ng-apexcharts';
import { Chart } from 'chart.js/auto';
import { User } from 'src/app/shared/models/auth.model';
import { BasicParams, PagingConfig } from 'src/app/shared/models/app';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit {
  user = getFromStorage("userwer");
  criteriaShown: boolean = true;
  criterias: CriteriaBase<any>[];
  criterias1: CriteriaBase<any>[];
  report: reportModel;
  displayedReport: reportModel;
  parameters: any[];
  userid: any[];
  reportid: any[];
  isocodelanguage: any[];
  categoryid: any[];
  language: string = "en-us";
  form: FormGroup;
  height: string = '80.2vh';
  setparam: boolean = false;
  versionInfo: string;
  updateinfo: string;
  kpilcdate: string;
  RecordId: string;
  CategoryId: string;
  excel: string;
  callsaveparamsapi: boolean;
  company: string;
  majorcustomer: String;
  SetProdcut: boolean = false;
  ReportUserProduct: ReportUserProduct = {} as ReportUserProduct;
  callreportforcountry: boolean = false;
  @Input() criteria: CriteriaBase<string>;
  data: any;
  datakey: any[] = [];
  datavalue1: any[] = [];
  datavalue2: any[] = [];
  datavalue3: any[] = [];
  datavalue4: any[] = [];
  datavalue5: any[] = [];
  datavalue6: any[] = [];

  public showChart: boolean = false;
  public showGrid: boolean = false;
  public hideParams: boolean = false;
  public showParams: boolean = false;
  public showAppReportViewer: boolean = true;
  public country: string | any;
  public showSummry: boolean = false;

  tableRows: User[];
  selectedSession: User[]=[];  
  selection:SelectionType;
  search = '';
  pagingConfig: PagingConfig = {} as PagingConfig;
  tableColumns = [];
  colMinWidth = 180;
  colHeaderTranslateKeyPrefix = 'userColumns';
  totalRows: number = 9;
  @Input() hasActionColedit = true;
  basicParams: BasicParams = {};
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  pagination: number = 0;

  constructor(private cs: CriteriaService
    , private ccs: CriteriaControlService
    , private usersService: UsersService
    , private rs: ReportService,
    private el: ElementRef,
    private toastr: ToastrService,
    private excelService: ExcelService
    , public translate: TranslateService,
    public dateAdapter: DateAdapter<Date>,
    private route: ActivatedRoute,
    private loaderService: LoaderService) {

    this.form = new FormGroup({});
    this.route.params.subscribe(routeParams => {
      if (routeParams.id.toUpperCase() == "0971CDB6-03AA-4806-B7DD-7FEDF5E30EC8") {
        this.showParams = true;
      } else { this.showParams = false }

      const userdata = getFromStorage('userwer');

      this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, null, null)).subscribe(data => {
        //this.loaderService.addRequest(this.rs!.getReport(routeParams.id)).subscribe(data => {
        removeFromStorage("userdata");
        this.report = data;
        this.RecordId = data.id;
        if (data.reportPath.toUpperCase().indexOf("CATLCR") !== -1) {
          this.setparam = true;
        }
        else {
          this.setparam = false;
        }
        this.CategoryId = data.categoryID;
        if (this.report.subreports.length > 0) {
          this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
          this.displayedReport = this.report.subreports[0];
          this.height = '72.8vh';
        }
        else this.displayedReport = this.report;
        this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));
        this.criterias1 = this.report.criterias.sort((a, b) => a.order - b.order);
        this.form = this.ccs.toFormGroup(this.criterias);

      });
    });
    this.loaderService.addRequest(this.usersService.getVersion())
      .subscribe(
        (data: any) => {

          //this.versionInfo=data.;
          this.updateinfo = data.date;
          this.kpilcdate = data.kpilcRefreshDate;
          console.log("dats " + data);

        },
        err => {
          if (err.status == "200") {
            //this.updateinfo=err.error.text;
          }
        });


    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.tableRows.filter = filterValue;
  }

  ngOnInit(): void {
    this.tableColumns = [
      { name: 'Category Name', prop: 'categoryName', sortable: false },
      { name: 'Country', prop: 'country', sortable: false },
      { name: 'Brand', prop: 'brand', sortable: false },
      { name: 'Product', prop: 'product', sortable: false },
    ];
    this.tableColumns = [...this.tableColumns];
    const user = getFromStorage("user");
    console.log('user', user.userId);
    this.showMyGrid();
  }

  showMyGrid(resetParams = false) {
    if (resetParams) {
      this.basicParams = {};
    }
    const countryValue = this.country;
    console.log('Value:', countryValue)

    this.loaderService.addRequest(this.usersService.getAllReportParamsByCountryReport(countryValue))
      .subscribe((data: any) => {
        this.tableRows = data;
        this.totalRows = data.length;
      });
    this.showGrid = true;
    this.hideParams = true;
  }

  hideMyGrid() {
    this.showGrid = false;
    this.hideParams = false;
  }
  onPageSort(newParams: BasicParams) {
    this.basicParams = { ...this.basicParams, ...newParams };
    this.showMyGrid();
  }

  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
  }
  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.showMyGrid();
  }
  showchartdata(datakey: any, datavalue1: any, datavalue2: any, datavalue3: any, datavalue4: any,
    datavalue5: any, datavalue6: any) {
    console.log(datakey);
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: datakey,
        datasets: [{
          data: datavalue6,
          label: 'TotalPcs',
          borderWidth: 1,
        },
        {
          label: 'Late parcel-not because CAT',
          data: datavalue1
        }, {
          label: 'Late parcel-because CAT',
          data: datavalue2
        }, {
          label: 'To justify',
          data: datavalue3
        },
        {
          label: 'Missing',
          data: datavalue5,
          type: 'line',
          // backgroundColor: 'red', 
          //  borderColor: '#000',
          //  hoverBorderColor: 'green'
        },
        {
          label: 'Undelivered',
          data: datavalue4,
          // backgroundColor: '#00518f',           
          // borderColor: '#000'

        },
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              callback: (value: any) => {
                if (typeof value === 'number') {
                  return value.toFixed(2)
                }
                return value
              }
              //beginAtZero: true                
            }

          }
        }
      }
    })
    this.datakey = [];
    this.datavalue1 = [];
    this.datavalue2 = [];
    this.datavalue3 = [];
    this.datavalue4 = [];
    this.datavalue5 = [];
    this.datavalue6 = [];

  }

  public readonly chart: ApexChart = {
    type: 'bar',
    height: 500,
    toolbar: {
      show: false,
    },
  };

  public readonly plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
    },
  };

  displayCiteria = () => {
    this.criteriaShown = !this.criteriaShown;
  }

  criteriaValueChanged(event) {
    if (this.form.valid) {

      this.getFormValues();
    }

  }
  countrychange(event) {
    debugger
    // if(event.value == '-1'){
    // event.value = event.options.map(item => item.value);
    // }

    //event.value = event.value.filter(item => item !== -1);
    //this.criterias=event;
    if (event.key == "Pays" && event.value != null) {
      //this.form = new FormGroup({});
      this.country = event.value;
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);

        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          this.company = event.value;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;

          if (data.name == "SixKPI") {

            var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "MAJORCUSTOMER");
            var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "MAJORCUSTOMER");

            var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "BRAND");
            var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "BRAND");

            this.criterias[index].options = this.report.criterias[reportindex].options;
            this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));
          }

          else {
            if (data.name == "SevenKPIAllProduct" || data.name == "TwoKPINewDailyPerformanceDelayDeliveryDate") {
              var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "BRAND");
              var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "BRAND");
              this.criterias[index].options = this.report.criterias[reportindex].options;
              this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));
            }
            else {
              var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "PF");
              var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "PF");
              this.criterias[index].options = this.report.criterias[reportindex].options;
              this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));
            }
          }

        });
      });
    }
    else if (event.key.toLowerCase() == "country" && event.value != null) {
      debugger
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);
        this.company = event.value;
        if (event.value === "-1") {
          event.value = event.options.map(x => x.value);
          this.company = event.value;
        }
        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;

          var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "COUNTRY");
          var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "COUNTRY");
          this.criterias[index].options = this.report.criterias[reportindex].options;
          this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));

        });
      });
    }
    else if (event.key.toLowerCase() == "arrivalcountry" && event.value != null) {
      //this.form = new FormGroup({});
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);
        this.company = event.value;

        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, this.company, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;

          var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "COUNTRY");
          var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "COUNTRY");
          this.criterias[index].options = this.report.criterias[reportindex].options;
          this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));

        });
      });
    }
    else if (event.key == "Company" && event.value != null) {
      //this.form = new FormGroup({});
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);
        this.company = event.value;
        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;

          var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "Company");
          var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "Company");
          this.criterias[index].options = this.report.criterias[reportindex].options;
          this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));

        });
      });
    }

    else if (event.key.toLowerCase() == "majorcustomer" && event.value != null) {
      //this.form = new FormGroup({});
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);

        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, this.company, null, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          this.majorcustomer = event.value;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;



          var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "MAJORCUSTOMER");
          var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "MAJORCUSTOMER");



          this.criterias[index].options = this.report.criterias[reportindex].options;
          this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));

        });
      });
    }
    else if (event.key.toLowerCase() == "pf" && event.value != null) {
      //this.form = new FormGroup({});
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);

        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, this.company, null, null, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;
          var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "PF");
          var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "PF");
          this.criterias[index].options = this.report.criterias[reportindex].options;
          this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));

        });
      });
    }
    else if (event.key == "ChargingType" && event.value != null) {
      //this.form = new FormGroup({});

      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);

        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, this.company, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;

          var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "Company");
          var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "Company");
          this.criterias[index].options = this.report.criterias[reportindex].options;
          this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));

        });
      });
    }
    else if (event.key.toLowerCase() == "product" && event.value != null) {
      //this.form = new FormGroup({});
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);

        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, this.company, null, this.majorcustomer, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;
        });
      });
    }

    else if ((event.key.toLowerCase() == "brand") && event.value != null) {
      //this.form = new FormGroup({});
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);

        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, this.company, null, this.majorcustomer, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;
          var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "BRAND");
          var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "name", "BRAND");
          this.criterias[index].options = this.report.criterias[reportindex].options;
          this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));

        });
      });
    }

    else if ((event.key.toLowerCase() == "customer") && event.value != null) {
      //this.form = new FormGroup({});
      this.route.params.subscribe(routeParams => {
        console.log('routeParams', routeParams.id);

        const userdata = getFromStorage('userwer');
        this.loaderService.addRequest(this.rs!.getReport(routeParams.id, userdata.id, this.company, null, this.majorcustomer, event.value)).subscribe(data => {
          removeFromStorage("userdata");
          this.report = data;
          if (this.report.subreports.length > 0) {
            this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
            this.displayedReport = this.report.subreports[0];
            this.height = '72.8vh';
          }
          else this.displayedReport = this.report;
          var index = this.functiontofindIndexByKeyValue(this.criterias, "key", "Customer");
          var reportindex = this.functiontofindIndexByKeyValue(this.report.criterias, "label", "Brand");
          this.criterias[index].options = this.report.criterias[reportindex].options;

          this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));

          //this.form = this.ccs.toFormGroup(this.criterias);
        });

      });
    }

  }




  functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) {

    for (var i = 0; i < arraytosearch.length; i++) {

      if (arraytosearch[i][key] == valuetosearch) {
        return i;
      }
    }
    return null;
  }



  refresh(event) {
    if (this.form.valid) {
      this.displayedReport = this.report.subreports[event];
      this.getFormValues();
    }
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    window.addEventListener('beforeunload', function (event) {
      event.stopImmediatePropagation();
    });
    console.log("Processing beforeunload...");
    //  if (!localStorage.getItem('foo')) {
    //   localStorage.setItem('foo', 'no reload')
    //   location.reload()
    // } else {
    //   localStorage.removeItem('foo')
    // }
    // removeFromStorage('userwer');    
    // Do more processing...
    event.returnValue = false;
  }

  getFormValues = () => {
    this.callsaveparamsapi = true;
    const userdata = getFromStorage('userwer');
    let params = new Array();
    this.criterias.forEach(crit => {
      let val = this.form.controls[crit.key].value;
      debugger
      if ((crit.key == "MAJORCUSTOMER") && (this.criterias[0].Report_ID.toUpperCase() == "52B9DCDA-EE55-457A-BD94-51BA3FF616AF")) {
        val = val == "" ? "_" : val;
      }
      if ((this.criterias[0].Report_ID.toUpperCase() == "C5D6042C-26C0-442D-90DE-E0A8D939B82E") && (crit.key == "COUNTRY" || crit.key == "ARRIVALCOUNTRY")) {
        debugger

        let countries = val;//.split(",");
        let modifyarray;
        let modifiedCountry;
        if (crit.key == "COUNTRY" && val != "") {
          modifyarray = countries.map(item => `D_${item}`);
          val = modifyarray.join(",");
        } else if (crit.key == "ARRIVALCOUNTRY" && val != "") {
          modifiedCountry = countries.map(item => `A_${item}`);
          modifiedCountry = modifiedCountry.join(",");
          val = params[2].value + ',' + modifiedCountry;
          params[2].value = val;
        }

      }

      if (this.RecordId.toUpperCase() == "E27AE91D-2442-4379-A870-707676385B98" && crit.key == "WEEK") {
        debugger
        let weeks = val.split("/");
        let weekno = weeks[1];
        val = weekno.substring(1);
      }

      if (this.setparam) {
        val = (Array.isArray(val) && val.includes(-1)) ? val : val;

      }
      else {
        val = (Array.isArray(val) && val.includes(-1)) ? "-1" : val;
      }
      if (crit.key.toLowerCase() == "product") {
        this.SetProdcut = true;
      }
      if (this.criterias[0].Report_ID == "97a0e416-793d-45f5-a9ed-72122cd007e8" || this.criterias[0].Report_ID.toUpperCase() == "FD5AF9F1-5133-4AE4-8F42-D4E01C872746") {
        params.push({
          criteriaId: crit.id,
          key: crit.key,
          UserId: userdata.id,
          value: ((crit.controlType == 'date') ? moment(val).format('DD/MM/yyyy') :
            (Array.isArray(val)) ? val.join(',') : val),

          scheduler: false

        });
      }
      else if (this.criterias[0].Report_ID.toUpperCase() == "BDB25AA8-98CE-4B4B-A028-02554A8BDC13") {
        params.push({
          criteriaId: crit.id,
          key: crit.key,
          UserId: userdata.id,
          value: ((crit.controlType == 'date') ? moment(val).format('yyyy/MM/DD') :
            (Array.isArray(val)) ? val.join(',') : val),

          scheduler: false

        });
      }


      else {
        params.push({
          criteriaId: crit.id,
          key: crit.key,
          UserId: userdata.id,
          value: ((crit.controlType == 'date') ? moment(val).format('yyyy-MM-DD') :
            (Array.isArray(val)) ? val.join(',') : val),

          scheduler: false

        });
      }

      removeFromStorage("userdata");

    });
    if (this.setparam) {
      let result = this.criterias1.map(a => a.name);
      this.userid = result.filter(result => result.toLowerCase().includes('user'));
      this.reportid = result.filter(result => result.toLowerCase().includes('report'));
      this.isocodelanguage = result.filter(result => result.toLowerCase().includes('codelang') || result.toLowerCase().includes('IsoLanguageCode'));
      this.categoryid = result.filter(result => result.toLowerCase().includes('categoryid') || result.toLowerCase().includes('category_id'));
      if (this.userid.length > 0 && this.userid != undefined) {
        params.push({
          // criteriaId: crit.id,
          key: this.userid[0],
          value: userdata.id,
          scheduler: false

        });
      }
      if (this.reportid.length > 0 && this.reportid != undefined) {
        params.push({
          // criteriaId: crit.id,
          key: this.reportid[0],
          value: this.RecordId,
          scheduler: false

        });
      }
      if (this.categoryid.length > 0 && this.categoryid != undefined) {
        params.push({
          // criteriaId: crit.id,
          key: this.categoryid[0],
          value: this.CategoryId,
          scheduler: false

        });
      }
      if (this.isocodelanguage.length > 0 && this.isocodelanguage != undefined) {
        params.push({
          // criteriaId: crit.id,
          key: this.isocodelanguage[0],
          value: "en-US",
          scheduler: false

        });
      }
      else if (this.criterias[0].Report_ID.toUpperCase() != "BD8FAA20-9B9A-44CD-A5EB-2549D0D8E680") {
        params.push({
          // criteriaId: crit.id,
          key: "IsoLanguageCode",
          value: "en-US",
          scheduler: false

        });

      }

      if (this.SetProdcut) {


        const data: ReportUserProducts = {
          ..._.omit(this.RecordId, 'profileName')
        };
        data.ReportId = this.RecordId;
        data.Product = params.find(o => o.key.toLowerCase() === 'product').value.split(",");
        data.Product = data.Product.filter(function (item) {
          return item !== '-1'
        })
        data.UserId = userdata.id;
        this.cs.saveproductlist(data)
          .subscribe(response => {
            console.log(response);

          });


      }
      if (this.RecordId.toUpperCase() == "79838B19-E713-4D8A-9C3B-0413607D6D6E") {
        let d1 = params[0].value;
        let d2 = params[1].value;
        let diff = moment(d2).diff(d1, 'days');
        if (diff > 7) {

          this.toastr.warning("[END -START] must be less than 7 days", 'Message', {
            timeOut: 30000, closeButton: true,
          });
          return null;


        }
        else {

          const data: ReportUserMrNumbers = {
            ..._.omit(this.RecordId, 'profileName')
          };
          data.ReportId = this.RecordId;
          data.UserId = userdata.id;
          data.MrNumber = params.find(o => o.key.toLowerCase() === 'mrnumber').value.split(",");
          data.MrNumber = data.MrNumber.filter(function (item) {
            return item !== '-1'
          })
          this.cs.saveMrnumberlist(data)
            .subscribe(response => {
              console.log(response);

            });
        }
      }
      else if (this.RecordId.toUpperCase() == "E27AE91D-2442-4379-A870-707676385B98" || this.RecordId.toUpperCase() == "28B06757-9807-4F92-8196-F5542D773A7C") {
        const data: ReportUserParams = {
          ..._.omit()
        };
        data.ReportId = this.RecordId;
        data.FieldType = 5;
        data.UserId = userdata.id;
        data.FieldValue = params.find(o => o.key.toLowerCase() === 'regime').value.split(",");
        data.FieldValue = data.FieldValue.filter(function (item) {
          return item !== '-1'
        })
        this.cs.saveregimelist(data)
          .subscribe(response => {
            console.log(response);

          });
      }
      else if (this.RecordId.toUpperCase() == "C5D6042C-26C0-442D-90DE-E0A8D939B82E") {
        debugger
        const data: UserCountriesModel = {
          ..._.omit()
        };
        data.ReportId = this.RecordId;
        data.Type = 7;
        data.UserId = userdata.id;
        data.Countries = params.find(o => o.key.toUpperCase() === 'COUNTRY').value.split(",");
        let modifyarray = data.Countries.map(item => `D_${item}`);
        data.Countries = modifyarray.join(",");
        let arrivalCountry = params.find(o => o.key.toUpperCase() === 'ARRIVALCOUNTRY').value.split(",");
        let modifiedCountry = arrivalCountry.map(item => `A_${item}`);
        modifiedCountry = modifiedCountry.join(",");
        data.Countries = data.Countries + "," + modifiedCountry;
        this.cs.updateUserParamCountries(data)
          .subscribe(response => {

          });

        const regimeData: UserRegimesModel = {
          ..._.omit()
        };
        regimeData.ReportId = this.RecordId;
        regimeData.UserId = userdata.id;
        regimeData.Regime = params.find(o => o.key === 'Regime').value.split(",");
        regimeData.Regime = regimeData.Regime.filter(function (item) {
          return item !== '-1'
        });
        this.cs.updateUserRegimes(regimeData)
          .subscribe(response => {

          });

        const marqueData: UserMarquesModel = {
          ..._.omit()
        };
        marqueData.ReportId = this.RecordId;
        marqueData.UserId = userdata.id;
        marqueData.Marques = params.find(o => o.key === 'Marque').value.split(",");
        marqueData.Marques = marqueData.Marques.filter(function (item) {
          return item !== '-1'
        });
        this.cs.updateUserMarques(marqueData)
          .subscribe(response => {

          });

      }
      else if (this.RecordId.toUpperCase() == "37DD8C67-FB68-449D-AE6C-2ED8C7CEAE03") {

        const data: ReportUserProducts = {
          ..._.omit(this.RecordId, 'profileName')
        };
        data.ReportId = this.RecordId;
        data.Product = params.find(o => o.key.toLowerCase() === 'product').value.split(",");
        data.UserId = userdata.id;
        this.cs.saveproductlist(data)
          .subscribe(response => {
          });
      }
      else if (this.RecordId.toUpperCase() == '4FF875BB-B21A-4C1F-BBEB-C7044E6383EC') {
        const data: ReportUserStatus = {
          ..._.omit(this.RecordId, 'profileName')
        };
        data.ReportId = this.RecordId;
        data.StatusCode = params.find(o => o.key.toLowerCase() === 'status').value.split(",");
        data.UserId = userdata.id;
        this.cs.updateMarqueAndRegime(data)
          .subscribe(response => {

          });
      }

      else if (this.RecordId.toUpperCase() == "814DF722-BE22-4D00-8347-DCFE41433982") {

        console.log('report: ', this.displayedReport);
        if (this.displayedReport.name === 'Home' && this.displayedReport.reportServer == "") {
          this.showChart = true;
          this.showAppReportViewer = false;
          const data: ReportDelayPerMilkrun = {
            ..._.omit()
          };
          data.ReportId = this.RecordId;
          data.Country = params.find(o => o.key === 'Pays').value.split(",");
          data.Start = params.find(o => o.key === 'START').value.split(",");
          data.End = params.find(o => o.key === 'END').value.split(",");

          this.cs.loadDataToGraphe(data.Country, data.Start, data.End, data.ReportId)
            .subscribe(response => {
              this.data = response;
              if (this.data != null) {
                for (let i = 0; i < this.data.length; i++) {
                  this.datakey.push(this.data[i].key);
                  this.datavalue1.push(this.data[i].value1);
                  this.datavalue2.push(this.data[i].value2);
                  this.datavalue3.push(this.data[i].value3);
                  this.datavalue4.push(this.data[i].value4);
                  this.datavalue5.push(this.data[i].value5);
                  this.datavalue6.push(this.data[i].value6);
                }
                this.showchartdata(this.datakey, this.datavalue1, this.datavalue2, this.datavalue3, this.datavalue4,
                  this.datavalue5, this.datavalue6);
              }

            });
        } else {
          this.showChart = false;
          this.showAppReportViewer = true;
        }
      }
      else if (this.RecordId.toUpperCase() == '0971CDB6-03AA-4806-B7DD-7FEDF5E30EC8') {
        if (this.displayedReport.name === 'Home' && this.displayedReport.reportServer == "") {
          this.showSummry = true;
          this.showAppReportViewer = false;
        } else {
          this.showSummry = false;
          this.showAppReportViewer = true;
        }
      }
      else if (this.RecordId.toUpperCase() == "3CEC5B34-7787-4DDE-A326-67BD4C346EF4" || this.RecordId.toUpperCase() == "52B9DCDA-EE55-457A-BD94-51BA3FF616AF") {

        const data: BrandModelParams = {
          ..._.omit(this.RecordId, 'profileName')
        };
        data.ReportId = this.RecordId;
        // data.FieldType=5;
        data.UserId = userdata.id;
        data.Brand = params.find(o => o.key.toLowerCase() === 'brand').value.split(",");
        this.cs.savebrandlist(data)
          .subscribe(response => {
            console.log(response);

          });
      }
    }


    else if (this.RecordId == "bd8faa20-9b9a-44cd-a5eb-2549d0d8e680") {
      params.push({
        // criteriaId: crit.id,
        key: 'User_ID',
        value: userdata.id,
        scheduler: false

      });
    }
    else if (this.RecordId.toUpperCase() == "2ADFC098-DAB0-4684-A5CA-CBEFDAC35695") {
      params.push({
        // criteriaId: crit.id,
        key: "IsoCodeLang",
        value: "en-US",
        scheduler: false

      });
    }
    if (this.RecordId.toUpperCase() == "97A0E416-793D-45F5-A9ED-72122CD007E8") {

      params = params.filter(number => number.key.toLowerCase() !== "pays");

    }
    if (this.RecordId.toUpperCase() == "074E12A2-4438-4047-BDC1-2B712A5F98CA" || this.RecordId.toUpperCase() == "F3EAF070-E018-4FFF-A6CF-8A7964FC9323") {

      params = params.filter(number => number.key.toLowerCase() !== "product");
    }
    if (this.RecordId.toUpperCase() == "C5D6042C-26C0-442D-90DE-E0A8D939B82E") {

      params = params.filter(number => number.key.toLowerCase() !== "arrivalcountry" && number.key.toLowerCase() !== "marque" && number.key.toLowerCase() !== "regime");

    }
    if (this.RecordId.toUpperCase() == "4FF875BB-B21A-4C1F-BBEB-C7044E6383EC") {

      params = params.filter(number => number.key.toLowerCase() !== "status");

    }

    if (this.RecordId.toUpperCase() == "FD5AF9F1-5133-4AE4-8F42-D4E01C872746") {

      params = params.filter(number => number.key.toLowerCase() !== "pays");

    }
    if (this.RecordId.toUpperCase() == "5FCAD7C7-B10D-4EEF-A425-B213E16590F5") {

      params = params.filter(number => number.key.toLowerCase() !== "isolanguagecode" && number.key.toLowerCase() !== "categoryid");

    }




    if (this.callsaveparamsapi) {


      if (this.RecordId.toUpperCase() == "28B06757-9807-4F92-8196-F5542D773A7C") {

        const d = new Date(params[0].value);
        const year = d.getFullYear();
        const month = d.getMonth() + 1;

        params.push({
          // criteriaId: crit.id,
          key: "YEAR",
          value: year,
          scheduler: false

        });
        params.push({
          // criteriaId: crit.id,
          key: "MONTH",
          value: month,
          scheduler: false

        });
      }


      this.loaderService.addRequest(this.cs.saveSearchCriterias(params)).subscribe(saved => {

        if (saved) {

          const data: ReportLog = {
            ..._.omit(this.RecordId, 'profileName')
          };
          data.ReportId = this.RecordId;
          data.UserAction = UserAction.Display;
          data.UserId = userdata.id;
          this.cs.savelog(data)
            .subscribe(response => {

            });





          if (this.RecordId.toUpperCase() == "52B9DCDA-EE55-457A-BD94-51BA3FF616AF" || this.RecordId.toUpperCase() == "3CEC5B34-7787-4DDE-A326-67BD4C346EF4") {
            this.parameters = params;
            saved = false;
          }

          else if (this.SetProdcut || this.setparam) {
            this.SetProdcut = false;
            let params1 = params.filter(number => number.key.toLowerCase() !== "product" && number.key != "Regime" && number.key.toLowerCase() != "mrnumber");
            if (this.RecordId.toUpperCase() == "28B06757-9807-4F92-8196-F5542D773A7C") {
              params1 = params1.filter(number => number.criteriaId !== "f91f95db-0810-4860-b555-01252544a879");

            }





            this.parameters = params1;
            saved = false;
          }
          else {
            this.parameters = params;
            saved = false;
          }

          console.log("parameters is" + this.parameters);

        }

      });
      this.callsaveparamsapi = false;

    }


  }


  export(format: string) {
   
    if (this.form.valid) {
      // Show the loader
      const dimmer = document.getElementById('dimmer');
      const loader = document.querySelector('.spinner') as HTMLDivElement;
      dimmer.style.display = 'block'; // Show the dimmer
      loader.style.visibility = 'visible'; // Show the spinner

      let _url = `${this.report.reportServer}?${this.report.reportPath}`;

      if (this.setparam) {
        this.parameters.forEach(crit => {
          let param = crit.key;
          _url += `&${param}=${encodeURI(crit.value)}`;
        });
      } else {
        _url += `&uid=${encodeURI(this.user.id)}`;
        _url += `&rid=${encodeURI(this.report.id)}`;
      }

      _url += `&rs:ClearSession=true&rs:Format=${format}`;

      // Make fetch request
      fetch(_url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          return response.blob(); // Convert to Blob for downloading
        })
        .then(blob => {
          // Create an anchor element to trigger the download
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = this.report.label || 'defaultreport.xlsx'; // Custom filename
          link.click();

          // Hide the loader after download starts
          dimmer.style.display = 'none';
          loader.style.visibility = 'hidden';
        })
        .catch(error => {
          console.error('Error during download:', error);

          // Hide the loader in case of an error
          dimmer.style.display = 'none';
          loader.style.visibility = 'hidden';
        });
    }
  }




  @ViewChild('reportCard', { read: ElementRef }) divRef: ElementRef;
  isFullscreen = false;

  openFullscreen() {
    // Use this.divRef.nativeElement here to request fullscreen
    const elem = this.divRef.nativeElement;

    if (this.isFullscreen) {
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