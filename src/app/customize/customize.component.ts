import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../services/carservice.service';
import { SelectionBasketService } from '../services/selection-basket.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  constructor(_carservice: CarserviceService, _selection: SelectionBasketService) { }

  ngOnInit(): void {
  }
  

}
