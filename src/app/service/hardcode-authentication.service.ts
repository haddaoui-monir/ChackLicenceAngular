import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username,password){
    // console.log('Befor '+this.isUserLoggedIn())
     if(username==="admin" && password===""){
     //  console.log('After '+this.isUserLoggedIn())
       sessionStorage.setItem('authonticaterdUser',username)
        return true;
     }
     return false;
   } 
   isUserLoggedIn(){
     let user =sessionStorage.getItem('authonticaterdUser')
      return !(user===null)
   }
   logout(){
     sessionStorage.removeItem('authonticaterdUser')
   }
}
