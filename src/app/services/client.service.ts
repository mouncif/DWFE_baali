import { Injectable } from '@angular/core';
import{ FormGroup,FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/model/client.module';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  private url = "http://localhost:3000/clients"

  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    telephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    ville: new FormControl(''),
    statut: new FormControl(0),
    datedebut: new FormControl(''),
    datefin: new FormControl(''),
    adresse:new FormControl('')
    
    });

    initializeFormGroup() {
      this.form.setValue({
      id: null,
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      ville: '',
      statut: 0,
      datedebut: '',
      datefin:''
      
      });

    }

    findAll(){
      return this.http.get<Client[]>(this.url);
    }
    add(client){
      return this.http.post<Client>(this.url, client);
    }
    delete(id){
      return this.http.delete(`${this.url}/${id}`);
    }
    update(client){
      return this.http.put(`${this.url}/${client.id}`, client);
    }
    populateform(row){
      this.form.setValue(row);
    }
  
  



























}
