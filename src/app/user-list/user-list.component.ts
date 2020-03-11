import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { UserService} from '../user.service';
import {User} from '../model/user.module';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  users: User[] = [];
  usert:  User;
  ngOnInit() {
    this.fetchElements();
  }
  listData = new MatTableDataSource< User>();
  displayedColumns: string[] = ['nom','prenom','email','profil', 'image', 'actions'];
  fetchElements()
  {
    this. userService.findAll().subscribe(
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
  this. userService.delete(id).subscribe(()=>{
    this. users = this. users.filter(client=> client.id!=id);
    console.log(this. users);
   // this.notification.openSnackBar("Success Delete...!");
    this.fetchElements();
  })
}

onEdit(row){
  this. userService.populateform(row);
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
