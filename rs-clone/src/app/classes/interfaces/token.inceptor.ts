import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NewserviceService } from "../../newservice.service";

@Injectable()
export class TokenInt implements HttpInterceptor {
  constructor(private serv: NewserviceService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('auth-tok')) {
      req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('auth-tok')}`}
      });
    }
    return next.handle(req);
  }

}
