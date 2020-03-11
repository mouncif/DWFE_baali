import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent } from './clients/clients.component';
import { ClientComponent} from './clients/client/client.component';
import { ClientListComponent} from './clients/client-list/client-list.component';
import { FournisseurComponent} from './fournisseurs/fournisseur/fournisseur.component';
import { FournisseursComponent} from './fournisseurs/fournisseurs.component';
import { FournisseurListComponent } from './fournisseurs/fournisseur-list/fournisseur-list.component';
import { AdminComponent} from './admin/admin.component';
import { ProductsComponent} from './products/products.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'list',component:ClientListComponent},
  { path: "login",component: AdminComponent},
  { path: "loginn",component: LoginComponent},
  {path: "register",component: RegisterComponent},
  {path:'autre',component:FournisseursComponent},
  {path:"listutil",component:UserListComponent},
  {path:'fournisseurs',component:FournisseurComponent},
  {path:'dossier',component:ClientComponent},
  {path:'dossierr',component:ClientsComponent},
  {path:'produit',component:ProductComponent},
  {path:'listfor',component:FournisseurListComponent},
  {path:'listpro',component:ProductListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
