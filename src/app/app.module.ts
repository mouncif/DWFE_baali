import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import {MatCardModule} from '@angular/material/card';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';
import { FournisseurListComponent } from './fournisseurs/fournisseur-list/fournisseur-list.component';
import { FournisseurService}from './services/fournisseur.service';
import { AdminComponent } from './admin/admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent,
    FournisseursComponent,
    FournisseurComponent,
    FournisseurListComponent,
    AdminComponent,
    ProductListComponent,
    UsersComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule


  ],
  providers: [FournisseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }