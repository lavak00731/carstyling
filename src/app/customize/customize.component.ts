import { Component,OnInit, ViewChild } from '@angular/core';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';
import { NgbCarousel, NgbNavChangeEvent, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  constructor(private _carService: CarserviceService, private _selection: SelectionBasketService, 
    private _activeRoute: ActivatedRoute, private _modal: NgbModal, private _router: Router) { }
 
  errors: any;
  selectedId: number;
  selectedCar: any;
  active;
  priceSum: number = 0;
  selectionColor: Object = {};
  

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
  //update price
  updatePrice(features: any) {
    this.priceSum = 0;
    for (const feature of features) {
      for (const color of feature.colors) {
        if(color.isDefault) {
          this.priceSum += color.price;
        }
      }
     }
  }
  //optional parameters in url setting
  setUrlSelection(obj: Object) {
    this.selectedId = +this._activeRoute.snapshot.paramMap.get('id');
    this._router.navigate(['/customize/'+this.selectedId, obj])
  }
  //read option parameters in url
  readUrl() {
    console.log(this._activeRoute.snapshot.paramMap.get('id'))
  }
  //get option
  selectOption(event: any ) {
    let custValue: Array<string> = event.target.value.split(" ");
    //setting color for picture
    for( const side of this.selectedCar.pictures) {
      for( const part of side) {
        if(part.part === custValue[0]) {
          for(const color of part.colors) {
            color.isSelected = false;
            if(custValue[1] !== 'white' && color.color === custValue[1]+' '+custValue[0]) {
              color.isSelected = true;
            }
          }        
        }
      }      
    }
    //setting color selected
    for( const part of this.selectedCar.features) {
      if( part.option === custValue[0] ) {
        for( const color of part.colors) {
          color.isDefault = false;
          if(color.colorName === custValue[1] ) {
            color.isDefault = true;
            //url with color
            if(color.colorName === 'white') {
              delete this.selectionColor[part.option];
            } else {
              this.selectionColor[part.option] = color.colorName;
            }
            this.setUrlSelection(this.selectionColor);
          }
        }        
      }
    }
    this.updatePrice(this.selectedCar.features);
  }
  //open modal
  open(content) {
    this._modal.open(content,  { centered: true });
  }

   ngOnInit() {
    this._activeRoute.paramMap.subscribe(
      params => {
        this.selectedId = +params.get('id');
      }
    );
    this.getCar(this.selectedId); 
    this.readUrl();
  } 
}
