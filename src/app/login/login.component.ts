import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../model/user.module';
import { MatDialog } from '@angular/material';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private login: UserService, private router: Router) { }

  private user :User = {

    

    email:'',
    
    password:'',
    
    profil:'',
    datecreation:'',
    image:'',
    nom:'',
    prenom:''
  
    
    
  };
  users: any;

  

 

  ngOnInit() {
    this.onClear();
    if (localStorage.getItem('email') == null){
      console.log("Everything fine");
    }else{
      this.router.navigate(['/login']);
    }
  }
  onClear() {
    this.login.initializeFormGroup();
    this.login.form.reset();
    this.resetLocalStorage();
  }
  resetLocalStorage() {
    localStorage.removeItem('id');
    
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('datecreation');
    localStorage.removeItem('profil');
    
    
  }
  onLogin(): void {
    this.resetLocalStorage();
    this.user = this.login.form.value;

    
      this.user = this.login.form.value;
      this.login.getAll().subscribe((data: any) => {
        for (var val of data) {
          if (this.user.email == val['email'] && this.user.password == val['password']) {
            localStorage.setItem("id", val["id"]);
            localStorage.setItem("email", val["email"]);
            this.router.navigateByUrl("/login");
            break;
          }
           else {
            this.router.navigateByUrl("/register");
          }
        
      
        
      
  }




}

      )}}
