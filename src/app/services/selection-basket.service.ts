import { Injectable } from '@angular/core';

import { CarBluePrint } from '../services/car-blue-print';
@Injectable({
  providedIn: 'root'
})
export class SelectionBasketService {
  carBucket = CarBluePrint;
  constructor() { }
  updateCarSelection(...prop) {
    this.carBucket['id'] = prop[0];
    this.carBucket['cardata'] = prop[1];
  }
  getCarSelection() {
    return this.carBucket['id'];
  }
  checkSelectedCar() {
    return this.carBucket['cardata'] !== undefined;
  }
}
