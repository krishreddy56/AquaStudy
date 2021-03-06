import { Injectable } from '@angular/core';
import { HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError( (error: HttpErrorResponse) => {
         let errMsg = '';
         // Client Side Error
         if (error.error instanceof ErrorEvent) {
           errMsg = `Error: ${error.error.message}`;
         } else  { // Server Side Error
           errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
         }
         window.alert(errMsg);
         return throwError(errMsg);
       })
    );
    }
}
