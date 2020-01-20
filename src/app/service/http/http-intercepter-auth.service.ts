import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BAuthenticationService } from '../b-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAuthService implements HttpInterceptor {

  constructor(
    private bAuthenticationService: BAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'user'
    // let password = '1234'
    // let basicAuthHeaderString ='Basic '+window.btoa(username+":"+password);
    let bAuthenticationService=this.bAuthenticationService.getAuthenticatedToken();
    let username = this.bAuthenticationService.getAuthenticatedUser();
    if(bAuthenticationService && username ){
    request = request.clone({
      setHeaders:{
        Authorization:bAuthenticationService
         }
        })
    }
    return next.handle(request);
  }

}

