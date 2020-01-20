import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LicenceDataService} from '../service/data/licence-data.service'
import { Router } from '@angular/router';
import { logging } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { ClientDataService } from '../service/data/client-data.service';
import {  ViewChild, ElementRef,ViewChildren } from '@angular/core';
import { AlertsService } from 'angular-alert-module';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listoflicence',
  templateUrl: './listoflicence.component.html',
  styleUrls: ['./listoflicence.component.css']
})
export class ListoflicenceComponent implements AfterViewInit,OnInit {
@ViewChild('alert', { static: false }) alert: ElementRef;
//@ViewChildren(ListoflicenceComponent) alerts: Array<ListoflicenceComponent>
  
// alerts: Array<Alert>;
closeAlert() {
  this.alert.nativeElement.remove('show');
  }
  faEye = faCopy;
  message: String
  visible = false
  licences: Licence[] =null
  clients: Client[] = null
   
  constructor(
    private licenceService:LicenceDataService,
    private clientService:ClientDataService,
    private router:Router,
    private alerts: AlertsService,
    private toastr:ToastrService
  ) { }
    
  ngOnInit() {      
    this.refreshLicences();
    this.refreshClient();
  }
  ngAfterViewInit(){
    this.showToaster();
  }
  showToaster(){
    
  }
  
  refreshLicences(){
    this.licenceService.retrieveAllLicences().subscribe(
      response => {
       this.licences = response
      }
      )  
  } 
  deleteLicence(id){
    this.licenceService.deleteLicence(id).subscribe(
      response=>{
       this.message = `Delete of ${id} Successful !`
       this.refreshLicences();
      }
    )
  }
  updateLicence(id){
    //console.log(`delete`)
    this.router.navigate(['licences',id]);
  }
  AddLicence(){
   this.router.navigate(['licences',-1]);
  }
  refreshClient(){
    this.clientService.retrieveAllClient().subscribe(
      response => {
       this.clients = response;
       if(this.licences !==null){
       this.licences.forEach(ls => {
        if(ls.expiration<30){       
          this.toastr.warning('Licence '+ ls.client+' va expirer en '+ls.datefin,"NOTIFICATION")
        }
       }); 
      }
      }
      )  
  }
/* To copy Text from Textbox */
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
/* To copy any Text */
copyText(val: string){
  let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  confirmDelete(id){
    Swal.fire({
  title: 'Etes-Vous Sûr?',
  text: 'vous ne pourrez pas récupérer vos données!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Oui, Supprimer!',
  cancelButtonText: 'No, garder'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Succès',
      'La licence est supprimé.',  'success' 
    )
    this.deleteLicence(id)
  // For more information about handling dismissals please visit
  // https://sweetalert2.github.io/#handling-dismissals
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Annulé',
      'Votre fichier de licence est sécurisé :)',
      'error'
    )
  }
})
  }
   client : string;
  Search(){
    if(this.client !== ""){
      this.licences = this.licences.filter(res=>{
        return res.client.toLocaleLowerCase().match(this.client.toLocaleLowerCase())
     });
    }else if(this.client ===""){
      this.ngOnInit();
    }
   
  }
  //Static list
  // licences=[
  //   {id:1,datedebut:new Date(),datefin:new Date(),description:'last version 001',expiration:2,client:"sogo",licencekey:"dffdfdfdfdfdfdfdfdfdfdfdf"},
  //   {id:2,datedebut:new Date(),datefin:new Date(),description:'last version 001',expiration:15,client:"sogo",licencekey:"dffdfdfdfdfdfdfdfdfdfdfdf"},
  //   {id:3,datedebut:new Date(),datefin:new Date(),description:'last version 001',expiration:11,client:"Service info",licencekey:"dffdfdfdfdfdfdfdfdfdfdfdf"},
  //   {id:4,datedebut:new Date(),datefin:new Date(),description:'last version 001',expiration:10,client:"Gestion HB",licencekey:"dffdfdfdfdfdfdfdfdfdfdfdf"},
  //   {id:5,datedebut:new Date(),datefin:new Date(),description:'last version 001',expiration:12,client:"SARI",licencekey:"dffdfdfdfdfdfdfdfdfdfdfdf"},
  //   {id:6,datedebut:new Date(),datefin:new Date(),description:'last version 001',expiration:90,client:"sogo",licencekey:"dffdfdfdfdfdfdfdfdfdfdfdf"},
  // ]
}
export class Licence{
  constructor(
    public id: number,
    public datedebut:Date,
    public datefin: Date,
    public description: String,
    public expiration: Number,
    public client: String,
    public licencekey:String,
    public name:String
  ){
  }
  getexpiration(){
    return this.expiration;
  }
}
export class Client{
  constructor(
    public id: number,
    public name: String,
  ){
  }
}
export class Licencekey{
  constructor(
    public id: number,
    public licencekey:Date,
   
  ){
    //this.ex = datedebut.getHours()
  }
}