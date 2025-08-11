import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomerCountriesModel, MajorCustomerModel, ReportSetting, UserForm, UserRoles } from 'src/app/shared/models/auth.model';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { CCCategory, TranslateText } from 'src/app/shared/models/i18n';
import { NotEmpty } from 'src/app/utils/validators';
import { Country, Marques, PF } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/shared/Services/country.service';
import { RecordStatus } from 'src/app/shared/models/app';
import { forkJoin, Subscription } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { STATUS_OPTIONS1 } from 'src/config';

@Component({
  selector: 'app-major-customer-modal',
  templateUrl: './major-customer-modal.component.html',
  styleUrls: ['./major-customer-modal.component.scss']
})
export class MajorCustomerModalComponent implements OnInit, OnDestroy {
  @Input() headerTitle: TranslateText;
  @Input() formData = {} as MajorCustomerModel;
  userForm: FormGroup;
  enabledForMajorCustomerReport: boolean;
  saveError: string;
  callapi: boolean = false;
  countryList: Country[];
  countryOptions: string;
  profiledata: string;
  CategoryId: number;
  pflist: Marques[];
  pfoption: string[];
  dropdownSettings:IDropdownSettings={};

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private usersService: UsersService,
    private loaderService: LoaderService,
    private countryService: CountryService,
  ) {
    loaderService.addRequest(countryService.getCountriesEx({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          this.countryList = data;
          this.countryOptions = _.map(data, item => item.name);
        }
      );
  }

  get selectedId() { return this.userForm.get('id'); }

  ngOnInit(): void {
    this.callapi = false;
    const { id,country, customer } = this.formData;

    this.userForm = this.fb.group({
      id:[id],
      country: [country],
      customer: [customer],
    });

    this.dropdownSettings = {
      idField: 'code',
      textField: 'name',
    };
  }

  changeCountry(e) {    
    this.countryName.setValue(e.target.value, {
      onlySelf: true
    })
    this.loaderService.addRequest(this.countryService.getAllMajorMarqueByCountryOutOfTable(this.profiledata))
      .subscribe(
        (data: any) => {
          this.pflist = data;
          this.pfoption = _.map(data, item => item.codePlf);
          this.callapi = false;
        }
      )

  }
  ngOnDestroy(): void { }

  setAll(e) {
    this.enabledForMajorCustomerReport = e;
  }
  get countryName() {
    this.profiledata = this.userForm.value.country.code;
    this.CategoryId = this.userForm.value.country.id;
    return this.userForm.get('country');
  }

  onSubmit() {
    if (true) {
      const data: MajorCustomerModel = {
        ..._.omit(this.userForm.value, 'profileName')
      };      
      data.id = this.userForm.value.id;
      data.country = data.customer.country;
      data.customer = data.customer.marque;
      
      // if userId is defined then it will update else it will create new
      this.loaderService.addRequest(this.usersService.addMajorCustomer(data))
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
