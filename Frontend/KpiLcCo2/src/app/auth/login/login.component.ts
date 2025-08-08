import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginModel } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/Services/auth.service';
import { saveToStorage } from 'src/app/shared/Util/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;
  form: FormGroup;
  logins: loginModel;
  constructor(private authS: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submit(){
    if(this.form.valid){
      this.logins = {password: this.form.controls['password'].value, login: this.form.controls['login'].value}
      this.authS.authenticate(this.logins).subscribe((result:any) => {
        if(result == true){
          ;this.router.navigate(['/login'])
        } else {
          this.error = result.error.error;
        }

      });
    }
  }
  ngAfterViewInit() {

  }
}
