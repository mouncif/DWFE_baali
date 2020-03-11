import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../model/product.module';
import {ProductService} from '../../app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product :Product = {

    nom:'',
    nomcourt:'',

    prixdebase:'',
    prixdevente:'',
    
    
    seuilmax:'',
    unite:'',
    quantite:'',
    image:'',
    description:''
    
    
    
  
    
    
    
  };

  constructor(private Group:ProductService ,private router: Router) { }
  

    onClear(){
      this.Group.initializeFormGroup();
     this.Group.form.reset();
    
    }
  ngOnInit() {
    this.Group.findAll();
  }
  products :Product[] = []
  add(){
    if(this.product.id == undefined){
      console.log(this.product);
      this.Group.add(this.product)
      .subscribe((product)=>{
        this.products = [product, ...this.products];
        this.router.navigate(['produit']);
      });
    }
    else{
      this.Group.update(this.product)
      .subscribe((product)=>{
        console.log(product);
        this.router.navigate(['produit']);
      });
    }
    
  }

  onSubmit(){
    if(this.Group.form.valid){
      this.product = this.Group.form.value;
      console.log(this.product);
      this.add();
      this.Group.form.reset();
      this.Group.initializeFormGroup();
    };
   
  }
  

}


