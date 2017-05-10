import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductsComponent } from "./products/products.component";
import { StarsComponent } from "./stars/starts.component";
import { ProductFilterPipe } from "./products/pipes/products-filter.pipe";
import { ProductService } from "./products/services/product.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductsComponent, StarsComponent, ProductFilterPipe ],
  providers:    [ ProductService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
