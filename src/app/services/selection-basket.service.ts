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
    console.log(prop);
    console.log(this.carBucket);
    

  }
  
}
