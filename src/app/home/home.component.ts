import { Component, OnInit } from '@angular/core';
import { CarInterface } from '../model/car-interface';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';
import {Router} from '@angular/router'; // import router from angular router


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _carService: CarserviceService, private _selectionBasket: SelectionBasketService, private route:Router) { }
  cars: CarInterface[];
  ngOnInit(): void {
    this._carService.getCars().subscribe(res => {
      this.cars = res;      
    });    
  }
  carSelection(carId, carCardata) {
    this._selectionBasket.updateCarSelection(carId, carCardata);
    this.route.navigate(['/customize']); // navigate to other page
  }
}
