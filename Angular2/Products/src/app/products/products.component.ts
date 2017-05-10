import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './product';
import { ProductService, ProductServiceInterface } from "./services/product.service";

@Component({
  selector: 'products-list',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: Product[];
  showImages: boolean = false;
  filterBy: string = '';
  
  constructor(@Inject(ProductService) private productService: ProductServiceInterface) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
