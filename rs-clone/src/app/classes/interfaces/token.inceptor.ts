import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NewserviceService } from "../../newservice.service";

@Injectable()
export class TokenInt implements HttpInterceptor {
  constructor(private serv: NewserviceService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.serv.isAuth()) {
      req = req.clone({ setHeaders:
          {
            Authorization: this.serv.getToken() as string,
          }
        }
      );
    }
    return next.handle(req);
  }

}
