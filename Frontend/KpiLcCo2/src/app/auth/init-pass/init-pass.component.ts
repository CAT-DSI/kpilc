import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-init-pass',
  templateUrl: './init-pass.component.html',
  styleUrls: ['./init-pass.component.scss']
})
export class InitPassComponent implements OnInit {
error: string;
token: string | any;
formInit: FormGroup;
formSend: FormGroup;

constructor(private authS: AuthService, private router: Router, private route: ActivatedRoute) {
  this.token = this.route.snapshot.paramMap.get('code');
 }

ngOnInit(): void {
  this.formInit = new FormGroup({
    password: new FormControl('', Validators.required)
  });

  this.formSend = new FormGroup({
    email: new FormControl('', Validators.required)
  });
}

  submitSend(){
    if(this.formSend.valid){

      this.authS.sendInitPass({mail:this.formSend.controls['email'].value}).subscribe((result:any) => {
        if(result) {
          this.router.navigate(['/login']);
        } else this.error = "This email is not registered";
      });
    }
  }

  submitInit(){
    if(this.formInit.valid){
      this.authS.initPass({'password':this.formInit.controls['password'].value, 'token':this.token}).subscribe((result:any) => {
        if(result) {
          this.router.navigate(['/login']);
        } else this.error = "Error occurend";
      });
    }
  }

}
