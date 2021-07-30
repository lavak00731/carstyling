import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CarInterface } from './../model/car-interface';
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

  getCar(id: number) {
    this._carService.getCarSelected(id).subscribe(
      car => this.selectedCar = car,
      error => {
        this.errors = error;
      }
    );
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
