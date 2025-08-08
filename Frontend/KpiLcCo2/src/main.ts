import { ViewEncapsulation, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Component, HostListener } from '@angular/core';

if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic().bootstrapModule(AppModule, [
  {
    
    defaultEncapsulation: ViewEncapsulation.None
  }
]);
