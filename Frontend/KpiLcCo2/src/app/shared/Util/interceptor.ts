import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { getFromStorage } from './storage';
import { catchError } from 'rxjs/operators';

@Injectable()
export class interceptor implements HttpInterceptor {

    constructor(private auth: AuthService){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${getFromStorage("isauth").token}`,
            'Content-Type': 'application/json'
          }
        });
        return next.handle(request).pipe(
          catchError(
            (err, caught) => {
              if (err.status === 401) {
                this.auth.logout();
                return of(err);
              }
              throw err;
            }
          )
        );
      }
}