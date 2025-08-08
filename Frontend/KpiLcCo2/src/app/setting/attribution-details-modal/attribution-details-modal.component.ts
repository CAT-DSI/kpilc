import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/shared/Services/country.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { UsersService } from 'src/app/shared/Services/users.service';
import { RecordStatus } from 'src/app/shared/models/app';
import { RefPlateformes, ReportCategoriesPfsModel, ReportSetting, UserForm, UserRoles, delayreport } from 'src/app/shared/models/auth.model';
import { Country, PF, profile } from 'src/app/shared/models/country';
import { CCCategory, TranslateText } from 'src/app/shared/models/i18n';
import { STATUS_OPTIONS1 } from 'src/config';
import { getFromStorage, removeFromStorage } from 'src/app/utils/storage';
import { NotEmpty } from 'src/app/utils/validators';

@Component({
  selector: 'app-attribution-details-modal',
  templateUrl: './attribution-details-modal.component.html',
  styleUrls: ['./attribution-details-modal.component.scss']
})
export class AttributionDetailsModalComponent implements OnInit, OnDestroy {
  @Input() headerTitle: TranslateText;
  @Input() formData = {} as ReportCategoriesPfsModel;
  countryList: Country[];
  profilelist: profile[];
  dummyprofile: profile[];
  pflist: RefPlateformes[];
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
  categoryId: number;
  country:string;
  pf:string;
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
    //const { codePlf,plateform,country,isCat,nbr,euro,display, id } = this.formData;
    const { catagoryId,pf,country } = this.formData;

    this.userForm = this.fb.group({
      country: [country],
      catagoryId: [catagoryId],
      pf: [pf],
      // plateform: [plateform, NotEmpty],
      // codePlf: [codePlf],
      // isCat: [isCat],      
      // id: [id],
      // nbr: [nbr],
      // euro:[euro],
      // display:[display]
    });    
    this.profiledata = this.userForm.value.profileName;
    this.selectedName = this.userForm.value.profileName;
    this.selectedProfileName.setValue(this.profiledata);
    this.userForm.get('profileName')?.setValue(this.profiledata);    
    const userdata = getFromStorage('userwer');   
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
    this.loaderService.addRequest(this.countryService.getAllPlateformesWithoutName(this.profiledata, ReportSetting.TwoKPINewDailyPerformanceDelay))
      .subscribe(
        (data: any) => {
          this.pflist = data;
          this.pfoption = _.map(data, item => item.codePlf);
          this.callapi = false;
        }
      )
   
  }
 
  get countryName() {
    this.profiledata = this.userForm.value.country.code;
    this.categoryId = this.userForm.value.country.id;
    return this.userForm.get('country');
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
      const data: ReportCategoriesPfsModel = {
        ..._.omit(this.userForm.value, 'profileName')
      };      
     
     data.catagoryId = this.categoryId;
     data.country = data.pf.country;
      data.pf = data.pf.plateform;     
         
      // if userId is defined then it will update else it will create new
      this.loaderService.addRequest(this.usersService.addReportWeb_CategoryPF(data))
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
