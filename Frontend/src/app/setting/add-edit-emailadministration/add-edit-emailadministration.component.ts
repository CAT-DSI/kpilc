import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { countrydata, delayreport, EmailModel, Frequency, ProductBrandUser, RefPlateformes, ReportSetting, UserForm } from 'src/app/shared/models/auth.model';
import { CountryService } from 'src/app/shared/Services/country.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import * as _ from 'lodash';
import { Country, marque, PFCountryUser, product, profile, Regime, WebReport } from 'src/app/shared/models/country';
import { RecordStatus } from 'src/app/shared/models/app';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { getFromStorage } from 'src/app/shared/Util/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { UsersService } from 'src/app/shared/Services/users.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateText } from 'src/app/shared/models/i18n';
import { isEmpty } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/Services/notification.service';

@Component({
  selector: 'app-add-edit-emailadministration',
  templateUrl: './add-edit-emailadministration.component.html',
  styleUrls: ['./add-edit-emailadministration.component.scss']
})
export class AddEditEmailadministrationComponent implements OnInit {
  @Input() formData = {} as EmailModel;
  profiledata: string;
  countryCode: string;
  countryname: string;
  productName: string;
  brandName: string;
  frequencyLabel: string;
  categoryId: number;
  //report: string;
  reportKey: string;
  reportParameter: string;
  reportId: number;
  user = getFromStorage("userwer");
  userid: number;
  userForm: FormGroup;
  emailConfiguration: EmailModel;
  pflist: PFCountryUser[];
  pfoption: string[];
  productoption: string[];
  frequencyoption: string[];
  callapi: boolean = false;
  params = new Array();
  countryList: Country[];
  // productlist: RefPlateformes[];
  productlist: ProductBrandUser[];
  marquelist: marque[];
  marqueOptions: string[];
  countryOptions: string[];
  reportOptions: string[];
  regimeOptions: string[];
  reportList: WebReport[];
  regimeList: Regime[];
  frequencylist: Frequency[];
  criteriaShown: boolean = true;
  hideRegime: boolean = true;
  hideCountry: boolean = true;
  hidePf: boolean = true;
  hideMarque: boolean = true;
  hideProduct: boolean = true;
  hideGroupe: boolean = true;
  hideETD1: boolean = true;
  hideETD: boolean = true;
  hideETD2: boolean = true;

  selectedDay: any[] = [];
  selectedMonth: any[] = [];
  selectedGroupes: any[] = [];
  miosSelected: boolean = false;
  miosSelectionSelected: boolean = false;
  touslessSelected: boolean = false;
 
  monthsDropdownList = [];
  daysDropDownList = [];
  groupesDropDownList = [];
  emailId: string;

  dropdownSettings = {};
  regimedropdownSettings = {};
  productdropdownSettings = {};
  frquencydropdownSettings = {};

  isMoisSelected: boolean = false;  // Condition to enable months dropdown
  isJoursSelected: boolean = false; // Condition to enable days dropdown
  isDateRangeSelected: boolean = false;  // Condition to enable date range input
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  breadcrumbs: TranslateText[] = [

    { key: 'nav.setting', defaultText: 'Setting' },
    { key: 'nav.EmailsAdministration', defaultText: 'Emails administration' },
  ];

  constructor(private loaderService: LoaderService,
    private countryService: CountryService,
    private usersService: UsersService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) {


    // get the geo poles as soon as the modal opens
    // set page index as 0 since we need the full list
    loaderService.addRequest(countryService.getCountriesEx({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          this.countryList = data;
          this.countryOptions = _.map(data, item => item.name);
        }
      );

    loaderService.addRequest(countryService.getAllReportForEmails({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          this.reportList = data;
          this.reportOptions = _.map(data, item => item.name);
          //this.reportKey = _.map(data, item => item.reportKey);
        }
      );

    loaderService.addRequest(countryService.getAllProductRegimes({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          this.regimeList = data;
          this.regimeOptions = _.map(data, item => item.regime);
        }
      );

    loaderService.addRequest(this.countryService.getAllWebFrequencies())
      .subscribe(
        (data: any) => {
          this.frequencylist = data;
          this.frequencyoption = _.map(data, item => item.frequencyLabel);

        }
      )


  }


  ngOnInit(): void {

    this.notificationService.currentMessage.subscribe(({ message, type }) => {
      this.message = message;
      this.messageType = type;
    });

    const { emails, reportId } = this.formData;
    this.userForm = this.fb.group({
      report: ['', Validators.required],
      marque: [''],
      frequencies: [''],
      reportKey: [''],
      selectedCountry: [''],
      countrycode: [''],
      country: [''],
      plateform: [''],
      codePlf: [''],
      months: [[]],
      days: [[]],
      selectedRegimes: [[]],
      emails: [emails, [Validators.required]],
      sysdate: [''],
      reportId: [''],
      selectedProducts: [''],
      groupes: [''],
      sysdate1: [''],
      datesRange: [''],
      eachMonth: true,
      eachDay: false,
      isDaySelected: false,
      isDateSelected: false,
      isDateRange: false,
      selectedMonths: [''],
      selectedDays: [''],
      groups: [''],
      selectedFrequency: ['', Validators.required],
      products: [''],
      marques: [''],
      selectedMarque: [''],
      reportsName: ['']     
    });


    this.monthsDropdownList = [
      { id: 1, name: 'Jan' },
      { id: 2, name: 'Fév' },
      { id: 3, name: 'Mar' },
      { id: 4, name: 'Avr' },
      { id: 5, name: 'Mai' },
      { id: 6, name: 'Juin' },
      { id: 7, name: 'Juil' },
      { id: 8, name: 'Août' },
      { id: 9, name: 'Sept' },
      { id: 10, name: 'Oct' },
      { id: 11, name: 'Nov' },
      { id: 12, name: 'Déc' },
    ]

    this.daysDropDownList = [
      { id: 1, name: 'Dim' },
      { id: 2, name: 'Lun' },
      { id: 3, name: 'Mar' },
      { id: 4, name: 'Mer' },
      { id: 5, name: 'Jeu' },
      { id: 6, name: 'Vend' },
      { id: 7, name: 'Sam' },
    ]

    this.groupesDropDownList = [
      { id: 2, name: 'Groupe 2' },
      { id: 3, name: 'Groupe 3' },
      { id: 4, name: 'Groupe 4' },
      { id: 5, name: 'Groupe 5' },
      { id: 6, name: 'Groupe 6' },
      { id: 7, name: 'Groupe 7' }
    ]

    this.frquencydropdownSettings = {
      singleSelection: false,
      idField: 'frequencyID',
      textField: 'frequencyLabel',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      classes: 'custom-style'
    }
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,

    };

    this.regimedropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'regime',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
    }
    this.productdropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'product',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2
    }

    this.emailId = this.route.snapshot.paramMap.get('id');


    if (_.isUndefined(this.emailId)) {
      this.userForm.get('report')?.valueChanges.subscribe((selectedReport) => {

        this.userForm.patchValue({
          selectedCountry: '',
          codePlf: '',
          selectedRegimes: '',
          selectedMarque: '',
          selectedProducts: '',
          groupes: '',
          selectedFrequency: ''
        });
      });
    }

    this.loadFormData(this.emailId);

    const state = this.router.getCurrentNavigation()?.extras.state;
    this.patchForm(state['row']);
    if (state && state['row']) {
      const rowData = state['row'];
      this.patchForm(rowData);

    }

  }

  loadFormData(id: string) {

    if (id != "") {
      this.loaderService.addRequest(this.countryService.getAllEmailsReportsItemByIDForEditing(this.emailId))
        .subscribe(
          (data: any) => {

            const apiResponse = {
              id: data.id,
              reportId: data.reportId,
              country: data.country,
              sysdate: data.sysdate,
              sysdate1: data.sysdate1,
              emails: data.emails,
              eachMonth: data.eachMonth,
              eachDay: data.eachDay,
              selectedMonths: data.selectedMonths,
              selectedDays: data.selectedDays,
              datesRange: data.datesRange,
              reportName: data.reportName,
              reportKey: data.reportKey,
              platform: data.platform,
              groups: data.groups,
              frequencies: data.frequencies,
              regimes: data.regimes,
              products: data.products,
              marques: data.marques
            };
            debugger
            this.reportKey = apiResponse.reportKey,
              this.userForm.patchValue({
                report: apiResponse.reportId,
                country: apiResponse.country,
                reportKey: apiResponse.reportKey,
                selectedCountry: apiResponse.country,
                emails: apiResponse.emails,
                codePlf: apiResponse.platform == null ? "" : apiResponse.platform.codePlf,
                selectedRegimes: apiResponse.regimes == null ? "" : apiResponse.regimes,
                selectedFrequency: apiResponse.frequencies == null ? "" : apiResponse.frequencies.map(f => f.frequencyLabel),
                sysdate: apiResponse.sysdate,
                sysdate1: apiResponse.sysdate1,
                reportId: apiResponse.reportId,
                selectedProducts: apiResponse.products == null ? "" : apiResponse.products.map(f => f.product),
                datesRange: apiResponse.datesRange,
                eachMonth: apiResponse.eachMonth,
                eachDay: apiResponse.eachDay,
                selectedMonths: apiResponse.selectedMonths,
                selectedDays: apiResponse.selectedDays,
                groups: apiResponse.groups,
                reportsName: apiResponse.reportName,
                frequencies: apiResponse.frequencies == null ? "" : apiResponse.frequencies,
                products: apiResponse.products == null ? "" : apiResponse.products,
                marques: apiResponse.marques == null ? "" : apiResponse.marques,
                selectedMarque: apiResponse.marques == null ? "" : apiResponse.marques.map(f => f.brand),
               
              });
            this.displayReportCiteria();

            //Bind SelectedMonths
            if (apiResponse.selectedMonths != null) {
              const selectedMonthsArray = apiResponse.selectedMonths.split(',').map(Number);
              this.selectedMonth = this.monthsDropdownList.filter(m => selectedMonthsArray.includes(m.id));
            }
            if (apiResponse.selectedDays != null) {
              debugger
              const selectedDaysArray = apiResponse.selectedDays.split(',').map(Number);
              this.selectedDay = this.daysDropDownList.filter(m => selectedDaysArray.includes(m.id));

            }
            if (apiResponse.groups != null) {
              const selectedGroupesArray = apiResponse.groups.split(',').map(Number);
              this.selectedGroupes = this.groupesDropDownList.filter(m => selectedGroupesArray.includes(m.id));
            }

            this.loadPlatform(apiResponse.country);
            this.loadProduct(apiResponse.country);
            this.loadMarque(apiResponse.country);
            debugger
            this.userForm.patchValue({
              plateform: apiResponse.platform == null ? "" : apiResponse.platform.plateform,
              months: this.selectedMonth,
              days: this.selectedDay,
              isDaySelected: this.selectedDay.length > 0 ? true : false,
              isDateSelected: apiResponse.datesRange != '' ? true : false,
              isDateRange: false,
              groupes: this.selectedGroupes
            });

            this.userForm.get('report')?.disable();
            this.userForm.get('selectedCountry')?.disable();

            this.checkInitialValues();
          }
        )
    }
  }

  checkInitialValues(): void {
    debugger
    const formValue = this.userForm.value;

    // If `days` has a value, set `eachDay` to false (meaning "Jours sélectionnés" should be checked)
    if (formValue.days && formValue.days.length > 0) {
      this.userForm.patchValue({
        eachDay: false,  // "Jours sélectionnés"
        isDateRange: false,  // Make sure "Date Range" is unchecked
      });
    }

    // If `datesRange` has a value, set `isDateRange` to true
    if (formValue.datesRange && formValue.datesRange !== '') {
      this.userForm.patchValue({
        eachDay: false,  // Uncheck "Tous les jours"
        isDateRange: true,  // Check "Date Range"
      });
    }

    // If `eachDay` is `true`, ensure "Tous les jours" is checked and reset other fields
    if (formValue.eachDay === true) {
      this.userForm.patchValue({
        days: [], // Clear any selected days
        isDateRange: false, // Uncheck Date Range
        datesRange: '' // Clear date range
      });
    }
  }

  get emailReportName() {
    this.reportId = this.userForm.value.report;
    this.reportKey = this.reportList.find(x => x.id == this.reportId).reportKey;
    this.reportParameter = this.reportList.find(x => x.id == this.reportId).name;
    return this.userForm.get('report');
  }

  get marqueName() {
    debugger
    this.brandName = this.userForm.value.brand.brand;
    return this.userForm.get('marque');
  }

  loadPlatform(countryCode: string) {

    this.userid = this.user.id;
    if (countryCode != "") {
      this.loaderService.addRequest(this.countryService.getPlateformesByUserCategoryReport(this.categoryId, countryCode, this.userid))
        .subscribe(
          (data: any) => {
            this.pflist = data;
            this.pfoption = _.map(data, item => item.codePlf);
            this.callapi = false;
          }
        )
    }
  }

  changeReport(e) {
debugger
    this.emailReportName.setValue(e.target.value, {
      onlySelf: true
    })

    this.loadPlatform(this.countryCode);
    this.displayReportCiteria();
  }

  displayReportCiteria() {
debugger
    if ((this.reportKey == "SevenKPIAllProduct") || (this.reportKey == "SevenKPI")) {
      this.hideRegime = true;
      this.hideCountry = false;
      this.hidePf = true;
      this.hideMarque = false;
      this.hideProduct = false;
      this.hideGroupe = true;
      this.hideETD1 = true;
      this.hideETD = false;
      this.hideETD2 = false;
    }
    else if (this.reportKey == 'WeeklyEuropeDelayKpi') {
      this.hideRegime = false;
      this.hideCountry = true;
      this.hidePf = true;
      this.hideMarque = true;
      this.hideProduct = true;
      this.hideGroupe = true;
      this.hideETD1 = true;
      this.hideETD = false;
      this.hideETD2 = true;
    }
    else if (this.reportKey == 'MonthlyEuropeDelayKpi') {
      this.hideRegime = false;
      this.hideCountry = true;
      this.hidePf = true;
      this.hideMarque = true;
      this.hideProduct = true;
      this.hideGroupe = true;
      this.hideETD1 = true;
      this.hideETD = false;
      this.hideETD2 = true;
    }
    else if (this.reportKey == 'TwoKPINewDailyPerformanceDelay') {
      this.hideRegime = true;
      this.hideCountry = false;
      this.hidePf = true;
      this.hideMarque = true;
      this.hideProduct = true;
      this.hideGroupe = true;
      this.hideETD1 = true;
      this.hideETD = false;
      this.hideETD2 = true;
    }
    else if (this.reportKey == 'FiveKPI') {
      this.hideRegime = true;
      this.hideCountry = false;
      this.hidePf = false;
      this.hideMarque = true;
      this.hideProduct = false;
      this.hideGroupe = true;
      this.hideETD1 = false;
      this.hideETD = true;
      this.hideETD2 = true;
    }
    else if (this.reportKey == 'FiveKPIUpdated') {
      this.hideRegime = true;
      this.hideCountry = false;
      this.hidePf = false;
      this.hideMarque = true;
      this.hideProduct = true;
      this.hideGroupe = false;
      this.hideETD1 = false;
      this.hideETD = true;
      this.hideETD2 = true;
    }
  }

  loadProduct(countryCode: string) {
    if (countryCode != "") {
      this.loaderService.addRequest(this.countryService.getUserProductsByCountryForInserting(countryCode))
        .subscribe(
          (data: any) => {
            this.productlist = data;
            this.productoption = _.map(data, item => item.product);
            this.callapi = false;
          }
        )
    }
  }
  loadMarque(countryCode: string) {
    if (countryCode != "") {
      this.loaderService.addRequest(this.countryService.getUserMarqueByCountryForInserting(countryCode))
        .subscribe(
          (data: any) => {
            this.marquelist = data;
            this.marqueOptions = _.map(data, item => item.brand);
            this.callapi = false;
          }
        )
    }
  }
  changeCountry(e) {

    const countrycode = this.countryList.find(x => x.code == this.userForm.value.selectedCountry);
    this.countryCode = countrycode.code;
    this.loadPlatform(this.countryCode);
    this.loadProduct(this.countryCode);
    this.loadMarque(this.countryCode);
  }

  changeMarque(e) {
    this.marqueName.setValue(e.target.value, {
      onlySelf: true
    })

    this.loaderService.addRequest(this.countryService.getUserProductsByCountryBrandForInserting(this.countryCode, this.brandName))
      .subscribe(
        (data: any) => {
          this.productlist = data;
          this.productoption = _.map(data, item => item.product);
          this.callapi = false;
        }
      )
  }

  toggleMois(): void {
    debugger
    if (this.userForm.value.eachMonth) {
      // When "Chaque mois" is selected, uncheck "Mois sélectionnés" and clear months
      this.userForm.patchValue({
        months: []  // Clear selected months
      });
    } else {
      // When "Mois sélectionnés" is selected, make sure months are populated
      // Optionally you could fetch months data or prepopulate it
    }
  }

  toggleTousLesJours(): void {
    console.log("toggleTousLesJours is called")
    if (this.userForm.value.eachDay) {
      this.userForm.patchValue({
        days: [],  // Clear days selection when "Tous les jours" is selected
        isDateRange: false, // Uncheck Date Range
        datesRange: '',  // Clear date range
        eachDay: true
      });
    } else {
      this.userForm.patchValue({
       datesRange: '',
       isDateRange: false
      });
    }
    console.log("toggleTousLesJours",this.userForm.value )
  }

  // Toggle function for "Date Range"
  toggleDateRange(): void {
    debugger
    this.userForm.patchValue({
      eachDay: false,  // Uncheck "Tous les jours"
      days: [],        // Clear days selection
      isDateRange: true  // Mark Date Range as selected
    });
  }



  patchForm(rowData: any) {
    this.userForm.patchValue({
      emails: rowData.emails,
    })
  }


  public onItemSelect(item: any) {
    console.log("item", item);
    this.params = item;
    this.callapi = true;

    if (this.callapi) {
    };
    console.log(item);
  }

  // onSelectRegime(item : any){  
  //    this.userForm.value.regimes = item;
  //   console.log('selected regime', item);
  // }

  public onSelectAll(item: any) {
    const data: UserForm = {
      ..._.omit(this.userForm.value, 'geoPoleName')
    };
    if (this.callapi || data.Country != null) {
      this.loaderService.addRequest(this.countryService.Getpf(data.Country))
        .subscribe(
          (data: any) => {
            this.pflist = data;
            this.pfoption = _.map(data, item => item.codePlf);
            this.callapi = false;
          }
        )

    }
  }

  isFieldRequired(fieldName: string): boolean {
    const control = this.userForm.get(fieldName);
    if (!control || !control.validator) return false;

    const validator = control.validator({} as any);
    return validator && validator['required'];
  }

  onSubmit() {
    debugger
    if (this.userForm.valid) {
      const data: EmailModel = {
        ..._.omit(this.userForm.value, 'profileName')
      };
      const user = getFromStorage('userwer').userName;
      if (data.country == null || data.country == "") {
        data.country = this.countryCode;
      }

      data.id = this.emailId == null ? '00000000-0000-0000-0000-000000000000' : this.emailId;
      data.reportId = data.reportId == "" ? this.userForm.value.report : data.reportId;
      data.updatedby = user;
      data.sysdate = data.sysdate;
      data.emails = data.emails;
      data.country = data.country;
      data.regimes = this.userForm.value.selectedRegimes;
      data.groups = data.groups;
      data.sysdate = data.sysdate;
      data.sysdate1 = data.sysdate1;
      data.datesRange = data.datesRange;
      data.eachDay = data.eachDay;
      data.eachMonth = data.eachMonth;
      data.selectedDays = data.eachDay == false ? data.selectedDays : "";
      data.selectedMonths = data.eachMonth == false ? data.selectedMonths : "";
      data.plateform = this.userForm.value.codePlf;

      if (this.userForm.value.selectedFrequency != null) {
        const selectedItems = this.userForm.get('selectedFrequency')?.value || [];
        if (selectedItems != null) {
          const updatedSelection = selectedItems.map((item: any) => this.frequencylist.find(freq => freq.frequencyLabel == item));
          this.userForm.get('selectedFrequency')?.setValue(updatedSelection);
        }
      }
      data.frequencies = this.userForm.value.selectedFrequency;

      if (this.userForm.value.selectedProducts != null) {
        const selectedItems = this.userForm.get('selectedProducts')?.value || [];
        if (selectedItems != undefined) {
          const updatedSelection = selectedItems.map((item: any) => this.productlist.find(freq => freq.product == item));
          this.userForm.get('selectedProducts')?.setValue(updatedSelection);
        }
      }
      data.products = this.userForm.value.selectedProducts;

      if (this.userForm.value.selectedMarque != null) {
        const selectedItems = this.userForm.get('selectedMarque')?.value;
        if (selectedItems != null && selectedItems != "") {
          const updatedSelection = this.marquelist?.find(freq => freq.brand == selectedItems);
          this.userForm.get('selectedMarque')?.setValue(updatedSelection);
        }
      }
      data.marques = this.userForm.value.selectedMarque == "" ? [] : [this.userForm.value.selectedMarque];
      //data.marques =  data.marques == undefined ? [] :  data.marques;

      if (this.userForm.value.days != null && this.userForm.value.days != "" && data.eachDay == false) {
        data.selectedDays = this.userForm.value.days.map((item: any) => item.id).join(',');
      }
      if (this.userForm.value.months != null && this.userForm.value.months != "" && data.eachMonth == false) {
        data.selectedMonths = this.userForm.value.months.map((item: any) => item.id).join(',');
      }
      if (this.userForm.value.groupes != null && this.userForm.value.groupes != "") {
        data.groups = this.userForm.value.groupes.map((item: any) => item.id).join(',');
      }
      debugger
      if (this.userForm.value.isDateRange == true) {
        data.selectedDays = "";
      }else{
        data.datesRange = "";
      }

      this.loaderService.addRequest(this.usersService.updateEmailItem(data, this.emailId))
        .subscribe({
          next: (response) => {

            this.router.navigate(['/setting/emailAdministration'], {
              state: { successMessage: 'Data updated Successfully' }
            }),
              this.notificationService.changeMessage('Data updated Successfully!', 'success');

            err => {
              this.notificationService.changeMessage('There are errors in the form!', 'error');
              this.toastr.error(err.error, 'Message', {
                timeOut: 6000, closeButton: true
              });
            }
          }
        });
    } else {
      this.notificationService.changeMessage('Please fill all mandetory fields!', 'error');
    }
  };

  onCancel() {
    this.router.navigate(['/setting/emailAdministration']);
  }
}
