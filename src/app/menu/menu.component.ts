import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BAuthenticationService } from '../service/b-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn:boolean = false;

  constructor(
    private hardeCodeAuthServ : HardcodeAuthenticationService,
    private authServ : BAuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardeCodeAuthServ.isUserLoggedIn()
    this.isUserLoggedIn = this.authServ.isUserLoggedIn();

  }

}
