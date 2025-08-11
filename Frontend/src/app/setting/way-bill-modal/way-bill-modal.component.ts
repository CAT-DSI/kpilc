import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { CountryService } from 'src/app/shared/Services/country.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { UsersService } from 'src/app/shared/Services/users.service';
import { RecordStatus } from 'src/app/shared/models/app';
import { delayreport, UserRoles, UserForm, ReportSetting } from 'src/app/shared/models/auth.model';
import { Country, profile, PF } from 'src/app/shared/models/country';
import { TranslateText, CCCategory } from 'src/app/shared/models/i18n';
import { getFromStorage, removeFromStorage } from 'src/app/utils/storage';
import { NotEmpty } from 'src/app/utils/validators';
import { STATUS_OPTIONS1 } from 'src/config';
import { ReportsParamsModel } from 'src/app/shared/models/auth.model';

@Component({
  selector: 'app-way-bill-modal',
  templateUrl: './way-bill-modal.component.html',
  styleUrls: ['./way-bill-modal.component.scss']
})
export class WayBillModalComponent implements OnInit, OnDestroy{
  @Input() headerTitle: TranslateText;
  @Input() formData = {} as delayreport;
  countryList: Country[];
  profilelist:profile[];
  dummyprofile:profile[];
  pflist:PF[];
  errors = [];
  countryOptions: string[];
  profileoption:string[];
  pfoption:string[];
  toppings = new FormControl();
  @Input() multiple ? = false;
  subscription = new Subscription();
  inEditMode = false;
  selectedToppings:any;
  dropdownSettings:IDropdownSettings={};
  callapi :boolean = false;
  checkbox:boolean;
  profiledata:string;
  CategoryId:number;
  isDelayReport:boolean;   
  userForm: FormGroup;
  saveError: string;
  params = new Array();
  Appendparams :any;
  Appendparams1:string[];
  statusOptions = STATUS_OPTIONS1;
  userRoleOptions = STATUS_OPTIONS1;
  selectedCountry = "Test";
  selectedName:[];  
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
    this.userForm =new FormGroup({
      profileName: new FormControl(null),
  });
  
    loaderService.addRequest(countryService.getAllCountries({ pageIndex: 0 }, { status: RecordStatus.ACTIVE } ))
      .subscribe(
        (data:any) => {
          this.countryList = data;
          this.countryOptions = _.map(data, item => item.name);
        }
      );
     
  }
 
  get selectedId() { return this.userForm.get('id'); }

  ngOnInit() {     
    this.callapi=false;
    const {country,brand,kpi,isDelayReport,id,categoryId} = this.formData;

    this.userForm = this.fb.group({
      country: [country],
      brand: [brand, NotEmpty],      
      kpi: [kpi, [NotEmpty]],
      isdelay: [isDelayReport],
      id:[id],
      categoryId:[categoryId] 
    });
    this.isDelayReport=this.userForm.value.isdelay;   
       
    const userdata= getFromStorage('userwer');
  
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
  this.loaderService.addRequest(this.countryService.getAllUpletByCountryForBrands(this.profiledata,ReportSetting.ToExcludeCustomers))
  .subscribe(
    (data:any) => {
      this.pflist = data;
      this.pfoption = _.map(data, item => item.codePlf);
      this.callapi=false;
    }
  )
 
  }
  setAll(e)
  {
    this.isDelayReport=e;
  }

  get countryName() {
    this.profiledata= this.userForm.value.country.code;
    this.CategoryId=this.userForm.value.country.id;
    return this.userForm.get('country');
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  public onItemSelect(item: any) {
    this.params=item;
    this.callapi=true;   
    if( this.callapi)
    {
  
    };
    console.log(item);
  }
  public onSelectAll(item: any) {
      const data: UserForm = {
        ..._.omit(this.userForm.value, 'geoPoleName')
      };
      if(this.callapi)
      {
    this.loaderService.addRequest(this.countryService.Getpf(data.Country))
    .subscribe(
      (data:any) => {
        this.pflist = data;
        this.pfoption = _.map(data, item => item.codePlf);
        this.callapi=false;
      }
    )  
  }
  }
  /*
    on submit form call the save api endpoint if the form is valid
   */
  onSubmit() {
    if (true) {
    
     const data: ReportsParamsModel = {
       ..._.omit(this.userForm.value)
     };
     data.isDelayReport=this.isDelayReport;
     if(data.isDelayReport==null)
     {
      data.isDelayReport=false;
     }
     data.IdTranscoWex=data.IdTranscoWex;
     if(data.IdTranscoWex==undefined)
     {
      data.IdTranscoWex=data.brand.idTranscoWex;
     }
     data.categoryId=this.CategoryId;     
     data.id= this.userForm.value.id;
     data.brand=data.brand.xaccountId;
     data.country=this.profiledata;
     data.type= ReportSetting.TwoKPINewDailyPerformanceDelay;
    
     
     // if userId is defined then it will update else it will create new
     this.loaderService.addRequest(this.usersService.saveProductWithKpiwaybill(data))
       .subscribe(
    
         () => this.activeModal.close({ ...this.formData, ...data }),
         
         err => {
          this.toastr.error( err.error, 'Message', {
            timeOut: 6000, closeButton:true
          });
          
        }
       );   
    }
  }
}

