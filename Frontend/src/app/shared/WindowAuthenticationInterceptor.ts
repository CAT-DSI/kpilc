import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpResponse, HttpEventType } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { request } from "http";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class WindowAuthenticationInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({ withCredentials: true });
        // return next.handle(req);
        return next.handle(req);

        
            // .pipe(
            //     // tap((event) => {
            //     //     if (event instanceof HttpResponse) {
            //     //         console.log('window auth', event);
            //     //     }
            //     // })
            //     catchError(error => of(null))
            // )
            
    }
}