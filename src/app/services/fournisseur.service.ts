import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from 'src/app/model/fournisseur.module';
import{ FormGroup,FormControl,Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http:HttpClient) { }
  private url = "http://localhost:3000/fournisseurs"

  form:FormGroup= new FormGroup({
    id: new FormControl(null),
    nom: new FormControl('', Validators.required),
    nomcourt: new FormControl('', Validators.required),
    adresseemail: new FormControl('', Validators.email),
    telephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    telfix: new FormControl('', [Validators.required, Validators.minLength(8)]),
    fax: new FormControl('', [Validators.required, Validators.minLength(8)]),
    ville: new FormControl(''),
    adresse: new FormControl('')
  
    
    
    
    });

    initializeFormGroup() {
      this.form.setValue({
      id: null,
      nom: '',
      nomcourt: '',
      adresseemail: '',
      telephone: '',
      telfix: '',
      fax: '',
      ville: '',
      adresse:''
      
      
      
      });

    }

    findAll(){
      return this.http.get<Fournisseur[]>(this.url);
    }
    add(fournisseur){
      return this.http.post<Fournisseur>(this.url, fournisseur);
    }
    delete(id){
      return this.http.delete(`${this.url}/${id}`);
    }
    update(fournisseur){
      return this.http.put(`${this.url}/${fournisseur.id}`, fournisseur);
    }
    populateform(row){
      this.form.setValue(row);
    }
  
  



























}
