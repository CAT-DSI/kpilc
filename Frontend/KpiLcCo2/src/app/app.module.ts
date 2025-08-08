import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportingModule } from './reporting/reporting.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';
import { SettingModule } from './setting/setting.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatDividerModule } from '@angular/material/divider';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderRouterModule, NgxUiLoaderConfig } from "ngx-ui-loader";
import { AuthModule } from './auth/auth.module';
import { ErrorAlerter } from './shared/Util/ErrorHandler';
import { interceptor } from './shared/Util/interceptor';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { CustomMissingTranslationHandler, createTranslateLoader } from 'src/app/shared/Services/i18n.service';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { WindowAuthenticationInterceptor } from 'src/app/shared/WindowAuthenticationInterceptor';
import { ConfigurationModule } from './Administration/configuration.module';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de'
import localepo from '@angular/common/locales/es';
import localepoExtra from '@angular/common/locales/extra/es'
import localepl from '@angular/common/locales/pl';
import localeplExtra from '@angular/common/locales/extra/pl';
import { ExcelService } from 'src/app/shared/Services/excel.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CriteriaComponent } from './shared/criteria/criteria.component';
import { NgbActiveModal, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileModalcomponent } from './Administration/users/User-Profile-Modal/User-Profile-Modal.component';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CUSTOM_DATE_FORMATS, CustomDatePickerAdapter } from './shared/Pipes/date-adapter';
import { localstoarage } from './shared/Util/localstorage';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { DataService } from './shared/Services/data.service';
import { Globals } from './shared/models/Global';
import { AuthService } from './shared/Services/auth.service';
import { ReportsComponent } from './reporting/reports/reports.component';
import { NgxLazyLoadModule } from 'ngx-lazy-load';

registerLocaleData(localeFr);
registerLocaleData(localeDe, 'de', localeDeExtra);
registerLocaleData(localepo, 'es', localepoExtra);
registerLocaleData(localepl, 'pl', localeplExtra);

const ngxUiLoaderConfig: NgxUiLoaderConfig  =
{
  "bgsColor": "rgba(206,177,177,0.09)",
  "bgsOpacity": 0.2,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "cube-grid",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#4e93ff",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "cube-grid",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#4e93ff",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReportingModule,
    AuthModule,
    RouterModule,
    RouterOutlet,
    NgxLazyLoadModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    NgMatSearchBarModule,
    MatDividerModule,
    MatTabsModule,
    NgxUiLoaderModule,
    NgSelectModule, 
    ToastrModule.forRoot({  preventDuplicates: true}),   
    NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxWebstorageModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler
      }
    }),
    HttpClientModule,    
  ],
  providers: [ 
    Globals,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: WindowAuthenticationInterceptor,
    multi:true
  },
  
 
  {provide: DateAdapter, useClass: CustomDatePickerAdapter},
  {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS},
  CriteriaComponent,
  NgbActiveModal,
  interceptor],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


