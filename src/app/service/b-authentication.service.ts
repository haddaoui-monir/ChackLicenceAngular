import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { LS_LOCAL } from '../app.constants';
export const TOKEN= 'token'
export const AUTHENTICATED_USER='authonticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BAuthenticationService {
  constructor(private http:HttpClient) { }  
  executeJWTAuthenticationService(username,password){
    return this.http.post<any>(
      `${LS_LOCAL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data=>{
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
            return data;
          }
        )
      );
    }
  // executeAuthenticationService(username,password){
  //   let basicAuthHeaderString ='Basic '+window.btoa(username+":"+password);
  //   let headers = new HttpHeaders({
  //     Authorization:basicAuthHeaderString
  //   })
  //   return this.http.get<AuthenticationBean>(
  //     `http://localhost:8080/basicauth`,
  //     {headers:headers}).pipe(
  //       map(
  //         data=>{
  //           sessionStorage.setItem(AUTHENTICATED_USER,username);
  //           sessionStorage.setItem(TOKEN,basicAuthHeaderString);
  //           return data;
  //         }
  //       )
  //     );
  //   }
  getAuthenticatedUser(){
    return  sessionStorage.getItem(AUTHENTICATED_USER)
  }
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return  sessionStorage.getItem(TOKEN)
  }
  isUserLoggedIn(){
    let user =sessionStorage.getItem(AUTHENTICATED_USER)
     return !(user===null)
  }
  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)

  }
}


export class AuthenticationBean{
  constructor(public message:String){}
}

