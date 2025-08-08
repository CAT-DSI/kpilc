import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { getFromStorage } from '../Util/storage';

const _settings = [
  //{url:'/GlobalConfiguration/', title:'Global configuration', active:false},
  {url:'/ReportConfiguration/', title:'Report configuration', active:false},
  //{url:'/CategoryConfiguration/', title:'Category configuration', active:false}
]

@Component({
  selector: 'app-setting-layout',
  templateUrl: './setting-layout.component.html',
  styleUrls: ['./setting-layout.component.scss']
})
export class SettingLayoutComponent implements OnInit {
  settings:any=_settings;
  user = getFromStorage('user');
  constructor(private route:Router,private auth: AuthService) {
   }

   logout = () => {
    this.auth.logout();
  }
  
  ngOnInit(): void {
    this.route.events.subscribe(() => {
      let _url = this.route.url.substr(0, this.route.url.lastIndexOf('/') + 1);
      this.settings.forEach(element => {
        element.active = (element.url == _url);
      });
    });
  }

}
