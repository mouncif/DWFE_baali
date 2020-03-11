import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ FormGroup,FormControl,Validators} from '@angular/forms';
import{Product} from '../app/model/product.module';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private url = "http://localhost:3000/products"

  form:FormGroup= new FormGroup({
    id: new FormControl(null),
    nom: new FormControl('', Validators.required),
    nomcourt: new FormControl('', Validators.required),
    prixdebase: new FormControl(''),
    prixdevente: new FormControl(''),
    seuilmax: new FormControl(''),
    ville: new FormControl(''),
    quantite: new FormControl(''),
    image:new FormControl(''),
    unite:new FormControl(''),
    description:new FormControl('')
    
    });
    initializeFormGroup() {
      this.form.setValue({
      id: null,
      nom: '',
      nomcourt: '',
      prixdebase: '',
      prixdevente: '',
      seuilmax: '',
      quantite: '',
      ville: '',
      unite:'',
      description:'',
      image:''
      
      
      
      });

    }

    findAll(){
      return this.http.get<Product[]>(this.url);
    }
    add(product){
      return this.http.post<Product>(this.url, product);
    }
    delete(id){
      return this.http.delete(`${this.url}/${id}`);
    }
    update(product){
      return this.http.put(`${this.url}/${product.id}`, product);
    }
    populateform(row){
      this.form.setValue(row);
    }
  






}
