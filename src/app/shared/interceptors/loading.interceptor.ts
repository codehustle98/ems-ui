import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {LoaderService} from "../services/loader.service";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor{

  constructor(private _loadService:LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this._loadService.show();
    return next.handle(req).pipe(
      finalize(() => this._loadService.hide())
    );
  }

}
