import { Component, OnInit } from '@angular/core';
import { CarInterface } from '../model/car-interface';
import { CarserviceService } from '../services/carservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _carService: CarserviceService) { }
  cars: CarInterface[];
  ngOnInit(): void {
    this._carService.getCars().subscribe(res => {
      this.cars = res;
      console.log(this.cars)
    });
    ;
  }

}
