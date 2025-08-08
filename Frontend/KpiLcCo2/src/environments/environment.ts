// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { MatTableDataSource } from "@angular/material/table";
import { reportModel } from "src/app/shared/models/report.model";

export const environment = {
  production: false,
 
  dataglobal: MatTableDataSource<reportModel>,
  api: {
    //baseUrl :'http://freqxwsql04.cat.groupecat.com/api'
  //baseUrl: 'http://localhost:11515/api'
  //baseUrl: 'http://frgnbbir01.cat.groupecat.com:88/co2api/api'
   baseUrl:'http://freqxwsqlr7.cat.groupecat.com/api'
   // baseUrl: 'http://113.96.6.90/CATLCR/api'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
