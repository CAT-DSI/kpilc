import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { forkJoin, Subscription } from 'rxjs';
import * as _ from 'lodash';
import { STATUS_OPTIONS, USER_ROLE_OPTIONS, EMAIL_REGEX, STATUS_OPTIONS1, Snack, snacks } from 'src/config';
import { getErrorMessage } from 'src/app/utils/utility';
import { NotEmpty } from 'src/app/utils/validators';
import { GenericApiResponse, RecordStatus, Role } from 'src/app/shared/models/app';
import { User, UserForm, UserRoles } from 'src/app/shared/models/auth.model';
import { TranslateText, CCCategory } from 'src/app/shared/models/i18n';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { Country, PF, profile } from 'src/app/shared/models/country';
import { CountryService } from 'src/app/shared/Services/country.service';
import { Console } from 'console';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { getFromStorage, removeFromStorage, saveToStorage } from 'src/app/utils/storage';
import { ToastrService } from 'ngx-toastr';


/*
  add or edit user modal
 */
@Component({
  selector: 'app-save-user-modal',
  templateUrl: './save-user-modal.component.html',
  styleUrls: ['./save-user-modal.component.scss']
})
export class SaveUserModalComponent implements OnInit, OnDestroy {

  @Input() headerTitle: TranslateText;
  @Input() formData = {} as User;
  countryList: Country[];
  profilelist: profile[];
  dummyprofile: profile[];
  pflist: PF[];
  errors = [];
  countryOptions: string[];
  profileoption: string[];
  pfoption: string[];
  pfoption1: string[];
  toppings = new FormControl();
  @Input() multiple? = false;
  subscription = new Subscription();
  inEditMode = false;
  selectedToppings: any;
  dropdownSettings: IDropdownSettings = {};
  callapi: boolean = false;
  checkbox: boolean;
  profiledata: string;
  emailRequiredError: boolean = false;
  invalidEmailError: boolean = false;
  userForm: FormGroup;
  saveError: string;
  params = new Array();
  Appendparams: any;
  Appendparams1: string[];
  statusOptions = STATUS_OPTIONS1;
  userRoleOptions = STATUS_OPTIONS1;
  selectedCountry = "Test";
  selectedName: [];
  roleId: string = '';

  //userRoleOptions=snacks;
  // this is an enum of user role ids for better readability
  userRoles = UserRoles;
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
      roleId: new FormControl(null)
    });
    // this.userForm.controls['profileName'].setValue(this.profiledata, {onlySelf: true});
    loaderService.addRequest(countryService.getProfiles())
      .subscribe(
        (data: any) => {
          debugger
          this.profilelist = data;
          this.pfoption1 = _.map(data, item => item.id);

          //this.profilelist[0].id = _.map(this.profilelist, item => item.profileName);
        }
      );

    // get the geo poles as soon as the modal opens
    // set page index as 0 since we need the full list
    loaderService.addRequest(countryService.getCountries({ pageIndex: 0 }, { status: RecordStatus.ACTIVE }))
      .subscribe(
        (data: any) => {
          this.countryList = data;
          this.countryOptions = _.map(data, item => item.code);
          const selecteddta = getFromStorage('selecteddata');
          this.selectedName = selecteddta;
        }
      );

  }

  get selectedRoleId() { return this.userForm.get('roleId'); }
  get selectedProfileName() { return this.userForm.get('profileName'); }

  get selectedId() { return this.userForm.get('id'); }


  ngOnInit() {

    this.callapi = false;
    const { accessKey, role, status, firstName, lastName, roleId, email, id, pf, Country, restricted, profileName, userid, usertype } = this.formData;

    this.userForm = this.fb.group({
      accessKey: [accessKey, [Validators.required]],
      firstName: [firstName, NotEmpty],
      lastName: [lastName, [Validators.required]],
      roleId: [roleId ? roleId : Role.ADMIN, Validators.required],
      email: [email, [NotEmpty, Validators.pattern(EMAIL_REGEX)]],
      id: [id],
      pf: [pf],
      Country: [Country],
      restricted: [restricted],
      userid: [userid],
      profileName: [profileName, [Validators.required]],
      UserType: [usertype]
    });
    debugger
    this.selectedName = this.userForm.value.profileName == null ? "" : this.userForm.value.profileName;
    this.profiledata = this.userForm.value.profileName;
    if (this.userForm.value.accessKey) {
      this.roleId = this.userForm.value.roleId == 1 ? "Administrator" : "Reader";

    }
    saveToStorage("selecteddata", this.selectedName, true);
    this.selectedProfileName.setValue(this.profiledata);
    this.userForm.get('profileName')?.setValue(this.profiledata);
    this.userForm.controls['profileName'].setValue("Public");
    const userdata = getFromStorage('userwer');
    this.formData.userid = userdata.id;
    removeFromStorage("userdata");


    this.dropdownSettings = {
      idField: 'code',
      textField: 'name',
      itemsShowLimit: 4,

    };

    this.selectedRoleId.setValue(this.inEditMode ? roleId : this.userRoles.READER);
  }


  getAccessKey(): void {

    const email = this.userForm.get('email')?.value;  // Get the email value from the form control
    if (!email) {
      this.emailRequiredError = true;
      this.invalidEmailError = false;
      return;
    }
    this.emailRequiredError = false;
    this.invalidEmailError = false;
    this.loaderService.addRequest(this.usersService.getAccessKey(email))
      .subscribe(
        (response) => {
          if (response && response.samAccountName) {
            // Set the accessKey form control with the 'samAccountName' value
            this.userForm.get('accessKey')?.setValue(response.samAccountName);
          }
        },
        (error) => {
          debugger
          const savedLang = localStorage.getItem('Currentlanguage') || 'en';
          if (savedLang == 'en') {
            error.error = "Unable to retrieve the Windows access key for the given email ID. Please contact the administrator.";
          } else if (savedLang == 'pl') {
            error.error = "Nie można pobrać klucza dostępu systemu Windows dla podanego identyfikatora e-mail. Skontaktuj się z administratorem";
          } else if (savedLang == 'es') {
            error.error = "No se puede recuperar la clave de acceso de Windows para el correo electrónico proporcionado. Comuníquese con el administrador."
          } else if (savedLang == 'de') {
            error.error = "Der Windows-Zugriffsschlüssel für die angegebene E-Mail-ID konnte nicht abgerufen werden. Wenden Sie sich bitte an Ihren Administrator"
          } else if (savedLang == 'fr') {
            error.error = "Impossible de récupérer la clé d'accès Windows pour l'adresse e-mail indiquée. Veuillez contacter l'administrateur."
          }
          this.invalidEmailError = true;
          this.toastr.warning(error.error, 'Warning', {
            timeOut: 4000,
          });
        }
      );
  }


  get lastName() {
    return this.userForm.get('lastName');
  }
  // Country selection
  changeCountry(e) {

    this.countryName.setValue(e.target.value, {
      onlySelf: true
    })
    //this.profiledata=e.target.value;
  }

  get countryName() {
    this.profiledata = this.userForm.value.profileName.profileName;
    return this.userForm.get('profileName');
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

  /*
    on submit form call the save api endpoint if the form is valid
   */
  onSubmit() {
    debugger
    if (this.userForm.invalid) {
      // If the form is invalid, show an error message
      //this.saveError = 'Please fill out all required fields.';
      this.toastr.error('Please fill out all required fields.', 'Error', {
            timeOut: 4000,
          });
      return;
    }
    if (true) {
      const userId = this.formData.id;

      if (this.userForm.valid) {
        console.log(this.userForm.value);


        const data: UserForm = {
          ..._.omit(this.userForm.value, 'profileName')
        };

        data.UserType =
          data.login = _.trim(data.login);

        data.Country = data.Country;
        data.Country = _.map(data.Country, item => item.code);
        data.IsActive = true;
        data.UserType = this.formData.usertype;

        data.UserId = this.formData.userid;
        data.ProfileId = this.userForm.value.profileName.id;


        if (data.ProfileId == undefined || data.ProfileId == null) {
          this.dummyprofile = this.profilelist.filter(a => a.profileName == this.profiledata);
          data.ProfileId = this.dummyprofile[0].id;
        }
        data.restricted = false;

        if (data.roleId == "Reader") {
          data.roleId = 2;
        }
        else if (data.roleId == "Administrator") {
          data.roleId = 1;
        }

        // if userId is defined then it will update else it will create new
        this.loaderService.addRequest(this.usersService.saveUser(data, userId))
          .subscribe(() => this.activeModal.close({ ...this.formData, ...data }),

            err => {
              if (err.status == "200") {
                this.toastr.success("User created successfully", 'Message', {
                  timeOut: 6000, closeButton: true
                });
                this.activeModal.close();

              }
              else {
                this.toastr.error(err.error, 'Message', {
                  timeOut: 6000, closeButton: true
                });
              }
              // this.errors = err.error.message;
              // console.log(this.errors);
            }
          );


      }
    }
  }

}
