import { Injectable } from '@angular/core';
//import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8082/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DistanceService {

 constructor(private http: HttpClient) { }

   private extractData(res: Response) {
     let body = res;
     return body || { };
   }

  getShortRoute(node): Observable<any> {
      return this.http.get(endpoint + 'distance/' + node).pipe(
        map(this.extractData));
    }
}
