import { Injectable } from '@angular/core';
import{ FormGroup,FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {User} from './model/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private url = "http://localhost:3000/users"


  
  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    profil: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', Validators.email),
    datecreation: new FormControl(''),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    image: new FormControl(''),




    
    
    });

    initializeFormGroup() {
      this.form.setValue({
        id: null,
       
        image:'',
        nom:'',
        prenom:'',
        email: '',
        
        password: '',
       
        
        profil:'',
        datecreation:''
      });
    }
    findAll() {
      return this.http.get<User[]>(this.url);
    }
    add(user) {
      return this.http.post<User>(this.url, user);
    }
    delete(id) {
      return this.http.delete(`${this.url}/${id}`);
    }
    update(user) {
      return this.http.put(`${this.url}/${user.id}`, user);
    }
  
    populateform(row) {
      this.form.setValue(row);
    }
  
    getAll() {
      return this.http.get<User>(this.url);
    }
  
    loginUser(user) {
      //return this.http.post<User>(("http://localhost:3000/users/?email=" + user.email + "&password="+ user.password )) ;
      return null;
    }
  
    isLoggedIn() {
      if (localStorage.getItem('email') == null) {
        return false;
      } else {
        return true;
      }
    }
  
  
    findUser(id){
      return this.http.get<User>(`${this.url}/${id}`);
    }
  
  
  
  
  
  
  }










