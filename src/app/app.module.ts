import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }