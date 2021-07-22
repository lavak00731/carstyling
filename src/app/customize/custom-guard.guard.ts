import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectionBasketService } from '../services/selection-basket.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomGuardGuard implements CanActivate {

  constructor(private _selection: SelectionBasketService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._selection.checkSelectedCar()) {
      return true;
    } else {
      this._router.navigate(['/home']);
    }
  }
  
}

