import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit, OnDestroy {

  constructor(private _carService: CarserviceService, private _selection: SelectionBasketService,
  private  _location: Location) { }
  selectedCar: object = {};
  service: any;
  errors: any;
  @ViewChild('carCarousel') carCarousel: NgbCarousel;
  //update object
  updateObject(selection: object) {
    for (const arrayOfPictures of this.selectedCar['pictures']) {
      for (const picture of arrayOfPictures) {
        for (const color of picture.colors) {
          for (const opt in selection) {
            color.isSelected = false;
            let colorName = color.color.split(" ");
            if (selection[picture.part] === colorName[0]) {
              color.isSelected = true;
            }
          }
        }
      }
    }
  }
  //get selected car info
  getCar(id: number) {
     this.service = this._carService.getCarSelected(id).subscribe(
      car => {
        this.selectedCar = car;
        this.updateObject(this._selection.getSelection()['selection']);
      },
      error => {
        this.errors = error;
      }
    );
   }
   goingBack() {
    this._location.back();
  } 
  ngOnInit(): void {
    this.getCar(+this._selection.getSelection()['id']);    
  }

  ngOnDestroy(): void {
    this.service.unsubscribe();
  }

}
