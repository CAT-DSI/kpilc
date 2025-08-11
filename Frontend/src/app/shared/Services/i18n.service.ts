import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { TranslateService, MissingTranslationHandler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as _ from 'lodash';

import { I18N_LANGUAGES, LANGUAGE_KEY } from 'src/config';
import { getFromStorage, saveToStorage } from 'src/app/shared/Util/storage';
import { CorporateCode } from '../models/i18n';
import { HttpHelperService } from './http-helper.service';
import { LoaderService } from './loader.service';
import { DateAdapter } from '@angular/material/core';


/*
  service for internationalization, language translations
  it also implements the corporate code services as its part internationalization
 */
@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private currentLangSource = new BehaviorSubject<string>(null);
  currentLangId = this.currentLangSource.asObservable();

  corporateCodes = new BehaviorSubject<CorporateCode[]>([]);

  constructor(
    private translateService: TranslateService,
    private httpHelper: HttpHelperService,
    private loaderService: LoaderService,
    private translate: TranslateService, private dateAdapter: DateAdapter<Date>
  ) { }


  /*
    intialize user language, based on if user has chosen a language and its stored in storage
    else get the locale language of user from browser else default to english
   */
  initLanguage() {
    // check to see if there is a language stored in browser storage
    const storedLangId = getFromStorage(LANGUAGE_KEY);

    // the users local/browser language
    const browserLang = navigator.language;
    const langsSupported = _.map(I18N_LANGUAGES, lang => lang.id);

    const langId = storedLangId || (_.includes(langsSupported, browserLang) ? browserLang : I18N_LANGUAGES[0].id);

    this.translateService.use(langId);
    this.currentLangSource.next(langId);
  }


  /*
    set a new language
   */
  setLanguage(langId: string) {
    saveToStorage(LANGUAGE_KEY, langId, true);
    this.translateService.use(langId);
    this.currentLangSource.next(langId);
    this.translate.use(langId);
    this.dateAdapter.setLocale(langId);
    

    // fetch corporate codes for the selected lang
    this.loaderService.addRequest(this.getCorporateCodes())
      .pipe(take(1))
      .subscribe(codes => this.corporateCodes.next(codes));
  }


  /*
    get corporate codes for the current language passed in request header
   */
  getCorporateCodes(): Observable<CorporateCode[]> {
    // take the current language and get corporate codes
    return this.currentLangId.pipe(
      switchMap((langId: string) => {
        const headers = new HttpHeaders().set('Accept-Language', langId);
        return this.httpHelper.get('/corporateCode', { headers });
      })
    );
  }
}

// missing translation handler, to implement support of passsing defaultText as interpolateParams
// in case a translation is not found in the i18n lang json files
export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: { key: string, interpolateParams?: any }) {
    const { interpolateParams } = params;
    const hasDefault = interpolateParams && interpolateParams.default;
    return hasDefault ? interpolateParams.default : '__translate__';
  }
}

// loads translation json files with http
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
