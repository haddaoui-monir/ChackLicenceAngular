import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { ListoflicenceComponent } from './listoflicence/listoflicence.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LicenceComponent } from './licence/licence.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HttpIntercepterAuthService } from './service/http/http-intercepter-auth.service';
import { AlertsModule } from 'angular-alert-module'
//import { AlertModule } from './_alert';

  import { from } from 'rxjs';
//import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListofusersComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    ListoflicenceComponent,
    LicenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true,
    }), // ToastrModule added
    FontAwesomeModule,
    AlertsModule.forRoot(),
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterAuthService,multi :true}
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
