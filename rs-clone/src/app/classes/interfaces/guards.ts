import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { NewserviceService } from "src/app/newservice.service";

@Injectable({
  providedIn: 'root'
})

export class Guards implements CanActivate, CanActivateChild {

  constructor (private serv: NewserviceService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.serv.isAuth()) {
      return of (true);
    } else {
      this.router.navigate(['/login']);
    }
    return of (false);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.canActivate(route, state);
  }
}

