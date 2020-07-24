import { HttpRequest, HttpResponse, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if (currentUser && currentUser.token) {
            console.log("blaaa" + currentUser)
            request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${currentUser.token}`
                }
            })
        }
        return next.handle(request)
            .pipe(tap((res: HttpEvent<any>) => {
                if (res instanceof HttpResponse && res.body.token) {
                    this.saveToken(res.body)
                }
            }))
    }
    private saveToken(data){
        localStorage.setItem('currentUser', JSON.stringify({
            "username" : data.user.name,
            "token" : data.token
        }))
    }
}