import { Component, OnInit } from '@angular/core';
import { Licence, Client } from '../listoflicence/listoflicence.component';
import { LicenceDataService } from '../service/data/licence-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDataService } from '../service/data/client-data.service';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.css']
})
export class LicenceComponent implements OnInit {
  id: number
  fabackward = faBackward
  //value:string
  licence:Licence
  client : Client
  //licencekey:Licencekey

constructor(private licenceService: LicenceDataService,
  private clientService: ClientDataService,
  private route:ActivatedRoute, 
  private router:Router) { }

ngOnInit() {
  this.id = this.route.snapshot.params['id'];
  this.licence= new Licence(this.id, new Date, new Date(),'',0,'','','');
  if(this.id !=-1){
      this.licenceService.retrieveLicences(this.id)
         .subscribe(
           data=> this.licence = data
        )
      }
 }
//  getkey(){
//         //console.log(this.licenceService.retrieveLicencesKey(this.licence.datefin))
//         this.licencekey= new Licencekey('');
//        this.licenceService.retrieveLicencesKey(this.licence.datefin).subscribe(
//           data=> this.saveLicence(data.value)
//        );
//       }
      
// handl(data){
//        console.log("console handl"+data);
//        //this.licence.licencekey = data;
// }
 saveLicence(){
  if(this.id==-1){
    this.licenceService.createLicence(this.licence)
    .subscribe(
      data=>{
         this.router.navigate(['licences'])
      }
    ) 
  }else{
  this.licenceService.updateLicence(this.id,this.licence)
  .subscribe(
    data=>{
         this.router.navigate(['licences'])
       }
     )
  }
}

}
