import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerCountriesModel} from 'src/app/shared/models/auth.model';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/Services/users.service';
import { LoaderService } from 'src/app/shared/Services/loader.service';
import { TranslateText } from 'src/app/shared/models/i18n';

@Component({
  selector: 'app-countries-major-customer-modal',
  templateUrl: './countries-major-customer-modal.component.html',
  styleUrls: ['./countries-major-customer-modal.component.scss']
})
export class CountriesMajorCustomerModalComponent implements OnInit, OnDestroy {  
  @Input() headerTitle: TranslateText;
  @Input() formData = {} as CustomerCountriesModel; 
  userForm: FormGroup;
  enabledForMajorCustomerReport: boolean;  
  saveError: string;
  callapi: boolean = false;

constructor(
  public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private usersService: UsersService,
    private loaderService: LoaderService
) { 
  
}

get selectedId() { return this.userForm.get('id'); }

  ngOnInit(): void {
    this.callapi = false;
    const { id, code, name,enabledForMajorCustomerReport } = this.formData;

    this.userForm = this.fb.group({
      code: [code],
      name: [name],      
      enabledForMajorCustomerReport: [enabledForMajorCustomerReport],
      id: [id],     
    });
    this.enabledForMajorCustomerReport = this.userForm.value.isdelay;
  }

  ngOnDestroy(): void {}

   setAll(e) {
    this.enabledForMajorCustomerReport = e;
  }
  onSubmit() {
    if (true) {
      const data: CustomerCountriesModel = {
        ..._.omit(this.userForm.value, 'profileName')
      };
     
      data.id = this.userForm.value.id;
      data.code = data.code;
      data.name = data.name;
      data.enabledForMajorCustomerReport = this.enabledForMajorCustomerReport;
      if (data.enabledForMajorCustomerReport == null) {
        data.enabledForMajorCustomerReport = false;
      }
      // if userId is defined then it will update else it will create new
      this.loaderService.addRequest(this.usersService.updateMajorCustomerCountry(data))
        .subscribe(

          () => this.activeModal.close({ ...this.formData, ...data }),

          err => {
            this.toastr.error(err.error, 'Message', {
              timeOut: 6000, closeButton: true
            });
            // this.errors = err.error.message;
            // console.log(this.errors);
          }
        );
    }
  }
}
