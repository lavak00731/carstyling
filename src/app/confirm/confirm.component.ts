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
        const year = parseInt(values[1]);
        const month = parseInt(values[0]) - 1;
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
  expDateValid(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      if(control.value !== '') {
        let isValidDate = false;
        const now = new Date();
        const expDate = control.value;
        if (now > expDate) {
          isValidDate = true;
        }
        return isValidDate ? {creditDateExp: true} : null;
      }      
    }
  }
  //credit card number validation
  creditValidation(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const creditCards = {
        amex: new RegExp('/^3[47]\d{13,14}$/'),
        visa: new RegExp('^4[0-9]{12}(?:[0-9]{3})?$'),
        cup1: new RegExp('^62[0-9]{14}[0-9]*$'),
        cup2: new RegExp('^81[0-9]{14}[0-9]*$'),      
        mastercard: new RegExp('^5[1-5][0-9]{14}$'),
        mastercard2: new RegExp('^2[2-7][0-9]{14}$'),      
        disco1: new RegExp('^6011[0-9]{12}[0-9]*$'),
        disco2: new RegExp('^62[24568][0-9]{13}[0-9]*$'),
        disco3: new RegExp('^6[45][0-9]{14}[0-9]*$'),        
        diners: new RegExp('^3[0689][0-9]{12}[0-9]*$'),
        jcb: new RegExp('^35[0-9]{14}[0-9]*$')
      }
         
      let isValid = false;
      let valueFormated = control.value.replace(/\s/g, '');
      valueFormated = valueFormated.replace('_', '');
      
      for ( const cc in creditCards) {
        if (creditCards[cc].test(valueFormated)) {
          isValid = true;
        }
      }
      console.log(isValid);
      return isValid ? {creditCardValid: true} : null;        
    }
  }
  
  //user form data
  clientProfile = new FormGroup({
    personalData: new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,}$/)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,}$/)]),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])
    }),
    paymentMethod: new FormGroup({
      ccard: new FormControl('', [Validators.required, this.creditValidation()]),
      cardholdername: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{6,}$/)]),
      expDate: new FormControl('', [Validators.required, this.expDateValid()]),
      secNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{3,4}$/)])
    })
  })
  validateForm() {
    if(this.clientProfile.valid) {
      this.formValidity = false;
      console.log(this.clientProfile);
    } else {
      this.formValidity = true;
      //focus on error banner
      setTimeout(() => {
        this.errorBanner.nativeElement.focus()
      });

      for (const key in this.clientProfile.controls) {
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


