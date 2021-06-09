import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectionBasketService } from '../services/selection-basket.service';

@Injectable({
  providedIn: 'root'
})
export class CustomGuardGuard implements CanActivate {
  constructor(_carService: SelectionBasketService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
