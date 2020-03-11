import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Fournisseur} from 'src/app/model/fournisseur.module';
import { FournisseurService } from '../../services/fournisseur.service';
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  private fournisseur :Fournisseur = {

    nom:'',
    nomcourt:'',

    adresseemail:'',
    telephone:'',
    telfix:'',
    fax:'',
    ville:'',
    
    
    adresse:''
  
    
    
    
  };

  constructor(private myGroup:FournisseurService ,private router: Router) { }
  

    onClear(){
      this.myGroup.initializeFormGroup();
     this.myGroup.form.reset();
    
    }
  ngOnInit() {
    this.myGroup.findAll();
  }
  fournisseurs :Fournisseur[] = []
  add(){
    if(this.fournisseur.id == undefined){
      console.log(this.fournisseur);
      this.myGroup.add(this.fournisseur)
      .subscribe((fournisseur)=>{
        this.fournisseurs = [fournisseur, ...this.fournisseurs];
        this.router.navigate(['fournisseurs']);
      });
    }
    else{
      this.myGroup.update(this.fournisseur)
      .subscribe((fournisseur)=>{
        console.log(fournisseur);
        this.router.navigate(['fournisseurs']);
      });
    }
    
  }

  onSubmit(){
    if(this.myGroup.form.valid){
      this.fournisseur = this.myGroup.form.value;
      console.log(this.fournisseur);
      this.add();
      this.myGroup.form.reset();
      this.myGroup.initializeFormGroup();
    };
   
  }
  

}

