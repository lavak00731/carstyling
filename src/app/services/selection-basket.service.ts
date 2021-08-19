import { Injectable } from '@angular/core';

import { CarBluePrint } from '../services/car-blue-print';
@Injectable({
  providedIn: 'root'
})
export class SelectionBasketService {
  private carBucket = CarBluePrint;
  private selection: Object = {};
  constructor() { }
  updateCarSelection(car: Object) {
    this.carBucket['id'] = car['id'];
    this.carBucket['cardata'] = car['cardata'];
    for (const feature of car['features']) {
      for (const color of feature.colors) {
        if(color.isDefault) {
          this.selection[feature.option] = color.colorName;
        }
      }
    }
    this.carBucket['selection'] = this.selection;
  }
  getSelection() {
    return this.carBucket;
  }
}
