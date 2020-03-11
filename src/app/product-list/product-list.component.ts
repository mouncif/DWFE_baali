import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import {Product} from '../model/product.module';
import {ProductService} from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }

  products: Product[] = [];
  product: Product;
  ngOnInit() {
    this.fetchElements();
  }
  listData = new MatTableDataSource<Product>();
  displayedColumns: string[] = ['nom','nomcourt', 'unite', 'prixdevente', 'prixdebase', 'quantite', 'image','seuilmax','description', 'actions'];
  fetchElements()
  {
    this. productService.findAll().subscribe(
      res => {
        if (!res) return;
        console.log(res);
        this.listData = new MatTableDataSource(res as any);
      }
    )
  }
  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
}
delete(id){
  this. productService.delete(id).subscribe(()=>{
    this. products = this. products.filter(client=> client.id!=id);
    console.log(this. products);
   // this.notification.openSnackBar("Success Delete...!");
    this.fetchElements();
  })
}

onEdit(row){
  this. productService.populateform(row);
  this.router.navigate(['produit']);
  // const dialConfig = new MatDialogConfig();
  // dialConfig.disableClose = true;
  // dialConfig.autoFocus = true;

}

onDelete(id){
  if(confirm('Are sure?')){
    this.delete(id);
  }
}
}
