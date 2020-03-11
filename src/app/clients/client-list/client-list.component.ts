import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { Client} from '../../model/client.module';
import { ClientService} from '../../services/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private clientService:ClientService, private router:Router) { }

  clients: Client[] = [];
  client: Client;
  ngOnInit() {
    this.fetchElements();
  }
  listData = new MatTableDataSource<Client>();
  displayedColumns: string[] = ['nom','prenom', 'email', 'telephone', 'ville', 'statut', 'datedebut', 'actions'];
  fetchElements()
  {
    this.clientService.findAll().subscribe(
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
  this.clientService.delete(id).subscribe(()=>{
    this.clients = this.clients.filter(client=> client.id!=id);
    console.log(this.clients);
   // this.notification.openSnackBar("Success Delete...!");
    this.fetchElements();
  })
}

onEdit(row){
  this.clientService.populateform(row);
  this.router.navigate(['dossier']);
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

