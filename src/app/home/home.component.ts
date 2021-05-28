import { Component, OnInit } from '@angular/core';
import { CarInterface } from '../model/car-interface';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _carService: CarserviceService, private _selectionBasket: SelectionBasketService) { }
  cars: CarInterface[];
  ngOnInit(): void {
    this._carService.getCars().subscribe(res => {
      this.cars = res;      
    });    
  }
  carSelection(carId, carCardata) {
    this._selectionBasket.updateCarSelection(carId, carCardata)
  }
}
