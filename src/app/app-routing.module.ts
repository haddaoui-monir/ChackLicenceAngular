import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ListoflicenceComponent } from './listoflicence/listoflicence.component';
import { LicenceComponent } from './licence/licence.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'users', component:ListofusersComponent,canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent},
  {path:'licences', component:ListoflicenceComponent},
  {path:'licences/:id', component:LicenceComponent},

  {path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
