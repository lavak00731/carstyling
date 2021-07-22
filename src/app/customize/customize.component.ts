import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizeComponent implements OnInit {
  constructor(private _carService: CarserviceService, private _selection: SelectionBasketService) { }
  private errorMessageSubject = new Subject<string>();
  private errorMessage$ = this.errorMessageSubject.asObservable();
  elemSelected: object;
  cars$ =  this._carService.cars$
            .pipe(
              catchError( err =>{
                this.errorMessageSubject.next(err);
                return EMPTY;
              })
            );
selectionOnService: number  = this._selection.getCarSelection();




    
  ngOnInit(): void {
   this.cars$.subscribe(elem => {
    for( let key in elem) {
      if(elem[key]['id'] === this.selectionOnService) {        
        this.elemSelected = elem[key];
        console.log(this.elemSelected);
      }

    }
    
      
    });


  }

  
  

}
