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
import { Country, PF, productlist, profile } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/shared/Services/country.service';
import { Console } from 'console';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { getFromStorage, removeFromStorage } from 'src/app/utils/storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-shipments-dealer-management-modal',
  templateUrl: './brand-shipments-dealer-management-modal.component.html',
  styleUrls: ['./brand-shipments-dealer-management-modal.component.scss']
})
export class BrandShipmentsDealerManagementModalComponent implements OnInit, OnDestroy {
  @Input() headerTitle: TranslateText;
  @Input() formData = {} as delayreport;
  countryList: Country[];
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
  brandData: string;
  codedealr:string;
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
  selectedName: [];

  //userRoleOptions=snacks;
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
          // this.bandList = data;
          this.profilelist[0].id = _.map(this.profilelist, item => item.id);
         }
      );

    // get the geo poles as soon as the modal opens
    // set page index as 0 since we need the full list
    loaderService.addRequest(countryService.getCountriesEx({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          this.countryList = data;
          this.countryOptions = _.map(data, item => item.name);
        }
      );

  }

  get selectedRoleId() { return this.userForm.get('roleId'); }
  get selectedProfileName() { return this.userForm.get('profileName'); }

  get selectedId() { return this.userForm.get('id'); }

  ngOnInit() {
    this.callapi = false;
    const { country, brand, Code, kpi, isDelayReport, id, categoryId } = this.formData;

    this.userForm = this.fb.group({
      country: [country],
      brand: [brand, NotEmpty],
      Code: [Code, NotEmpty],
      kpi: [kpi, [NotEmpty]],
      isdelay: [isDelayReport],
      id: [id],
      categoryId: [categoryId]


    });
    this.isDelayReport = this.userForm.value.isdelay;
    this.profiledata = this.userForm.value.profileName;
    this.brandData = this.userForm.value.brand;
    this.selectedName = this.userForm.value.profileName;
    this.selectedProfileName.setValue(this.profiledata);
    this.userForm.get('profileName')?.setValue(this.profiledata);
    // this.userForm.controls['profileName'].setValue("Public");
    const userdata = getFromStorage('userwer');
    //  this.formData.userid=userdata.id;
    removeFromStorage("userdata");

    this.dropdownSettings = {
      idField: 'code',
      textField: 'name',
    };
  }
  
  // Country selection
  changeCountry(e) {
    this.countryName.setValue(e.target.value, {
      onlySelf: true
    })   
    this.loaderService.addRequest(this.countryService.getRefSupplierForDelayReports(this.profiledata))
      .subscribe(
        (data: any) => {
          this.pflist = data;
          this.pfoption = _.map(data, item => item.codePlf);
          this.callapi = false;
        }
      )
  }
 
  
  changeBrand(e) {
    this.brandName.setValue(e.target.value, {
      onlySelf: true
    })
    
    
    this.loaderService.addRequest(this.countryService.getRefDealerCodes(this.profiledata, this.brandData))
      .subscribe(
        (data: any) => {
          this.bandList = data;
          this.pfoption = _.map(data, item => item.codePlf);
          this.callapi = false;
        }
      )
  }

  setAll(e) {
    this.isDelayReport = e;
  }

  get countryName() {
    
    this.profiledata = this.userForm.value.country.code;    
    this.CategoryId = this.userForm.value.country.id;
    return this.userForm.get('country');
  }
get brandName(){
  this.brandData = this.userForm.value.brand.key;
  return this.userForm.get('brand');
}
changeDealercode(e) {
  this.Dealercode.setValue(e.target.value, {
    onlySelf: true
  })
}

  get Dealercode(){
    this.codedealr = this.userForm.value.Code.key;
    return this.userForm.get('Code');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  public onItemSelect(item: any) {
    this.params = item;
    this.callapi = true;
    // this.Appendparams=this.params+ this.Appendparams;
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
      
      const data: delayreport = {
        ..._.omit(this.userForm.value, 'profileName')
      };
      data.isDelayReport = this.isDelayReport;
      if (data.isDelayReport == null) {
        data.isDelayReport = false;

      }
      // data.IdTranscoWex = data.brand.idTranscoWex;
      // if (data.IdTranscoWex == undefined) {
      //   data.IdTranscoWex = data.product.idTranscoWex;
      // }
      data.country=this.profiledata;
      data.Code = this.codedealr;
      data.categoryId = this.CategoryId;      
      data.brand = this.brandData;
      data.id = this.userForm.value.id;     
      // if userId is defined then it will update else it will create new
      this.loaderService.addRequest(this.usersService.insertDealerShipmentParam(data))
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
