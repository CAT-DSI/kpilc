import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { forkJoin, Subscription } from 'rxjs';
import * as _ from 'lodash';
import { STATUS_OPTIONS, USER_ROLE_OPTIONS, EMAIL_REGEX, STATUS_OPTIONS1, Snack, snacks } from 'src/config';
import { getErrorMessage } from 'src/app/utils/utility';
import { NotEmpty } from 'src/app/utils/validators';
import { GenericApiResponse, RecordStatus, Role } from 'src/app/shared/models/app';
import { ReportSetting, User, UserForm, UserRoles, delayreport } from 'src/app/shared/models/auth.model';
import { TranslateText, CCCategory } from 'src/app/shared/models/i18n';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { Country, PF, RefRegimes, productlist, profile } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/shared/Services/country.service';
import { Console } from 'console';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { getFromStorage, removeFromStorage } from 'src/app/utils/storage';
import { ToastrService } from 'ngx-toastr';
import { RefTranscoFpWex } from 'src/app/shared/models/reports';

@Component({
  selector: 'app-families-mgt-modal',
  templateUrl: './families-mgt-modal.component.html',
  styleUrls: ['./families-mgt-modal.component.scss']
})
export class FamiliesMgtModalComponent implements OnInit, OnDestroy {
  @Input() headerTitle: TranslateText;
  //@Input() formData = {} as delayreport;
  @Input() formData = {} as RefTranscoFpWex;
  countryList: RefRegimes[];
  profilelist: profile[];
  dummyprofile: profile[];
  pflist: productlist[];
  bandList: productlist[];
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
  profiledata: string;
  label: string;
  family : string;
  idTranscoWex : number;
  sprId: string;
  sprFk : string;
  country: string;
  arrCountry : string;
  CategoryId: number;
  IsDealer: boolean;
  userForm: FormGroup;
  saveError: string;
  params = new Array();
  Appendparams: any;
  Appendparams1: string[];
  statusOptions = STATUS_OPTIONS1;
  userRoleOptions = STATUS_OPTIONS1;
  selectedCountry = "Test";
  selectedName: [];

  // this is an enum of user role ids for better readability
  userRoles = UserRoles;
  // we show geo pole names as options
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
    
    loaderService.addRequest(countryService.getProfiles())
      .subscribe(
        (data: any) => {
          this.profilelist = data;         
          this.profilelist[0].id = _.map(this.profilelist, item => item.id);
         }
      );

    // get the geo poles as soon as the modal opens
    // set page index as 0 since we need the full list
    loaderService.addRequest(countryService.getAllRegimes({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          this.countryList = data;
          this.countryOptions = _.map(data, item => item.name);
        }
      );

  }

  get selectedRoleId() { return this.userForm.get('roleId'); }
  get selectedProfileName() { return this.userForm.get('profileName'); }
  get selectedId() { return this.userForm.get('idTranscoWex'); }

  ngOnInit() {
    this.callapi = false;
    const { family, label, idTranscoWex } = this.formData;

    this.userForm = this.fb.group({
      family: [family],
      label: [label, NotEmpty], 
      idTranscoWex : [idTranscoWex]
    });
    
    this.family = this.userForm.value.family;
    this.label = this.userForm.value.label;    
    this.userForm.get('profileName')?.setValue(this.profiledata);    
    const userdata = getFromStorage('userwer');   
    removeFromStorage("userdata");

    this.dropdownSettings = {
      idField: 'order',
      textField: 'regime',
    };
  }
 
  setAll(e) {
    this.IsDealer = e;
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
      
      const data: RefTranscoFpWex = {
        ..._.omit(this.userForm.value, 'profileName')
      };    
      data.label = data.label;
      data.idTranscoWex = data.idTranscoWex;
      data.family =   data.family.regime;
      data.sprId = data.sprId;
      // if userId is defined then it will update else it will create new
      this.loaderService.addRequest(this.usersService.updateRefTranscoFpWex(data))
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