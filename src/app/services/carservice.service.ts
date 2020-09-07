import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarInterface } from './../model/car-interface';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  constructor(private http: HttpClient) { }
  private carsUrl = 'api/cars';  // URL to web api
    
  getCars(): Observable<CarInterface[]> {
    return this.http.get<CarInterface[]>(this.carsUrl)
  }
}
