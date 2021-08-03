import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';
import { NgbCarousel, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit, OnDestroy {

  constructor(private _carService: CarserviceService, private _selection: SelectionBasketService, private _activeRoute: ActivatedRoute) { }
 
  errors: any;
  selectedId: number;
  selectedCar: any;
  active;
  @ViewChild('carCarousel') carCarousel: NgbCarousel;
  //get selected car info
  getCar(id: number) {
    this._carService.getCarSelected(id).subscribe(
      car => this.selectedCar = car,
      error => {
        this.errors = error;
      }
    );
   }
  //get Nav change
  onNavChange(changeEvent: NgbNavChangeEvent) {

    switch (changeEvent.nextId) {
      case 'front':
      case 'sides':
      case 'hood':
        this.carCarousel.select('ngb-slide-0');
        break;
      case 'back':
        this.carCarousel.select('ngb-slide-1');
        break;
      case 'roof':
        this.carCarousel.select('ngb-slide-5');
        break;
      default:
        console.log(`Error`);
    }
  }
   ngOnInit() {

    this._activeRoute.paramMap.subscribe(
      params => {
        this.selectedId = +params.get('id');
      }
    );
     this.getCar(this.selectedId); 


  } 

  ngOnDestroy(): void {
    this.selectedCar.unsubscribe();
  }

  
  

}
