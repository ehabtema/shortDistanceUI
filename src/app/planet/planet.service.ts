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
export class PlanetService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPlanets(): Observable<any> {
    return this.http.get(endpoint  + 'planets' ).pipe(
      map(this.extractData));
  }

  getPlanet(id): Observable<any> {
    return this.http.get(endpoint + 'planets/' + id).pipe(
      map(this.extractData));
  }

  addPlanet (planet): Observable<any> {
    console.log(planet);
    return this.http.post<any>(endpoint + 'planets' , JSON.stringify(planet), httpOptions).pipe(
      tap((planet) => console.log(`added planet id=${planet.id}`)),
      catchError(this.handleError<any>('addPlanet'))
    );
  }

  updatePlanet (id, planet): Observable<any> {
    return this.http.post(endpoint  + 'planets/' + id, JSON.stringify(planet), httpOptions).pipe(
      tap(_ => console.log(`updated planet id=${id}`)),
      catchError(this.handleError<any>('updatePlanet'))
    );
  }

  deletePlanet(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'planets/delete/' + id, httpOptions).pipe(
      tap(_=> console.log(`deleted planet id=${id}`)),
      catchError(this.handleError<any>('deletePlanet'))
    );
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
