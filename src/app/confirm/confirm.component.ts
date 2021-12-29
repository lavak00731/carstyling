import { Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
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
  formValidity: boolean = false;
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
  @ViewChild('errorBanner') errorBanner: ElementRef;
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
  creditValidation(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
      const amexpRegEx = /^(?:3[47][0-9]{13})$/;
      const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
      let isValid = false;
      let valueFormated = control.value.replace(/\s+/g, '');
      if (visaRegEx.test(valueFormated) || mastercardRegEx.test(valueFormated) || amexpRegEx.test(valueFormated) || discovRegEx.test(valueFormated)) {
        isValid = true;
      } 

      return isValid ? {creditCardValid: true} : null;        
    }
  }
  
  //user form data
  clientProfile = new FormGroup({
    personalData: new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email])
    }),
    paymentMethod: new FormGroup({
      ccard: new FormControl('', [Validators.required, Validators.minLength(3),  this.creditValidation()]),
      cardholdername: new FormControl('', [Validators.required, Validators.minLength(2)]),
      expDate: new FormControl('', [Validators.required, Validators.minLength(3)]),
      secNumber: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  })
  validateForm() {
    if(this.clientProfile.valid) {
      this.formValidity = false;
    } else {
      this.formValidity = true;
      //focus on error banner

      setTimeout(() => {
        this.errorBanner.nativeElement.focus()
      })

      for (const key in this.clientProfile.controls) {
        //console.log(this.clientProfile.controls[key]['controls'])
        for ( const innerProp in this.clientProfile.controls[key]['controls']) {
          this.clientProfile.controls[key]['controls'][innerProp].markAsTouched();
        }
      }
    }
  }
  sendingForm(){
    this.validateForm();    
  }
}


