import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarInterface } from './../model/car-interface';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { getCommentRange } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  constructor(private http: HttpClient) { }
  private carsUrl = 'api/cars';  // URL to web api

 cars$ = this.http.get<CarInterface[]>(this.carsUrl) 
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    ); 
  getCarSelected (id: number) {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<CarInterface[]>(url) 
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    ); 
  }
    


  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
  
    return throwError(errorMessage);
  }

}
