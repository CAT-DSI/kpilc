import {Injectable} from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

 import {IPosts} from "src/app/shared/models/posts";
 
 @Injectable()
 export class ApiService {
 
     private _postsURL = "https://my-json-server.typicode.com/typicode/demo/posts";
 
     constructor(private http: HttpClient) {
     }
 
    //  getPosts(): Observable<IPosts[]> {
    //      return this.http
    //          .get(this._postsURL)
    //          .map((response: HttpResponse<any>) => {
    //              return <IPosts[]>response.();
    //          })
    //          .catch(this.handleError);
    //  }
 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }