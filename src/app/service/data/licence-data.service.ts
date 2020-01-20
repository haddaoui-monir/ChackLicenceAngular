import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Licence } from '../../listoflicence/listoflicence.component';
import { LS_JPA_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LicenceDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllLicences(){
    return this.http.get<Licence[]>(`${LS_JPA_URL}`);
  }
  deleteLicence(id){
   return this.http.delete(`${LS_JPA_URL}/${id}`);
  }
  retrieveLicences(id){
    return this.http.get<Licence>(`${LS_JPA_URL}/${id}`);
  }
  updateLicence(id,licence){
    return this.http.put(`${LS_JPA_URL}/${id}`,licence);
  }
  createLicence(licence){
    return this.http.post(`${LS_JPA_URL}`,licence);
  }
  // retrieveLicencesKey(datefin){
  //   return this.http.get<Licencekey>(`http://cloud.peaqock.com:10000/licence/v1/generate/${datefin}`);
  // }
  // createLicencekey(key, licence){
  //   return this.http.post(`${LS_JPA_URL_key}`,{key,licence});
  // }
}
