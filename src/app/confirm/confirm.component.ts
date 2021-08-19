import { Component, OnInit, ViewChild } from '@angular/core';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private _carService: CarserviceService, private _selection: SelectionBasketService) { }
  selectedCar: object = {};
  errors: any;
  @ViewChild('carCarousel') carCarousel: NgbCarousel;
  //get selected car info
  getCar(id: number) {
    this._carService.getCarSelected(id).subscribe(
      car => {
        this.selectedCar = car;
      },
      error => {
        this.errors = error;
      }
    );
   }
  ngOnInit(): void {
  }

}
