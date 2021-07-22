import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';
import { Router } from '@angular/router'; // import router from angular router
import { catchError } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  {

  constructor( private _carService: CarserviceService, private _selectionBasket: SelectionBasketService, private route:Router) { }
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();


  cars$ =  this._carService.cars$
            .pipe(
              catchError( err =>{
                this.errorMessageSubject.next(err);
                return EMPTY;
              })
            )
       
  
  private carSelection(carId: string, carCardata: string) {
    this._selectionBasket.updateCarSelection(carId, carCardata);
    this.route.navigate(['/customize']); // navigate to other page
  }

}
