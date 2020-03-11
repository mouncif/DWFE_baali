import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { Fournisseur} from '../../model/fournisseur.module';
import { FournisseurService} from '../../services/fournisseur.service';
@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {

  constructor(private fournisseurService:FournisseurService, private router:Router) { }

  fournisseurs: Fournisseur[] = [];
  fournisseur: Fournisseur;
  ngOnInit() {
    this.fetchElements();
  }
  listData = new MatTableDataSource<Fournisseur>();
  displayedColumns: string[] = ['nom','nomcourt', 'adresseemail', 'telephone', 'ville', 'telfix', 'fax', 'adresse','actions'];
  fetchElements()
  {
    this.fournisseurService.findAll().subscribe(
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
  this.fournisseurService.delete(id).subscribe(()=>{
    this.fournisseurs = this.fournisseurs.filter(client=> client.id!=id);
    console.log(this.fournisseurs);
   // this.notification.openSnackBar("Success Delete...!");
    this.fetchElements();
  })
}

onEdit(row){
  this.fournisseurService.populateform(row);
  this.router.navigate(['ajouterpro']);
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


