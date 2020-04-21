import { Injectable } from '@angular/core';
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
export class RouteService {

  constructor(private http: HttpClient) { }

    private extractData(res: Response) {
      let body = res;
      return body || { };
    }

    getRoutes(): Observable<any> {
      return this.http.get(endpoint  + 'routes' ).pipe(
        map(this.extractData));
    }

    getRoute(id): Observable<any> {
      return this.http.get(endpoint + 'routes/' + id).pipe(
        map(this.extractData));
    }

    addRoute (route): Observable<any> {
      console.log(route);
      return this.http.post<any>(endpoint + 'routes' , JSON.stringify(route), httpOptions).pipe(
        tap((route) => console.log(`added route id=${route.routeId}`)),
        catchError(this.handleError<any>('addRoute'))
      );
    }

    updateRoute (id, route): Observable<any> {
      return this.http.post(endpoint  + 'routes/' + id, JSON.stringify(route), httpOptions).pipe(
        tap(_ => console.log(`updated route id=${id}`)),
        catchError(this.handleError<any>('updateRoute'))
      );
    }

    deleteRoute(id): Observable<any> {
      return this.http.delete<any>(endpoint + 'routes/delete/' + id, httpOptions).pipe(
        tap(_=> console.log(`deleted route id=${id}`)),
        catchError(this.handleError<any>('deleteRoute'))
      );
    }

    handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}
