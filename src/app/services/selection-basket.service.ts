import { Injectable } from '@angular/core';

import { CarBluePrint } from '../services/car-blue-print';
@Injectable({
  providedIn: 'root'
})
export class SelectionBasketService {
  carBucket = CarBluePrint;
  constructor() { }
  updateCarSelection(...prop) {
    console.log(prop)
  }
  
}
