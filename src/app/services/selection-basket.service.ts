import { Injectable } from '@angular/core';

import { CarBluePrint } from '../services/car-blue-print';
@Injectable({
  providedIn: 'root'
})
export class SelectionBasketService {

  constructor(carSelection: CarBluePrint) { }
  updateCarSelection(...prop) {
    
  }
  
}
