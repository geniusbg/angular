import { HttpEvent, HttpResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(catchError((err: HttpErrorResponse) => {
                switch (err.status) {
                    case 401:
                    this.toastr.success(err.error.message, "Warning !")
                        break
                    case 400:
                        break
                }
                return throwError(err.status); {
                }
            }))
    }

}