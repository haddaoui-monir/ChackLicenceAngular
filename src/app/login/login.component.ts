import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import {BAuthenticationService} from '../service/b-authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user'
  errorMessage='Invalid Credentials'
  invalidLogin = false
  password ='12345'
  //router angular give me Router 
  //and you can use dependency injection
  constructor(private router: Router,
     private hardeCodeAuthServ : HardcodeAuthenticationService,
    private bAuthService:BAuthenticationService) {
   }
  ngOnInit() {
  }
  handleJWTAuthLogin(){
    //console.log(this.username);
      // if(this.username=="ss" && this.password=="ss")
      this.bAuthService.executeJWTAuthenticationService
        (this.username,this.password)
        .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['licences']);
          this.invalidLogin =false;
           },
        error=>{
           console.log(error);
           this.invalidLogin = true;
          }  
       )
    }   
  handleBasicAuthLogin(){
    if(this.hardeCodeAuthServ.authenticate(
      this.username,this.password)){
      this.invalidLogin =  false
      this.router.navigate(['welcome', this.username])
    }else this.invalidLogin = true 
  }

}
