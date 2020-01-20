import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BAuthenticationService } from '../service/b-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardeCodeAuthServ : HardcodeAuthenticationService,
    private AuthServJwt : BAuthenticationService

  ) { }

  ngOnInit() {
   // this.hardeCodeAuthServ.logout()
    this.AuthServJwt.logout();
  }

}
