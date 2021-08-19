import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectionBasketService } from '../services/selection-basket.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanActivate {
  constructor( private _router: Router, private _selection: SelectionBasketService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._selection.getSelection()['selection']) {
        return true;
      } else {
        this._router.navigate(['/home']);
      }
  }
  
}
