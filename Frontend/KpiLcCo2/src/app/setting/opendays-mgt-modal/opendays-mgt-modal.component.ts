import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { CountryService } from 'src/app/shared/Services/country.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { UsersService } from 'src/app/shared/Services/users.service';
import { RecordStatus } from 'src/app/shared/models/app';
import { OpenDaysDetModel, ReportSetting, ReportsParamsModel, UserForm, UserRoles, delayreport } from 'src/app/shared/models/auth.model';
import { Country, PF } from 'src/app/shared/models/country';
import { CCCategory, TranslateText } from 'src/app/shared/models/i18n';
import { getFromStorage, removeFromStorage, saveToStorage } from 'src/app/utils/storage';
import { NotEmpty } from 'src/app/utils/validators';
import { STATUS_OPTIONS1 } from 'src/config';

@Component({
  selector: 'app-opendays-mgt-modal',
  templateUrl: './opendays-mgt-modal.component.html',
  styleUrls: ['./opendays-mgt-modal.component.scss']
})
export class OpendaysMgtModalComponent implements OnInit, OnDestroy {
  @Input() headerTitle: TranslateText;
  @Input() formData = {} as OpenDaysDetModel;
  countryList: Country[];

  pflist: PF[];
  errors = [];
  countryOptions: string[];
  profileoption: string[];
  pfoption: string[];
  toppings = new FormControl();
  @Input() multiple? = false;
  subscription = new Subscription();
  inEditMode = false;
  selectedToppings: any;
  dropdownSettings: IDropdownSettings = {};
  callapi: boolean = false;
  checkbox: boolean;
  countrydata: string;
  day: Date;
  CategoryId: number;
  isDelayReport: boolean;
  userForm: FormGroup;
  saveError: string;
  params = new Array();
  Appendparams: any;
  Appendparams1: string[];
  statusOptions = STATUS_OPTIONS1;
  userRoleOptions = STATUS_OPTIONS1;
  selectedCountry = "Test";
  selectedCountryName: [];
  selectedDate: ['']
  userRoles = UserRoles;
  currentD: any;
  ccCategories = CCCategory;
  constructor(

    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private toastr: ToastrService,

    private countryService: CountryService,
    private usersService: UsersService,
    private loaderService: LoaderService
  ) {
    this.userForm = new FormGroup({
      profileName: new FormControl(null),
    });


    loaderService.addRequest(countryService.getAllCountries({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          this.countryList = data;
          this.countryOptions = _.map(data, item => item.name);
          const selecteddta = getFromStorage('selecteddata');
          this.selectedCountryName = selecteddta;
        }
      );

  }

  get selectedCountries() { return this.userForm.get('country'); }
  get selectedDays() { return this.userForm.get('day'); }
  get selectedId() { return this.userForm.get('id'); }

  ngOnInit() {
    this.callapi = false;
    const { id, country, day } = this.formData;

    this.userForm = this.fb.group({
      id: [id],
      country: [country],
      day: [day, NotEmpty],
    });
    
    this.countrydata = this.userForm.value.country;
    this.selectedCountryName = this.userForm.value.country;
    saveToStorage("selecteddata", this.selectedCountryName, true);
    this.selectedCountries.setValue(this.countrydata);
    this.userForm.get('country')?.setValue(this.countrydata);
    this.userForm.controls['country'].setValue("Public");
    //this.selectedDate = this.userForm.value.day;
    const dateValue = this.userForm.value.day;
    const formatedDate = this.formatDate(dateValue);
    this.userForm.get('day')?.setValue(formatedDate);


    const userdata = getFromStorage('userwer');
    this.formData.id = userdata.id;
    removeFromStorage("userdata");


    //const userdata = getFromStorage('userwer');
    //removeFromStorage("userdata");

    this.dropdownSettings = {
      idField: 'code',
      textField: 'name',
    };

  }

  formatDate(dateString: string): string {
    return dateString.split('T')[0];
  }
  // Country selection

  setAll(e) {
    this.isDelayReport = e;
  }

  get countryName() {
    this.countrydata = this.userForm.value.country.code;
    this.CategoryId = this.userForm.value.country.id;
    return this.userForm.get('country');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  public onItemSelect(item: any) {
    this.params = item;
    this.callapi = true;
    if (this.callapi) {

    };
    console.log(item);
  }
  public onSelectAll(item: any) {
    const data: UserForm = {
      ..._.omit(this.userForm.value, 'geoPoleName')
    };
    if (this.callapi) {
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
  /*
    on submit form call the save api endpoint if the form is valid
   */
  onSubmit() {
    if (true) {      
      if (this.userForm.valid) {
        const data: OpenDaysDetModel = {
          ..._.omit(this.userForm.value)
        };
        data.id = data.id;
        if (data.id == null) {
          data.id = '00000000-0000-0000-0000-000000000000';
        }
        data.country = data.country;
        if (data.country.code) {
          data.country = data.country.code;
        }
        data.day = data.day;

        // if userId is defined then it will update else it will create new
        this.loaderService.addRequest(this.usersService.insertOpenDaysDet(data))
          .subscribe(
            () => this.activeModal.close({ ...this.formData, ...data }),
            err => {
              this.toastr.error(err.error, 'Message', {
                timeOut: 6000, closeButton: true
              });

            }
          );
      }
    }
  }
}

