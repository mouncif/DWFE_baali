import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import {Client} from 'src/app/model/client.module';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit  {

  private client :Client = {

    nom:'',
    prenom:'',

    email:'',
    telephone:'',
    ville:'',
    
    statut:'',
    datefin:'',
    datedebut:'',
    adresse:'',
    
  };

  constructor(private service:ClientService ,private router: Router) { }
  statuts = [
    { id:'Professionel', value: 'Professionel' },
    { id:'Civil', value: 'Civil' },
    { id:'Instructeur', value: 'Instructeur' }];


    onClear(){
      this.service.initializeFormGroup();
     this.service.form.reset();
    
    }
  ngOnInit() {
    this.service.findAll();
  }
  clients :Client[] = []
  add(){
    if(this.client.id == undefined){
      console.log(this.client);
      this.service.add(this.client)
      .subscribe((client)=>{
        this.clients = [client, ...this.clients];
        this.router.navigate(['dossier']);
      });
    }
    else{
      this.service.update(this.client)
      .subscribe((client)=>{
        console.log(client);
        this.router.navigate(['dossier']);
      });
    }
    
  }

  onSubmit(){
    if(this.service.form.valid){
      this.client = this.service.form.value;
      console.log(this.client);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    };
  }
  

}
