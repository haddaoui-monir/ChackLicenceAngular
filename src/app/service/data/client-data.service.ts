import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../../listoflicence/listoflicence.component';
import { LS_JPA_CLIENT } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  constructor(
    private http:HttpClient
  ) { }

  retrieveAllClient(){
    return this.http.get<Client[]>(`${LS_JPA_CLIENT}`);
  }
  deleteClient(id){
   return this.http.delete(`${LS_JPA_CLIENT}/${id}`);
  }
  retrieveClient(id){
    return this.http.get<Client>(`${LS_JPA_CLIENT}/${id}`);
  }
  updateClient(id,client){
    return this.http.put(`${LS_JPA_CLIENT}/${id}`,client);
  }
  createClient(client){
    return this.http.post(`${LS_JPA_CLIENT}`,client);
  }
}
