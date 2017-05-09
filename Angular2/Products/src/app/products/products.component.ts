import { Component } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products.component.html',
})
export class ProductsComponent  {
    products: any[] = [
    {
      imageUrl: '',
      name: 'Leaf Rake',
      code: '001',
      availableDate: '2016-01-01',
      price: 19.95,
      rating: 3
    },
    {
      imageUrl: '',
      name: 'Garden Cart',
      code: '002',
      availableDate: '2016-01-02',
      price: 32.99,
      rating: 4
    },
    {
      imageUrl: '',
      name: 'Hammer',
      code: '003',
      availableDate: '2016-01-03',
      price: 8.99,
      rating: 5
    },
    {
      imageUrl: '',
      name: 'Saw',
      code: '004',
      availableDate: '2016-01-04',
      price: 11.55,
      rating: 4
    },
    {
      imageUrl: '',
      name: 'Video game controller',
      code: '005',
      availableDate: '2016-01-05',
      price: 35.95,
      rating: 5
    },
  ];
  showImages: boolean = false;
  filterBy: string = '';
}
