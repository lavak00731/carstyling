import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarserviceService } from '../services/carservice.service';




@Injectable({
  providedIn: 'root'
})
export class CustomGuardGuard implements CanActivate {

  constructor( private _router: Router, private _carService: CarserviceService) {}
  carSelected: any;
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(route.url !== undefined) {
        return true;
      } else {
        this._router.navigate(['/home']);
      }  
    }
  
}

