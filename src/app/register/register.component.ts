import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../model/user.module';
import { MatDialog } from '@angular/material'
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private register: UserService, private router: Router) { }

  private user :User = {

    

    email:'',
    
    password:'',
    
    profil:'',
    datecreation:'',
    nom:'',
    prenom:'',
    image:''
  
    
    
  };

  users: User[] = [];

  ngOnInit() {
    this.onClear();
    if (localStorage.getItem('email') == null){
      console.log("Everything fine");
    }else{
      this.router.navigate(['/login']);
    }
  }

  onClear() {
    this.register.initializeFormGroup();
    this.register.form.reset();
  }
  add() {
    this.register.add(this.user)
      .subscribe((user) => {
        this.users = [user, ...this.users];
      });
  }

  update() {
    this.register.update(this.user).subscribe(() => this.router.navigateByUrl("/login"));
  }

  onRegister() {
    if (this.register.form.valid) {
      this.user = this.register.form.value;
      if (this.register.form.value.id == null) {
        console.log(this.user);
        this.add();
        this.register.form.reset();
        this.router.navigateByUrl("/loginn");
      } else {
        console.log(this.user);
        this.update();
        this.register.form.reset();
      }
      this.register.initializeFormGroup();
    }
  }
}