import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { createMask } from '@ngneat/input-mask';

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
  dateObjforCC = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'mm/yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      return new Date(year, month);
    },
  });
  phoneMask = createMask('9-(999)-999-9999');
  creditCardMask = createMask('9999 9999 9999 9999');
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
  
  //user form data
  clientProfile = new FormGroup({
    personalData: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('')
    }),
    paymentMethod: new FormGroup({
      ccard: new FormControl(''),
      cardholdername: new FormControl(''),
      expDate: new FormControl(''),
      secNumber: new FormControl('')
    })
  })
}
